import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME
    }
});

const app: Express = express();
app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

//Testar servidor
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
})

type user = {
    id: string,
    name: string,
    nickname: string,
    email: string,
}



//Criar usuário
const createUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string,
): Promise<void> => {
    await connection
        .insert({
            id: Math.floor(Date.now() * Math.random()).toString(36),
            name: name,
            nickname: nickname,
            email: email,
        })
        .into("TodoListUser");
};

app.post('/user', async (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        await createUser(
            req.body.id,
            req.body.name,
            req.body.nickname,
            req.body.email,
        );

        res.status(201).send({ message: 'usuário criado com sucesso' })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

//Pegar usuário pela ID
const getUserById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM TodoListUser WHERE id = '${id}'
    `);
    return result[0]
}
app.get("/user/:id", async (req: Request, res: Response) => {
    try {
        const id = req.params.id

        console.log(await getUserById(id))

        res.end()
    } catch (error: any) {
        console.log(error.message)
        res.status(500).send("Unexpected error")
    }
})

//Alterar usuário
const changeUser = async (
    id: string,
    name: string,
    nickname: string,
    email: string,
): Promise<void> => {
    const result = await connection.raw(`
		UPDATE * FROM TodoListUser WHERE id = '${id}'
	`);
   
	return result[0];
};
app.put('/user/edit/:id', async (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        await changeUser(
            req.params.id,
            req.body.name,
            req.body.nickname,
            req.body.email,
        );

        res.status(201).send({ message: 'usuário alterado com sucesso' })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

