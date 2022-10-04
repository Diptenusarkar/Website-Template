const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('about.pug');
})

router.get('/sub-directory', (req, res) => {
    res.send('In sub-directory of about through get req');
})

router.post('/sub-directory', (req, res) => {
    res.send('In sub-directory of about through post request');
})

router.put('/sub-directory', (req, res) => {
    res.send('In sub-directory of about through put request');
})

router.delete('/sub-directory', (req, res) => {
    res.send('In sub-directory of about through delete request');
})

module.exports = router;