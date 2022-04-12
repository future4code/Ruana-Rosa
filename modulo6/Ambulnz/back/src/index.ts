import app from "./app";
import getItems from "./endpoints/getItems";
import getPizzas from "./endpoints/getPizzas";
import postItem from "./endpoints/postItem";

app.get('/api/pizzas', getPizzas)
app.post('/api/item', postItem)
app.get('/api/item', getItems)