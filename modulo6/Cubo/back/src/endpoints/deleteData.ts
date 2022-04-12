import { Request, Response } from "express";
import { connection } from "../connection";

export default async function deleteData(req: Request, res: Response) {
    try {
        let message = 'Data deleted successfully'
        const { id } = req.params
        await connection.raw(`
        delete from cubo_data where id = "${id}"
        `)

        res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}