module.exports = (app) => {
   const bodyParser = require('body-parser');
   const moment = require('moment');

   app.use(bodyParser.urlencoded({ extended: false }))
   app.use(bodyParser.json())

   const consign = require('consign');
   
   app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

   consign({cwd:'app'})
    .include('models')
    .then('controllers')
    .into(app);

    app.set('moment', moment);

    //Rotas 
        const indexRouter = require('../app/routes/index')(app)
        const tasksRouter = require('../app/routes/task')(app)
    //
}