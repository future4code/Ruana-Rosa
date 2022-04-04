import app from "./app";
import deleteData from "./endpoints/deleteData";
import getData from "./endpoints/getData";
import postData from "./endpoints/postData";

app.post('/data', postData)
app.get('/data', getData)
app.delete('/data/:id', deleteData)