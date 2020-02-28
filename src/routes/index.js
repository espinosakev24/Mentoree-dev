const express = require('express');
//We only need Router method from express
const router = express.Router();

//At home we send "Hello World" on screen as a response to request
router.get('/', (req, res) => {
    res.send('Hello World');
});

//exporting router so it can be used by main index.js
module.exports = router;
