const express = require('express');
const router = express.Router();
router.get('/getOnUser', (req, res) => {
    res.send("MinhQuan");
});
router.get('/getUser', (req, res) => {
    res.send("MinhQuan2");
});
module.exports = router