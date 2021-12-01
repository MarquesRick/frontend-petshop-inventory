import { BASE_URL } from '../api/requests';
import axios from 'axios';
import { ITicketType } from '../types/TicketType';

interface ITicketService {
  getTicketValues(): Promise<ITicketType[]>;
}

export class TicketService implements ITicketService {
  async getTicketValues(): Promise<ITicketType[]> {
    const api = await axios
      .get<ITicketType[]>(`${BASE_URL}/ticketTypes`)
      .then(response => response.data);
    return api;
  }
}
