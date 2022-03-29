import { Request, Response } from "express";
import { connection } from "../connection";
import { post } from "../types";

export default async function showPostsByType(req: Request, res: Response) {
    try {
        let message = "Success!"
        const type = req.params.type
        const postsByType: post[] = await connection("labook_posts")
            .select("*")
            .where({ type })
        if (!postsByType[0]) {
            res.statusCode = 404
            message = "Posts not found"
            throw new Error(message)
        }
        res.status(200).send({ message, postsByType })
    } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400
        res.send({ message })
    }
}