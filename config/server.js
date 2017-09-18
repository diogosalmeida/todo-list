module.exports = (app) => {
   const bodyParser = require('body-parser');
   const moment = require('moment');
   const secret = require('../config/secret');
   const expressInstance = require('express');

   const jwt = require('jsonwebtoken')


   app.set('moment', moment);
   app.set('superSecret', secret);
   app.set('expressInstance',expressInstance)

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


    
  
    //Rotas 
        const indexRouter = require('../app/routes/index')(app)
        const usersRouter = require('../app/routes/users')(app)


        // //
        // var apiRoutes = app.get('expressInstance').Router();
        // //
        // apiRoutes.use(function(req, res, next) {
            
        //       // check header or url parameters or post parameters for token
        //       var token = req.body.token || req.query.token || req.headers['x-access-token'];
            
        //       // decode token
        //       if (token) {
        //         let secret = app.get('superSecret').toString();
        //         // verifies secret and checks exp
        //         jwt.verify(token, secret , function(err, decoded) {      
        //           if (err) {
        //             return res.json({ success: false, message: 'Failed to authenticate token.',token: token, secret: app.get('superSecret') });    
        //           } else {
        //             // if everything is good, save to request for use in other routes
        //             req.decoded = decoded;    
        //             next();
        //           }
        //         });
            
        //       } else {
            
        //         // if there is no token
        //         // return an error
        //         return res.status(403).send({ 
        //             success: false, 
        //             message: 'No token provided.',
                    
        //         });
            
        //       }
        //     });
        //     app.use('/tasks', apiRoutes);


        const tasksRouter = require('../app/routes/task')(app)
      
    //
}