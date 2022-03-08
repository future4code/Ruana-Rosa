import { SignupInputDTO } from "../Controller/UserController";
import UserData from "../Data/UserData2";
import User from "../model/User";
import { Authenticator } from "../Services/Authenticator";
import { HashManager } from "../Services/HashManager";
import { IdGenerator } from "../Services/IdGenerator";

export default class UserBusiness{
    constructor(
        private userData:UserData,
        private idGenerator:IdGenerator,
        private hashManager:HashManager,
        private authenticator:Authenticator
    ){}


    signup = async (input: SignupInputDTO) =>{
        //validacao
        const {name, email, password} = input
        if(!email || !name || !password){
            throw new Error("Campos inválidos")
        }

        //verificar se o usuario existe
        const registeredUser = await this.userData.findByEmail(email)
        if(registeredUser){
            throw new Error ("Email já cadastrado")
        }

        //criar um id
        const id = this.idGenerator.generateId()
        //criptografar a senha
        const hashedPassword = await this.hashManager.hash(password)
        //criar usuario no banco
        const user = new User(
            id,
            name,
            email,
            hashedPassword
        )
        console.log(user)
        await this.userData.insert(user)
        //gerar e retornar token
        const token = this.authenticator.generateToken({id})
        return token
    }
}