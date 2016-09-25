var express = require('express');
var router = express.Router();
var passwordHash = require('password-hash');
var jwt = require('jsonwebtoken');

var User = require('../models/user');
// Make available outside 
router.post('/', function(req, res, next) {
    // Register user
    var user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: passwordHash.generate(req.body.password),
        email: req.body.email
    });
    user.save(function(error, result) {
        if (error) {
            return res.status(404).json({
                title: 'Random error occured',
                error: error
            });
        }
        res.status(200).json({
            message: 'Success',
            obj: result
        });
    });
});

router.post('/signin', function(req, res, next) {
    // Find exactly one user corresponding to the email
    User.findOne({ email: req.body.email }, function(error, doc) {
        if (error) {
            return res.status(404).json({
                title: 'An error occurred',
                error: error
            });
        }
        // No such user
        if (!doc) {
            return res.status(404).json({
                title: 'No user found',
                error: { message: 'User could not be found' }
            });
        }
        // Wrong password
        if (!passwordHash.verify(req.body.password, doc.password)) {
            return res.status(404).json({
                title: 'Could not sign in',
                error: { message: 'Invalid password' }
            });
        }
        // Create token, js-user-object as payload
        // 'secret' is the encryption key
        var token = jwt.sign({ user: doc }, 'secret', { expiresIn: 7200 });
        res.status(200).json({
            message: 'Success',
            token: token,
            userId: doc._id
        });
    })
});

module.exports = router;