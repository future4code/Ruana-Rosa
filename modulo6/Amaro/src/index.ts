import getProducts from "./API/getProducts"
import postProducts from "./API/postProducts"
import app from "./app"

app.post('/products', postProducts)
app.get('/products', getProducts)

