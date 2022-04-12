import { Request, Response } from "express"
import { connection } from "../connection"
import { OrderItem } from "../types/types"

export default async function getItems(req: Request, res: Response) {
    try {
        let message = "Success"
        const result: OrderItem[] =
            await connection('pizzeriaItem')
                .select('*')
        if (!result) {
            res.statusCode = 404
            message = 'Data not found'
            throw new Error(message)
        }
        res.status(200).send({ message, result })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}