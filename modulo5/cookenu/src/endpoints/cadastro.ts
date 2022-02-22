import { Request, Response } from "express";
import connection from "../Data/connection";
import generateId from "../Data/createId";
import { User } from "../Types/typeUser";


const createUser = async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error("Por favor, verifique seus dados. Nome, email e senha são de preencnhimento obrigatório")
        }
        if (password.lengh < 6) {
            throw new Error("Sua senha deve ter no mínimo 6 caracteres")
        }
        if (email.indexOf("@") === -1){
            throw new Error("Insira um email válido")
        }

        const user: User = {
            id: generateId(),
            name,
            email,
            password
        }

        await connection("cookenu_users").insert(user);

        res.status(200).send({ message: "Usuário criado com sucesso!" })

    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

export default createUser