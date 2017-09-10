

module.exports = app => {
    app.get('/users', (req, res) => {
        app.controllers.users.findUsers(req,res);
    });

    app.post('/users/create-user', (req, res) => {
        app.controllers.users.createUser(req,res);
    });

    app.post('/users/authenticate',(req, res) => {
        app.controllers.users.auth(app, req, res);
    });


}

