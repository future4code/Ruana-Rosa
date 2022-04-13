import postProducts from "./API/postProducts"
import app from "./app"

app.post('/products', postProducts)