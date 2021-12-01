import React from 'react';
import {
  Button,
  ButtonGroup,
  Col,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap';
import { DivButtonGroup, DivMain, Title } from './styles';

const FormInventory = () => {
  return (
    // <Form>
    //   <h1>Formulário</h1>
    //   <Form.Group
    //     as={Row}
    //     className="mb-1"
    //     controlId="formInventoryNameProduct"
    //   >
    //     <Form.Label column sm="2">
    //       Nome Produto:
    //     </Form.Label>
    //     <Col lg="4">
    //       <Form.Control type="text" placeholder="Nome Produto" />
    //     </Col>
    //     <Form.Label column sm="2">
    //       Tipo Produto:
    //     </Form.Label>
    //     <Col lg="4">
    //       <Form.Control as="select" className="primary">
    //         <option value="red">Red</option>
    //         <option value="blue">Blue</option>
    //         <option value="green">Green</option>
    //         <option value="black">Black</option>
    //         <option value="orange">Orange</option>
    //       </Form.Control>
    //     </Col>
    //   </Form.Group>
    // </Form>
    <DivMain>
      <Title>Formulário Estoque ➕</Title>
      <Form className="text-center">
        <Row className="mb-3">
          <Col>
            <Form.Label>Nome Produto:</Form.Label>
            <Form.Control placeholder="Nome Produto" id="nameProduct" />
          </Col>
          <Col>
            <Form.Label>Código de Barras:</Form.Label>
            <Form.Control placeholder="Código Barras" id="barCode" />
          </Col>
          <Col>
            <Form.Label>Tipo Mercadoria:</Form.Label>
            <Form.Control as={'select'} placeholder="Tipo Mercadoria">
              <option defaultValue={'-1'}></option>
              <option value="food">Alimento</option>
              <option value="medicine">Remédio</option>
              <option value="shower">Banho/Limpeza</option>
              <option value="util">Utensílio</option>
            </Form.Control>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Label>Fornecedor:</Form.Label>
            <Form.Control placeholder="Fornecedor" id="nameVender" />
          </Col>
          <Col>
            <Form.Label>Quantidade:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Quantidade"
              id="quantity"
              min={1}
              max={1000}
            />
          </Col>
          <Col>
            <Form.Label>Tipo Animal:</Form.Label>
            <Form.Control
              as={'select'}
              placeholder="Tipo Animal"
              id="typeAnimal"
              aria-label="Floating label select example"
            >
              <option defaultValue={'-1'}></option>
              <option value="dog">Cão</option>
              <option value="cat">Gato</option>
              <option value="reptile">Reptil</option>
              <option value="others">Outros</option>
            </Form.Control>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>Data Validade</Form.Label>
            <Form.Control type="date" placeholder="Data Validade" id="date" />
          </Col>
          <Col>
            <Form.Label>Lote:</Form.Label>
            <Form.Control placeholder="Lote" id="lote" />
          </Col>
          <Col>
            <Form.Label>Preço de custo (UN):</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text>R$</InputGroup.Text>
              <Form.Control aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>,99</InputGroup.Text>
            </InputGroup>
          </Col>
        </Row>
        <br />
        <Row>
          <Col>
            <Form.Label>Observação:</Form.Label>
            <Form.Control
              as="textarea"
              placeholder="Digite sua observação"
              style={{ height: '100px' }}
              id="observation"
            />
          </Col>
        </Row>
      </Form>
      <DivButtonGroup>
        <Button>Adicionar ➕</Button>
      </DivButtonGroup>
    </DivMain>
  );
};

export default FormInventory;
