var Receta=(function () {
    var my = {};
    
    my.crearEnlaces=function(){
        //Enlaces Page 
     $("body").append('<a id="idGoMuestra" href="#idpageReceta"  class="style-31"></a>');  
          
    };//////////////////////////////////////////////////////////////////////////////////
    
    my.cargarReceta=function(){
       
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getReceta",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
                var data=JSON.parse(data);
                console.log(data.status);
                
                if(data.status===1){
                    $("#idListaReceta").empty();
                    for(var i=0;i<data.data.length;i++){                    
                        $("#idListaReceta").append("<li ><a href='#idpageMuestra_Chaufa' idReceta= "+data.data[i].id+">"+data.data[i].nombre+"</a></li>");
                        
   
                    }      
                    
                }
                if(data.status===0){
                    
                     navigator.notification.alert(
                        'ERROR AL CAPTURAR LISTA',  // message
                        function(){},         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }

            },
            error:function(data){
            
                console.log("ERROR:"+data);
            }
        });

    };//////////////////////////////////////////////////////////////////////////////////
    
    //////////
    return my;
}());
