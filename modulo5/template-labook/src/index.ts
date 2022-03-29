import app from "./app";
import createPost from "./endpoints/createPost";
import getAllPosts from "./endpoints/getAllPosts";
import getPostById from "./endpoints/getPostById";
import login from "./endpoints/login";
import makeFriendship from "./endpoints/makeFriendship";
import showPostsByType from "./endpoints/showPostsByType";
import signUp from "./endpoints/signUp";

app.post('/posts/create', createPost)
app.get('/posts/:id', getPostById)
app.post('/users/login', login)
app.post('/users/signup', signUp)
app.get('/posts', getAllPosts)
app.post('/users/:id', makeFriendship)
app.get('/posts/:type', showPostsByType)