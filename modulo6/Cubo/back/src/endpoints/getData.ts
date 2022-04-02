import { Request, Response } from "express";
import { connection } from "../connection";
import { participant } from "../types/types";

export default async function getData(req: Request, res: Response) {
    try {
        let message = 'Success'

        const result: participant[] = await connection('cubo_data')
            .select('*')
        if (!result) {
            res.statusCode = 404
            message = 'Data not found'
            throw new Error(message)
        }
        const sum: number = await connection('cubo_data')
            .sum('participation')
        const total = sum[0]["sum(`participation`)"]
        res.status(200).send({ message, result, total })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}