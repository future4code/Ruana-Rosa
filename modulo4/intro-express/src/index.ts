import express from "express";

import { AddressInfo } from "net";

const app = express();

app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
})


//EXERCÍCIO 1
app.get("/hello", (req, res) => {
  res.send("Hello from Express").status(201)
})

//EXERCÍCIO 2
type usuario = {
  id: string | number,
  name: string,
  phone: number,
  email: string,
  website: string,
}

//EXERCÍCIO 3
const usuarios = [

  {
    'id': 1,
    'name': 'Primeira',
    'phone': '012123345456',
    'email': 'primeira@exemplo.com',
    'website': 'www.primeira.com',
  },
  {
    'id': 2,
    'name': 'Segunda',
    'phone': '012112223334',
    'email': 'segunda@exemplo.com',
    'website': 'www.segunda.com',
  },
  {
    'id': 3,
    'name': 'Terceira',
    'phone': '012122344455',
    'email': 'terceira@ememplo.com',
    'website': 'www.terceira.com',
  }

]