var IPADDRESS="192.168.159.1";
var PORT=9095
var express = require('express');
var bodyParser = require('body-parser');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type,x-access-token');
   
    next();
}

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(allowCrossDomain);

var server = app.listen(PORT,IPADDRESS);
console.log('Escuchando en '+IPADDRESS+':'+PORT);
////////////////////////////////////

app.post('/getLogin', function(req, res){	
	
    var data=req.param('data');
    data=JSON.parse(data);
    //console.log(data);
	
    if(data.usuario!=="nevera" || data.contrasenia!=="nevera"){

	var msn={};
	msn.data=null;	
	msn.status=0;
	msn.message="NO AUTENTICADO";


    }
    else{

	var user={}
    	user.id=1;
    	user.usuario='nevera';

	var msn={};
	msn.data=user;	
	msn.status=1;
	msn.message=null;
	
   }				
	    
	res.json(msn);
	
});


app.post('/getRecetario', function(req, res){	

    	var data=req.param('data');
	data=JSON.parse(data);    	

	//console.log(data);

    var user={}
    	user.id=1;
    	user.nombre='Tallarin con pollo';
	    user.ciclo=ciclo;
    
	var user1={}
    	user1.id=2;
    	user1.nombre='Chaufa';
	    user1.ciclo=ciclo;

	var user2={}
    	user2.id=1;
    	user2.nombre='Biste';
	    user2.ciclo=ciclo;
    
	var user3={}
    	user3.id=2;
    	user3.nombre='Chicharron';
	    user3.ciclo=ciclo;
    
	var users=[];
	users[0]=user;
	users[1]=user1;
	users[2]=user2;
	users[3]=user3;

	var msn={};
	msn.data=users;	
	msn.status=1;
	msn.message=null;
	
	res.json(msn);
	
});

/*
app.post('/getAgregar', function(req, res){	

    	var data=req.param('data');
	data=JSON.parse(data);    	

	//console.log(data);

	var tipo=null;	
	
	if(data.tipo=="Verduras"){
	  tipo="Verduras";
	}
	else if(data.tipo=="Frutas"){
	  tipo="Frutas";
	}
	else if(data.tipo=="Carne"){
	  tipo="Carne";
	}	
	
    	var user={}
    	user.id=1;
    	user.usuario='nombre';
	    user.ripo=tipo;
    
	var user1={}
    	user1.id=2;
    	user1.usuario='cantidad';
	    user1.tipo=tipo;
    
	var users=[];
	users[0]=user;
	users[1]=user1;

	var msn={};
	msn.data=users;	
	msn.status=1;
	msn.message=null;
	
	res.json(msn);
	
});

*/

