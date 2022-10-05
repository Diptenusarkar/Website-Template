const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('contact.pug');
})

router.get('/sub-directory', (req, res) => {
    res.send('In sub-directory of contact through get req');
})

router.post('/sub-directory', (req, res) => {
    res.send('In sub-directory of contact through post request');
})

router.put('/sub-directory', (req, res) => {
    res.send('In sub-directory of contact through put request');
})

router.delete('/sub-directory', (req, res) => {
    res.send('In sub-directory of contact through delete request');
})

module.exports = router;