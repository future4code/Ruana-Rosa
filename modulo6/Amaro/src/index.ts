import getProducts from "./API/getProducts"
import getProductsById from "./API/getProductsById"
import getProductsByName from "./API/getproductsByName"
import getProductsByTag from "./API/getProductsByTag"
import postProducts from "./API/postProducts"
import app from "./app"

app.post('/products', postProducts)
app.get('/products', getProducts)
app.get('/products/:name', getProductsByName)
app.get('/products/:id', getProductsById)
app.get('/products/:tags', getProductsByTag)

