const express = require("express");
const app = express();
const port = 3000;
const firebase = require("firebase/app");

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "exercise-five-836a7.firebaseapp.com",
  projectId: "exercise-five-836a7",
  storageBucket: "exercise-five-836a7.firebasestorage.app",
  messagingSenderId: "878053964023",
  appId: "1:878053964023:web:cf3b178573529ec41e7bf2"
};

firebase.initializeApp(firebaseConfig);

const indexRoute = require("./routes/index.js");
const createPostRoute = require("./routes/createPost.js");
const singlePostRoute = require("./routes/singlePost.js");

app.use("/", indexRoute);
app.use("/create", createPostRoute);
app.use("/post", singlePostRoute);

app.use(express.static("public"));

app.listen(port, () => {
    console.log(`Exercise five listening on port ${port}`);
});