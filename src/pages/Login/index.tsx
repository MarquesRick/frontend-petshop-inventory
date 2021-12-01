import React, { ChangeEvent, FormEvent, useState } from 'react';
import { ButtonAlign, Form, Title, Error } from './styles';
import './styles.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/images/paw.svg';
import { UserService } from '../../services/UserService';
import ILogin from '../../types/Login';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const history = useHistory();
  const [login, setLogin] = useState('');
  const [inputError, setInputError] = useState('');
  const [password, setPassword] = useState('');

  function handleInputEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setLogin(event.target.value);
  }

  function handleInputPassChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value);
  }

  function redirectToHome(): void {
    history.push('/home');
  }

  async function submitHandleForm(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    //não executa mais reload no onSubmit
    event.preventDefault();

    try {
      const userService = new UserService();

      const loginModel: ILogin = {
        email: login,
        password: password,
      };

      const response = await userService.getLogin();
      if (response === 'success') {
        localStorage.setItem('@Tickets:user', 'Henrique Marques');
        redirectToHome();
        setInputError('');
      }
      setInputError('Login ou senha erradas');
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Title>
        PetShop <img src={logo} alt="logo-ticket" /> Inventory
      </Title>

      {inputError && <Error>{inputError}</Error>}

      <Form onSubmit={submitHandleForm}>
        <InputGroup className="mb-1">
          <FormControl
            placeholder="Email"
            aria-label="Email"
            aria-describedby="basic-addon2"
            onChange={handleInputEmailChange}
          />
          <InputGroup.Text id="basic-addon2">Login 📩</InputGroup.Text>
        </InputGroup>
        <InputGroup className="mb-1">
          <FormControl
            placeholder="Senha"
            aria-label="Senha"
            aria-describedby="basic-addon2"
            onChange={handleInputPassChange}
          />
          <InputGroup.Text id="basic-addon2">Senha 🔑</InputGroup.Text>
        </InputGroup>
        <ButtonAlign>
          <Button variant="primary" className="salveTrans" type="submit">
            Acessar 🎯
          </Button>
        </ButtonAlign>
      </Form>
    </>
  );
};

export default Login;
