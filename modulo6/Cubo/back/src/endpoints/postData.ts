import { Request, Response } from "express";
import { connection } from "../connection";
import generateId from "../services/idGenerator";

export default async function postData(req: Request, res: Response){
    try {
        let message = "Data registered successfully"
        const {firstName, lastName, participation} = req.body
        if (!firstName||!lastName||!participation){
            res.statusCode = 406
            message = 'All fields must be filled'
            throw new Error(message)
        }
        const id: string = generateId()
        await connection('cubo_data')
            .insert({
                id,
                firstName,
                lastName,
                participation
            })
            res.status(201).send(message)
    } catch (error) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
        res.send({ message })
    }
}