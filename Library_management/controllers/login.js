var express = require('express');
var router = express.Router();
var userModel = require.main.require('./models/userModel');
var validationRules = require.main.require('./validation_rules/rules');
var asyncValidator = require('async-validator-2');

router.get('/', (req, res)=>{
    res.render('login.ejs', {errs: []});
});

router.post('/', (req, res)=>{

    var data = {
        email: req.body.email,
        password: req.body.password
    };

    var rules = validationRules.users.login;
    var validator = new asyncValidator(rules);

    validator.validate(data, (errors, fields)=>{
        if(!errors){
            userModel.validateUser(req.body.email, req.body.password, function(result){
                if(!result){
                  res.render('login', {errs: [{message: 'Invalid email or password'}]});
                }
                else{
                  console.log(result);
                  if(result.is_admin == 1){
                      req.session.admin = result.user_id;
                      res.redirect('/admin/home');
                  }
                  else{
                      req.session.customer = result.user_id;
                      res.redirect('/customer/home');
                  }
                }
            });
        }
        else {
            console.log(fields);
            res.render('login', {errs: errors});
        }
    });

});

module.exports = router;
