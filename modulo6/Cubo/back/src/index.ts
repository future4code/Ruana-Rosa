import app from "./app";
import getData from "./endpoints/getData";
import postData from "./endpoints/postData";

app.post('/data', postData)
app.get('/data', getData)