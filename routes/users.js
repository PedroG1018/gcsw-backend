const router = require('express').Router();
let User = require('../models/user.model');

const { checkJwt } = require('../authz/check-jwt');

// default route, gets all users in the db
router.route('/').get(checkJwt, (req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

// adds a user to the db
router.route('/add').post(checkJwt, (req, res) => {
    const username = req.body.username;

    // create a new user
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;