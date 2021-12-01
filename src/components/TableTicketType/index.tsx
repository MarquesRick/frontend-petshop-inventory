import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { TicketService } from '../../services/TicketService';
import { ITicketType } from '../../types/TicketType';

const TableTicketType = () => {
  const [table, setTable] = useState<ITicketType[]>();

  useEffect(() => {
    const ticketService = new TicketService();
    (async () => {
      const res = await ticketService.getTicketValues();
      setTable(res);
    })();
  }, []);

  console.log(table);

  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Id</th>
          <th>Descrição</th>
          <th>Nome</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody>
        {table?.map(x => (
          <tr key={x.id}>
            <td>{x.id}</td>
            <td>{x.typeDescription}</td>
            <td>{x.typeName}</td>
            <td>{x.typeValue}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableTicketType;
