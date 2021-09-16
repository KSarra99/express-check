var express = require('express');
var router = express.Router();

const app = express();


app.set('view engine', 'pug');
app.set('views','./views');

let d = new Date();

router.use(function timeLog(req, res, next) {
if (d.getDay()<7 && d.getDate()>0){ 
    if(d.getHours()>8 && d.getHours()< 18) 
   {
    next();}
else
{res.render(__dirname+'/views/closed_page.pug')}
}
  
  });


router.get('/', function(req, res) {
     res.render(__dirname+'/views/home_page.pug')
   

   
    
  });

  app.get("/contact_page",(req,res)=>{
 
    res.render(__dirname+'/views/contact_page')

});
app.get("/services_page",(req,res)=>{
 
    res.render(__dirname+'/views/services_page')

});


  app.use('/', router);

  const port =process.env.port|| 9000
app.listen(port,(err)=>{
    err?console.log(err):console.log("the server is running on  http://localhost:"+ port)
})


module.exports = router;