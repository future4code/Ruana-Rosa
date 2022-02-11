import app from "./app";
import createUser from "./endpoints/createUser";
import getAllProducts from "./endpoints/getAllProducts";
import getAllUsers from "./endpoints/getAllUsers";
import registerProduct from "./endpoints/registerProduct";

app.post("/users", createUser)
app.get("/users", getAllUsers)
app.post("/products", registerProduct)
app.get("/products", getAllProducts)