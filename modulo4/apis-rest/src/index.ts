import express, { Request, Response } from 'express'
import cors from 'cors'
import { Type } from 'typescript'

type User = {
  id: number,
  name: string,
  email: string,
  type: string,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados
let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: "ADMIN",
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: "NORMAL",
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: "NORMAL",
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: "NORMAL",
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: "ADMIN",
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: "ADMIN",
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})

//EXERCÍCIO 1
// a. GET
// b. '/users'

// EXERCÍCIO 2
app.get('/users/:type', (req: Request, res: Response) => {
  let errorCode = 400
  try {
    const type: string = req.params.type
    if (!type) {
      errorCode = 422
      throw new Error('Invalid type')
    }
    const user = users.find((user) => {
      return user.type === type
    })
    if (!user) {
      errorCode = 404
      throw new Error('user not found')
    }
    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message })
  }
})
//a. Através de patch

//EXERCÍCIO 3
app.get('/users', (req: Request, res: Response) => {
  let codeError: number = 400
  try {
    const name: string = req.query.name as string
    const user: User | undefined = users.find((user) => user.name.toLowerCase() === name.toLowerCase())
    if (!user) {
      codeError = 404
      throw new Error('Usuário não encontrado')
    }
    res.status(200).send(user)
  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

//a. Query

//EXERCÍCIO 4
app.post('/users', (req: Request, res: Response) => {
  let codigoDoErro: number = 400
  try {
    const { id, name, email, type, age } = req.body
    if (!id || !name || !email || !type || !age) {
      codigoDoErro = 422
      throw new Error('Tá faltando coisa aí hein!')
    }
    const novoUsuario: User = {
      id,
      name,
      email,
      type,
      age
    }
    users.push(novoUsuario)
    res.status(201).send({ message: 'usuário criado com sucesso' })
  } catch (error: any) {
    res.status(codigoDoErro).send({ message: error.message })
  }
})

//a. Ao mudar apenas o método, a requisição continuou funcionando normalmente
