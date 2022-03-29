// import { Request, Response } from "express";
// import { connection } from "../connection";
// import { getTokenData } from "../services/tokenGenerator";
// import { authenticationData } from "../types";

// export default async function unfriend (req: Request, res: Response){
//     try {
//         let message = "Friendship established!"
//         const token: string = req.headers.authorization as string
//         const tokenData: authenticationData = getTokenData(token)
//         const { id } = req.params
//         await connection('labook_friends')
//             .delete({
//                 user_id
//             })
//             .where(user_id==tokenData.id)
//         res.status(201).send({ message })
//     } catch (error: any) {
        
//     }
// }
