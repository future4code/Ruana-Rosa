import { Request, Response } from "express";
import connection from "../connection";
export default async function registerPurchase(
    req: Request,
    res: Response
): Promise<void> {
    try {
        const { user_id, product_id, quantity } = req.body
        const id = Date.now()
        const total_price = quantity*product_id.price
        await connection("labecommerce_purchases")
            .insert({ id, user_id, product_id, quantity, total_price })
        res.status(201).end()
    } catch (error) {
        res.status(500).end()
    }
}