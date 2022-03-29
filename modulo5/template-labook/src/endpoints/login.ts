import { Request, Response } from "express"
import { connection } from "../connection"
import { compare } from "../services/hashManager"
import { generateToken } from "../services/tokenGenerator"
import { User } from "../types"

export default async function login(req: Request, res: Response) {
    try {
        let message = "Success!"
        const { email, password } = req.body
        if (!email || !password) {
            res.statusCode = 406
            message = '"email" and "password" must be provided'
            throw new Error(message)
        }
        const queryResult: any = await connection("labook_users")
            .select("*")
            .where({ email })
        if (!queryResult[0]) {
            res.statusCode = 401
            message = "Invalid credentials"
            throw new Error(message)
        }
        const user: User = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password
        }
        const passwordIsCorrect: boolean = await compare(password, user.password)
        if (!passwordIsCorrect) {
            res.statusCode = 401
            message = "Invalid credentials"
            throw new Error(message)
        }
        const token: string = generateToken({
            id: user.id
        })
        res.status(200).send({ message, token })
    } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}