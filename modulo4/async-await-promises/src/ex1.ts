import axios from 'axios';
import { baseURL } from './baseURL'
//a)

//b) async function nomeDaFuncao(): Promise<any[]>

//c)
async function getSubscribers(): Promise<any[]> {
    const response = await axios.get(`${baseURL}/subscribers`);
    return response.data;
};