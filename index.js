var express = require('express'); //call express
var app = express(); //define our app using express

app.use(express.urlencoded({extended:true}));
app.use(express.json());

var port = process.env.PORT || 8080 //set our port

var router = express.Router()
router.get('/', (req,res)=>{
	res.json({message:'Hula! my API works!!!'})
})

router.get('/hello', (req,res)=>{
	res.json({message:'Hello World!'});
})

router.get('/goodbye/:id', (req,res)=>{
	res.json({message:'Goodbye '+req.params.id})
})

router.post('/number', (req,res)=>{
	res.json({message:"The number is "+req.body.num});
})

router.post('/sum', (req,res)=>{
	var sum = req.body.num1 + req.body.num2;
	res.json({message:"The sum of the two numbers is "+sum});
})

app.use('/api',router);

app.listen(port); // create a server that browsers can connect to

console.log("Magic happened at port "+port);
