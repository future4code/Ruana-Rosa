import { Request, Response } from "express";
import { connection } from "../connection";
import { getTokenData } from "../services/tokenGenerator";
import { authenticationData } from "../types";

export default async function makeFriendship(req: Request, res: Response) {
    try {
        let message = "Friendship established!"
        const token: string = req.headers.authorization as string
        const tokenData: authenticationData = getTokenData(token)
        const { id } = req.params
        await connection('labook_friends')
            .insert({
                user_id: tokenData.id,
                friend_id: id
            })
        res.status(201).send({ message })
    } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}