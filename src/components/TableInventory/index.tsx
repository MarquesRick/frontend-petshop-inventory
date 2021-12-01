import React from 'react';
import { Table } from 'react-bootstrap';
import './styles.css';

const TableInventory = () => {
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Descrição Produto</th>
            <th>Tipo Produto</th>
            <th>Preço Custo</th>
            <th>Qtd. Estoque</th>
            <th>Preço Mercado (+ 30%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Ração Gato - 10KG</td>
            <td>Alimento</td>
            <td>R$ 6,99</td>
            <td>500</td>
            <td>
              R$ {((6.99 / 100) * 30 + 6.99).toFixed(2).replace('.', ',')}
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Ração Cachorro - 10KG</td>
            <td>Alimento</td>
            <td>R$ 5,99</td>
            <td>500</td>
            <td>
              R$ {((5.99 / 100) * 30 + 5.99).toFixed(2).replace('.', ',')}
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Remédio Gato - 100ML</td>
            <td>Remédio</td>
            <td>R$ 25,99</td>
            <td>150</td>
            <td>
              R$ {((25.99 / 100) * 30 + 25.99).toFixed(2).replace('.', ',')}
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Remédio Cachorro - 100ML</td>
            <td>Remédio</td>
            <td>R$ 29,99</td>
            <td>300</td>
            <td>
              R$ {((29.99 / 100) * 30 + 29.99).toFixed(2).replace('.', ',')}
            </td>
          </tr>
          <tr>
            <td>5</td>
            <td>Banho/Tosa - Cachorro</td>
            <td>Banho/Limpeza</td>
            <td>-</td>
            <td>-</td>
            <td>R$ 80,00</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Banho - Gato</td>
            <td>Banho/Limpeza</td>
            <td>-</td>
            <td>-</td>
            <td>R$ 60,00</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Coleira - Gato</td>
            <td>Utensílio</td>
            <td>R$ 19,99</td>
            <td>456</td>
            <td>
              R$ {((19.99 / 100) * 30 + 19.99).toFixed(2).replace('.', ',')}
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>Coleira - Cachorro</td>
            <td>Utensílio</td>
            <td>R$ 24,99</td>
            <td>488</td>
            <td>
              R$ {((24.99 / 100) * 30 + 24.99).toFixed(2).replace('.', ',')}
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

export default TableInventory;
