import express, { Request, Response } from "express";
import { Type } from 'typescript'
import { AddressInfo } from "net";
import { request } from "http";

const app = express();
app.use(express.json());

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

type usuario = {
    id: string,
    nome: string,
    idade: number,
    cpf: string,
    saldo: number,
    transacoes: string[]
}

let usuarios: usuario[] = [
    {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        nome: 'AstroDev',
        idade: 58,
        cpf: '112.123.234-55',
        saldo: 95.25,
        transacoes: []
    },
    {
        id: Math.floor(Date.now() * Math.random()).toString(36),
        nome: 'Carver',
        idade: 96,
        cpf: '111.222.333-45',
        saldo: 1234.56,
        transacoes: []
    }
]

//Testar servidor
app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
})

//Mostrar todos os usuários
app.get('/usuarios', (req: Request, res: Response) => {
    let codeError: number = 400
    try {

        if (!usuarios) {
            codeError = 404
            throw new Error('Usuários não encontrados')
        }
        res.status(200).send(usuarios)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

//Mostrar saldo do usuário
app.get('/saldo', (req: Request, res: Response) => {
    let codeError: number = 400
    try {
        const nome: string = req.query.nome as string
        const cpf: string = req.query.cpf as string
        const usuario: usuario | undefined = usuarios.find((usuario) => usuario.nome.toLowerCase() === nome.toLowerCase() && usuario.cpf === cpf)
        if (!usuario) {
            codeError = 404
            throw new Error('Usuário não encontrado')
        }
        res.status(200).send(`Seu saldo é de R$${usuario.saldo}`)
    } catch (error: any) {
        res.status(codeError).send({ message: error.message })
    }
})

//Criar conta
app.post('/usuarios', (req: Request, res: Response) => {
    let errorCode: number = 400

    try {
        const nome: string = req.body.nome
        const cpf: string = req.body.cpf
        const anoNascimento: number = req.body.anoNascimento
        if (!nome || !cpf || !anoNascimento) {
            errorCode = 422
            throw new Error('Por favor, verifique suas informações. Nome, CPF e ano de nascimento são de preenchimento obrigatório')
        }
        const idadeUsuario: number = 2022 - anoNascimento
        if (idadeUsuario < 18) {
            errorCode = 406
            throw new Error('A criação de contas só é permitida a usuários maiores de 18 anos')
        }
        const novoUsuario: usuario = {
            id: Math.floor(Date.now() * Math.random()).toString(36),
            nome: nome,
            idade: idadeUsuario,
            cpf: cpf,
            saldo: 0.00,
            transacoes: []
        }
        usuarios.push(novoUsuario)
        res.status(201).send({ message: 'usuário criado com sucesso' })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})

//Adicionar saldo
app.put('/saldo', (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const nome: string = req.query.nome as string
        const cpf: string = req.query.cpf as string
        const deposito: number = req.body.deposito
        const usuario: usuario | undefined = usuarios.find((usuario) => usuario.nome.toLowerCase() === nome.toLowerCase() && usuario.cpf === cpf)
        if (!nome || !cpf) {
            errorCode = 422
            throw new Error('Por favor, verifique suas informações. Nome e CPF são de preenchimento obrigatório')
        }
        if (!deposito || deposito <= 0 || isNaN(deposito) === true) {
            errorCode = 406
            throw new Error('O valor do depósito precisa ser um número positivo')
        }
        if (!usuario) {
            errorCode = 404
            throw new Error('Usuário não encontrado')
        }
        const novoSaldo: number = usuario!.saldo + deposito
        let extrato: string[] = usuario?.transacoes as string[]
        extrato!.push(`Depósito: ${deposito}`)
        const novoUsuario: usuario = {
            id: usuario!.id,
            nome: usuario!.nome,
            idade: usuario!.idade,
            cpf: usuario!.cpf,
            saldo: novoSaldo,
            transacoes: extrato
        }
        usuarios.push(novoUsuario)
        res.status(201).send({ message: `Depósito concluído com sucesso! Seu novo saldo é de $${novoSaldo}` })
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
})