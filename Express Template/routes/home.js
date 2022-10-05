const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('home.pug');
})

router.get('/sub-directory', (req, res) => {
    res.send('In sub-directory of home through get req');
})

router.post('/sub-directory', (req, res) => {
    res.send('In sub-directory of home through post request');
})

router.put('/sub-directory', (req, res) => {
    res.send('In sub-directory of home through put request');
})

router.delete('/sub-directory', (req, res) => {
    res.send('In sub-directory of home through delete request');
})

module.exports = router;