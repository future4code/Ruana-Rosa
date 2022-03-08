import { app } from './app'
import UserBusiness from './Business/UserBusiness'
import UserController from './Controller/UserController'
import UserData from './Data/UserData2'
import { Authenticator } from './Services/Authenticator'
import { HashManager } from './Services/HashManager'
import { IdGenerator } from './Services/IdGenerator'

const userController = new UserController(
    new UserBusiness(
        new UserData(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    )
)

app.post("/user/signup", userController.signup)