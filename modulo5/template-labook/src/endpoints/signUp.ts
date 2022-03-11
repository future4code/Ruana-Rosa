import { Request, Response } from "express"
import { connection } from "../connection"
import { hash } from "../services/hashManager"
import generateId from "../services/idGenerator"
import { generateToken } from "../services/tokenGenerator"

export default async function signUp(req: Request, res: Response) {
    try {
        let message = "Success!"
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 406
            message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }

        const id: string = generateId()

        const cypherPassword = await hash(password);

        await connection('labook_users')
            .insert({
                id,
                name,
                email,
                password: cypherPassword
            })

        const token: string = generateToken({ id })

        res.status(201).send({ message, token })

    } catch (error: any) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message

        res.send({ message })
    }
}
