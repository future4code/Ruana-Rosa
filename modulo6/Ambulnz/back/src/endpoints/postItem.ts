import { Request, Response } from "express";
import { connection } from "../connection";
import generateId from "../services/idGenerator";

export default async function postItem(req: Request, res: Response) {
    try {
        let message = "Pizza chosen successfully"
        const { pizza, quantity, itemPrice } = req.body
        if (!pizza || !quantity ||!itemPrice) {
            res.statusCode = 406
            message = 'All fields must be filled'
            throw new Error(message)
        }
        const id: string = generateId()
        await connection('pizzeriaItem')
            .insert({
                id, pizza, quantity, itemPrice
            })
        res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}