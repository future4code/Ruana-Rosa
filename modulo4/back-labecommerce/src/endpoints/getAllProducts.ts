import { query, Request, Response } from "express";
import connection from "../connection";
import { product } from "../types";

export default async function getAllProducts(
    req: Request,
    res: Response
): Promise <void>{
    try{
    const {name, order, orderType} = req.query 
    const products: product[] = await connection("labecommerce_products")

    res.send(products)
    }
    catch (error){
        res.status(500).send("Unexpected server error")

    }
}