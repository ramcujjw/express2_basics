const express=require('express');
const router=new express.Router();
//created a array



//write as a function(8)employeeform.ejs
function basicRoutes(nav) { //(this concept is only ised in ejs file)nav oru common function ayi use cheyunnu , so we are calling that as a parameter(!.1 this function is called at app.js)
   const arr_obj=[{employeeid:19876,name:'Ramcy',post:'Developer',location:'Tvm'},{employeeid:12345,name:'Haripriya',post:'Tester',location:'Kollam'}]

    router.get('/',(req,res)=>{ //here we specify the path ('/' /basic ) 
        res.render('employee',{ //pass the data
            title:'Employeelist',
            arr_obj,
            nav
          
        });
    })
 

router.get('/employeeform',(req,res)=>{
    // res.send(arr_obj);
    // giving render(5)
    res.render('employeeform',{ //pass the data
        title:'add Employee',
        arr_obj,
        nav
    });
})
return router;
}


// module.exports=router;
module.exports=basicRoutes;