import app from "./app";
import createPost from "./endpoints/createPost";
import getPostById from "./endpoints/getPostById";
import login from "./endpoints/login";
import signUp from "./endpoints/signUp";

app.post('/posts/create', createPost)
app.get('/posts/:id', getPostById)
app.post('/users/login', login)
app.post('/users/signup', signUp)