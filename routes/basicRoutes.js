const express=require('express');
const router=new express.Router();
//created a array

var arr_obj=[{employeeid:19876,name:'Ramcy',post:'Developer',location:'Tvm'},{employeeid:12345,name:'Haripriya',post:'Tester',location:'Kollam'}]


//write as a function(8)employeeform.ejs
function basicRoutes(nav) {
    

router.get('/employeeform',(req,res)=>{
    // res.send(arr_obj);
    // giving render(5)
    res.render('employeeform',{ //pass the data
        title:'Employeelist',
        arr_obj,
        nav
    });
})
return router;
}


// module.exports=router;
module.exports=basicRoutes;