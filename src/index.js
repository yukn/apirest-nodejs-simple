const express=require('express');
const app= express();
const morgan=require('morgan');
//settings
app.set('port',process.env.PORT || 3000);
app.set('json spaces',2);
//middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//routes
app.use(require('./routes/index.js'));
app.use('/api/movies',require('./routes/movies.js'));
app.use('/api/users',require('./routes/users.js'));

//init server
app.listen(3000,()=>{
    console.log(`server on port ${app.get('port')}`);
})