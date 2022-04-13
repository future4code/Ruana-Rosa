import { Request, Response } from "express";
import { connection } from "../Data/connection";
import { product, responseDB } from "../Types/types";

export default async function getProducts(req: Request, res: Response): Promise<void> {
    try {
        let message = 'Success'
        const id = req.query.id
        const name = req.query.name
        const tags = req.query.tags
        let page = Number(req.query.page)
        if (page < 1 || isNaN(page)) {
            page = 1;
        }
        let size = 5;
        let offset = size * (page - 1)
        const resultDB: responseDB[] = await connection('amaroProducts')
            .select('*')
            // .where('name', 'like', `%${name}%`)
            // .where('tags', 'like', `%${tags}%`)
            // .where('id', '=', `${id}`)
            .limit(size)
            .offset(offset)
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
        res.status(200).send({ message, page,  result })
    } catch (error) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}