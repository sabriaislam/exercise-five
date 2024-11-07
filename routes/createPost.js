const express = require('express');
const router = express.Router();
const path = require("path");
const firestore = require("firebase/firestore");
const db = firestore.getFirestore();

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "../public", "form.html"));
  });

router.get('/submit', (request, response) =>{
  const {title, postText, author} = request.query;
  const idFromTitle = title.replace(/\s+/g,"-").toLowerCase();
  const setBlogPost = firestor.setDoc(
    firestore.doc(db,"posts",idFromTitle),
    {
      title,
      text: postText,
      author,
    }
  );
  setBlogPost
    .then((res) => {
      response.send("Good job");
    })
    .catch((error) => {
      response.send(`Error Submitting ${error.toString()}`);
    });
});

module.exports = router;

