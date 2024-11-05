const express = require("express");
const app = express();
const port = 3000;

const indexRoute = require("/routes/index.js");
const createPostRoute = require("/routes/createPost.js");
const singePostRoute = require("/routes/singlePost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singePostRoute);

app.listen(port, () => {
    console.log(`Cool app listening on port ${port}`)
 })