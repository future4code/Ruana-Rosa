import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import gerarId from "./Exercícios/criarId"

app.post('/user/signup', createUser)
app.put('/user/edit/:id', editUser)

gerarId()