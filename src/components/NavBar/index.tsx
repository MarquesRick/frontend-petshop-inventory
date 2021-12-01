import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { IUser } from '../../types/Users';
import { Title } from './styles';
import { useHistory } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const NavBar = (user: IUser) => {
  const history = useHistory();

  const logout = () => {
    localStorage.setItem('@Tickets:user', '');
    history.push('/');

    return { logout };
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <Title>🐾 PetShop Inventory</Title>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="inventory">
              <Nav.Link>Estoque 📦</Nav.Link>
            </LinkContainer>
            <LinkContainer to="addinventory">
              <Nav.Link href="#link">Adicionar Estoque ➕</Nav.Link>
            </LinkContainer>
            <Nav.Link href="#link">Venda Manual 💰</Nav.Link>
            <NavDropdown
              title={
                'Bem-vindo: ' + user.username?.replace(/['"]+/g, '') + ' 🙋🏻‍♂️'
              }
              id="basic-nav-dropdown"
            >
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logout}>🔙 Sair</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
