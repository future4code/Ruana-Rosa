import axios from 'axios';
import { baseURL } from './baseURL'

//a) Na arrow function não é necessária a palavra 'function'.
  // Deve ser declarada como const, e o 'async' vem antes dos parênteses,
  // e não no início da declaração.
  // E, claro, precisa da setinha antes do seu conteúdo.

//b)
const getSubscribers = async (): Promise<any[]> => {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
  };