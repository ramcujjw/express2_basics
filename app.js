const express=require('express');
const app= new express();
const morgan=require('morgan');
app.use(morgan('dev'));


//view
app.set('view engine','ejs');//ejs is a third party module ,html like markup kond varan vendi ann use cheyunnath
app.set('views',__dirname+'/views');//define the path "views" is the keyword cannot be changed "/views" ia path

//static files(changes ellate img ,doc ,pdf, css,js file) are  searched by node inside the public folder (7)
app.use(express.static('public'));
//(8) create a nav array for home and add employee link

    const nav = [
        { link: '/basic', name: 'Home' }, //field link(specify the path to that page) and name 
        { link: '/basic/employeeform', name: 'Add Employee' } 
    ];
    


//connecting routesfile
const basicRoutes=require('./routes/basicRoutes')(nav);// requiring the router file it has to be exported and required.(!function calling here)
app.use('/basic',basicRoutes);//we are specifying the path here


app.listen(4000,()=>{
    console.log('server is running on the port 4000');
})