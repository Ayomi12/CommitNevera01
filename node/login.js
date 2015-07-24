module.exports.getByLogin=function(app){
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

};