import { Request, Response } from "express";
import { connection } from "../Data/connection";
import { product, responseDB } from "../Types/types";

export default async function getProductsById(req: Request, res: Response): Promise<void> {
    try {
        let message = 'Success'
        const id = req.params.id
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1;
        }
        let size = 5;
        let offset = size * (page - 1)
        const resultDB: responseDB[] = await connection.raw(`
        SELECT * FROM amaroProducts WHERE id = ${id}
        `)
        if (!resultDB) {
            res.statusCode = 404
            message = 'Data not found'
            throw new Error(message)
        }
        const result = resultDB.map((item) => {
            return ({
                id: item.id,
                name: item.name,
                tags: item.tags.split(',')
            }
            )
        })
        console.log(result)
        res.status(200).send({ message, page, result })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}