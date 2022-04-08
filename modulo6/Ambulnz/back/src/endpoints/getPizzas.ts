import { Request, Response } from "express";
import { listOfPizzas } from "../data/pizzas";
import { Pizza } from "../types/types";

export default async function getPizzas(req: Request, res: Response){
    try {
        let message= "Success"
        const result: Pizza[] = listOfPizzas
    } catch (error) {
        
    }
}