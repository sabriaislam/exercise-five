const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Single Post Route!')
  }) 

module.exports = router;