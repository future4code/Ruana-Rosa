import express, { Request, Response } from "express";

import { AddressInfo } from "net";
import { type } from "os";

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

app.get("/ping", (req, res) => {          
    res.send("Pong!").status(201)
})

//EXERCÍCIO 2

type afazer = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// EXERCÍCIO 3

const afazeres = [
    {
        'userId': 1,
        'id': 1,
        'title': 'Acordar',
        'completed': true
    },
    {
        'userId': 1,
        'id': 2,
        'title': 'Assistir à aula',
        'completed': true
    },
    {
        'userId': 1,
        'id': 3,
        'title': 'Fazer os exercícios',
        'completed': false
    },
    {
        'userId': 1,
        'id': 4,
        'title': 'Almoçar',
        'completed': false
    },
    {
        'userId': 1,
        'id': 5,
        'title': 'Matar cochonilhas',
        'completed': true
    }
]

// EXERCÍCIO 4

app.get('/afazeres/status', (req: Request, res: Response) =>{
   const status = req.query.completed
   
   if (!status){
       res.status(400).send("Faltou especificar o status")
   }

   const tarefas = []
   for (let afazer of afazeres){
       if (afazer.completed === status) {
           tarefas.push({
            userId: afazer.userId,
            id: afazer.id,
            title: afazer.title,
            completed: afazer.completed               
           })
       }
   }
    res.send({
        result: {
          quantity: tarefas.length,
          list: tarefas
        }
      }).status(201)
})
