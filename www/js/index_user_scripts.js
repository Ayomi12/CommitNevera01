(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
     
     
     $("body").append('<a id="idGoAnadir_nevera" href="#idpageAnadir"  class="style-31"></a>');
     $("body").append('<a id="idGoNevera_nevera" href="#idpageNevera"  class="style-31"></a>');
     $("body").append('<a id="idGoMuestra" href="#idpageReceta"  class="style-31"></a>');
     $("body").append('<a id="idGoBorrar_nevera" href="#idpageBorrar"  class="style-31"></a>');
     $("body").append('<a id="idGoAgregar_nevera" href="#idpageNevera"  class="style-31"></a>');
     $("body").append('<a id="idGoMostrar_nevera" href="#idpageMuestra_receta"  class="style-31"></a>');
     
    $("body").append('<a id="idGoprincipal_nevera" href="#idpagePrincipal"  class="style-31"></a>'); 
    
     /* button  #idLogin */
    $(document).on("click", "#idLogin", function(evt)
    {
        /* your code goes here */ 
        //console.log("TODO OK");
        var usuario=$("#idUsuario").val();
        var contrasenia=$("#idContrasenia").val();
        
        
        	var param={};
        param.usuario=usuario;
        param.contrasenia=contrasenia;
        
        $.ajax({
            type:"POST",
            url:"http://192.168.56.1:9095/getLogin",
            data:"data="+JSON.stringify(param),
            //dataType : 'json',
            dataType : 'text',
            success:function(data){
            var data=JSON.parse(data);
            console.log(data.status);
                
                if(data.status===1){
                     
                     navigator.notification.confirm(
                        'INGRESASTE...!!',  // message
                        function(){
                            $("#idGoprincipal_nevera").click();
                        },         // callback
                        'Mensaje',            // title
                        'Aceptar'                  // buttonName
                    );
                    
                }
                if(data.status===0){
                    
                     navigator.notification.confirm(
                        'ACCCESO DENEGADO',  // message
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
        
    });
    
        /* button  #idLogin */
    $(document).on("click", "#idanadir", function(evt)
    {
        $("#idGoAnadir_nevera").click(); 

    });
    
        /* button  #idnavera */
    $(document).on("click", "#idnavera", function(evt)
    {
        $("#idGoNevera_nevera").click(); 
    });
    
        /* button  #idBorrar */
    $(document).on("click", "#idBorrar", function(evt)
    {
       $("#idGoBorrar_nevera").click(); 
    });
    
        /* button  #idagregar */
    $(document).on("click", "#idagregar", function(evt)
    {
        alert("agregaste correctamente");
        $("#idGoAgregar_nevera").click(); 
    });
    
        /* button  #idmostrar */
    $(document).on("click", "#idmostrar", function(evt)
    {
        $("#idGoMostrar_nevera").click(); 
    });
    
        /* button  #idRecetario */
     
     //Receta.crearEnlaces();
    $(document).on("click", "#idRecetario", function(evt)
    {    
        /* your code goes here */ 
        $("#idGoMuestra").click();
        Receta.cargarReceta();
            
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
