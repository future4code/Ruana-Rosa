import { Request, Response } from "express"
import { connection } from "../connection"
import { post } from "../types"

export default async function getAllPosts(req: Request, res: Response) {
    try {
        let message = "Success!"

        const allPosts: post[] = await connection("labook_posts")
            .select("*")

        if (!allPosts) {
            res.statusCode = 404
            message = "Posts not found"
            throw new Error(message)
        }
        res.status(200).send({ message, allPosts })
    } catch (error: any) {
        let message = error.sqlMessage || error.message
        res.statusCode = 400

        res.send({ message })
    }
}