module.exports.getByReceta=function(app){
app.post('/getReceta', function(req, res){	

    	var data=req.param('data');
	data=JSON.parse(data); 
	if(data.usuario!=="cliente"){
   data.usuario="cliente";
}else{   	
    var receta1={}
    	receta1.id=1;
    	receta1.nombre='Chicharron';
	    
	var receta2={}
    	producto2.id=2;
    	producto2.nombre='Chaufa';
	
	var receta3={}
    	receta3.id=3;
    	receta3.nombre='Biste';

	var receta4={}
    	receta4.id=4;
    	receta4.nombre='Tallarin con pollo';
    }	
	var recetas=[];
	recetas[0]=receta1;
	recetas[1]=receta2;
	recetas[2]=receta3;
	recetas[3]=receta4;
	
	var msn={};
	msn.data=recetas;	
	msn.status=1;
	msn.message=null;
	
	res.json(msn);

});
};