const User = require('../models/users');
const jwt = require('jsonwebtoken');

module.exports.findUsers = (req, res) => {
    User.find((error, users) => {
        if (error) return res.json(error)
        res.json(users);
    });
}

module.exports.createUser = (req, res) => {
    let user = new User({
        nickname: 'diogomean',
        password: '123',
        admin: true
    });

    user.save((err, user) => {
        if (err) return res.json(err)
        res.json(user);
    });
}


module.exports.auth = (app, req, res) => {

    var query = User.where({ name: req.body.name });

    query.findOne((error, user) => {
        if (error) return res.json(error)


        if (user.nickname === req.body.nickname) {

            if (user.password === req.body.password) {

                let token = jwt.sign({ data: user }, app.get('superSecret').toString(), { expiresIn: '1h' });
                let response = { user: user, token: token }
                
                res.json(response);
            } else {
                res.json("Password failed")
            }

        } else {
            res.json({ messagem: "user not found" })
        }

    })
}