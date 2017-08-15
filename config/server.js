module.exports = (app) => {
   const bodyParser = require('body-parser');
   
   app.use(bodyParser.urlencoded({ extended: false }))
   app.use(bodyParser.json())

   const consign = require('consign');
   
   consign({cwd:'app'})
    .include('models')
    .then('controllers')
    .into(app);

    //Rotas 
        const indexRouter = require('../app/routes/index')(app)
        const tasksRouter = require('../app/routes/task')(app)
    //
}