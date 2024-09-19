const express=require('express');
const app= new express();
const morgan=require('morgan');
app.use(morgan('dev'));


//view
app.set('view engine','ejs');
app.set('views',__dirname+'/views');//define the path views is the keyword

//static files are  searched by node inside the public folder (7)
app.use(express.static('public'));
//(8) create a nav array for home and add employee link

const nav=[
    {
        link :'/employee', name:'Home'
    },{
         link :'/employeeform', name:'Add Employee'
    }
]


//connecting routesfile
const basicRoutes=require('./routes/basicRoutes')(nav);
app.use('/basic',basicRoutes);


app.listen(4000,()=>{
    console.log('server is running on the port 4000');
})