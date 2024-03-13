
import{oku, oku24, oku25, oku26, oku27, oku28, oku11, oku12,oku13, oku10, oku14, oku15, oku16, oku17, oku9, oku8,oku7, oku6, oku5, oku4, oku3, oku18, oku19, oku20, oku21, oku22, oku23, oku2}from './ocultaciones.js';



let volverIng2=document.getElementById("volverIngreso2");
volverIng2.addEventListener("click", function(){
    oku10();
});

// este es el codigo del trabajo ya realizado 
alert(" Para ingresar contraseña, ten en cuenta que debes ingresar minimo una letra minuscula, una mayuscula y un numero" );
let nombre=document.getElementById("nom");
let password=document.getElementById("pas");
let registro=document.getElementById("reg");
let v1="";
let v2="";
let personaRegistro=[{nombre:"", password:""}];
let personaRegistro2= [{ nombre:"", centro:"", correo:"", numeroTelefonico:""}];
//let personaRegistro= [];
   //     let usuariosApp= {
     //       nombre:"";
    //        password: "",
     //       usuarios:[],
     //   };


     //   let usuarios = [];
     //   let datosUsuarios= {
      //      instruName:"",
      //      instruCenter:"",
       //     emailInstru:"",
       //     cellInstru:"",
        //    rolInstru:""
       // }
       // usuarios.push(datosUsuarios);
        

let dato1="";
let dato2="";
let indice=0;

oku12();

// funcion expresion regular para verificar si la contraseña es segura
function validarEntrada(entrada) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[1-9]).+$/;
        return regex.test(entrada);
  }




// un bototn donde el administrador va al ingreso para entrar por otro perfil

let regreso=document.getElementById("regresarIngreso");
regreso.addEventListener("click", function(){
   oku13();
    
});



// INGRESO USUARIO ( LIGAR CON ARRAYS INGRESADO OTRO ARRAY PARA ESTA INFORMACION )

let nick=document.getElementById("bre");
let contrasena=document.getElementById("word");
let botonIngreso=document.getElementById("istro");
let dato5="";
let dato6="";


// usuario variables
let posicionEncontrada = -1;

let instruN = document.getElementById("nombreInstru");
let centroF= document.getElementById("centroFormacion");
let correoE=document.getElementById("correoElectronico");
let numeroT=document.getElementById("numeroTelefonico");
let dato7="";
let dato8="";
let dato9="";
let dato10="";


botonIngreso.addEventListener("click", function(){
    dato5 =nick.value;
    dato6 =contrasena.value;
    
    // el siguiente codigo me da acceso al administrador para poder registrar
    if(dato5 === "AdmiSena8800" && dato6=== "Delta717" ){
        oku11();
            
        // area de registro
        let nombreExistente= false;
        // confirmar contraseña y nombre
        let nombreConfirmacion=document.getElementById("n");
        let passwordConfirmacion=document.getElementById("p");
        let dato3="";
        let dato4="";
        
            registro.addEventListener("click", function(){    
                    nombreExistente = false;
                    for(let i=0; i<personaRegistro.length;i++){
                        dato1=nombre.value.toLowerCase();
                            if(dato1 === personaRegistro[i].nombre.toLowerCase() ){
                                
                                alert("nombre ya existe, ingrese otro");
                                nombreExistente=true;
                                
                            }
                    }

                    dato3=nombreConfirmacion.value;
                    dato4=passwordConfirmacion.value;
                    if(dato3 === nombre.value && dato4 === password.value ){
                        alert("  ingresaste el mismo nombre y la misma contraseña");
                    
                        if (!nombreExistente){
                                dato2=password.value;
                                    if (validarEntrada(dato2)) {
                                        let nomb=nombre.value; 
                                        let pass=password.value;
                                        v1=nomb;
                                        v2=pass;
                                        dato1=nombre.value;
                                        dato2=password.value;
                                        // aca toca anidar 
                                        personaRegistro[indice]=({nombre: dato1, password:dato2 });
                                        alert( "nickname : "+ personaRegistro[indice].nombre + "\n contraseña : "+ personaRegistro[indice].password +"\n registro exitoso: felicitaciones!!! \n ");     
                                        indice=indice+1;
                                        oku28();

                                        // aca podria entrar datos instructor
                                        
                                    } else {
                                        
                                        alert(" recuerda, Para ingresar contraseña, ten en cuenta que debes ingresar minimo una letra minuscula, una mayuscula y un numero");
                                    }
                            
                        }
                        
                    }
                    else {
                        alert(" no ingresaste el mismo nombre y la misma contraseña");
                    }       
                        
                            
                       // imprimir array
               
                        let view="";
                        let mostrar =document.getElementById("most");
                        for(let u =0; u<personaRegistro.length; u++){
                            
                            let muestre=personaRegistro[u]; 
                            // aca se transforma a formato JSON
                            let datosEnJSON = JSON.stringify(muestre);
                            view += "este es la posicion: " + u + " este es la info: " + datosEnJSON + "<br>";
                            
                        }
                        mostrar.innerHTML= view;
                        
                            // limpiar espacio ingresado en html
                    
                            if (nombre.value !==""){
                                nombre.value="";
                            }     
                            if (password.value !=="") {
                                password.value="";
                            }
                            if (nombreConfirmacion.value !==""){
                                nombreConfirmacion.value="";
                            }     
                            if (passwordConfirmacion.value !=="") {
                                passwordConfirmacion.value="";
                            }
              
            });   
           //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX 
                            
           // DATOS DEL INTRUCTOR 
                                        let deje=document.getElementById("deje1");
                                        let view2="";      
                                        // boton imprimir datos instru
                                        let datosI=document.getElementById("datosInstru");
                                        datosI.addEventListener("click", function(){
                                            
                                                dato7=instruN.value;
                                                dato8=centroF.value;
                                                dato9=correoE.value;
                                                dato10=numeroT.value;
                                                personaRegistro2[indice-1]= { nombre:dato7, centro:dato8, correo:dato9, numeroTelefonico:dato10};
                                                oku17();
                                                }); 

                                        let pony1 =document.getElementById("pony");
                                        pony1.addEventListener("click", function(){
                                            for(let f=0; f<personaRegistro2.length; f++){
                                                let muestre2=personaRegistro2[f];
                                                // aca se transformo en JSON
                                                let datosEnJSON2 = JSON.stringify(muestre2);
                                            
                                                view2 += "este es la posicion: " +f + " este es la info: " + datosEnJSON2 + "<br>";
                                                
                                            }
                                        
                                            deje.innerHTML= view2;  
                                        });

                                        datosI.addEventListener("click", function(){
                                           oku14();
                            
                                        });
                                        if (instruN.value !==""){
                                            instruN.value="";
                                        }
                                        if (centroF.value !==""){
                                            centroF.value="";
                                        }
                                        if (correoE.value !==""){
                                            correoE.value="";
                                        }
                                        if (numeroT.value !==""){
                                            numeroT.value="";
                                        }
                                        
                                        let volverIng=document.getElementById("volverIngreso");
                                        volverIng.addEventListener("click", function(){
                                            oku15();
                                        });
                                      
                                        let editarI=document.getElementById("editarInstru");
                                        editarI.addEventListener("click", function(){
                                           oku16();
                                        
                                        });
                                        
                                        let regreso2=document.getElementById("regresarIngreso2");
                                        regreso2.addEventListener("click", function(){
                                            oku27();
                                        });

                                    //XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX     
        
         }
        
        //xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
        // ingreso usuario
        
         let lectura=false;
    for (let g=0 ; g < personaRegistro.length; g++){
        if(dato5 === personaRegistro[g].nombre && dato6 === personaRegistro[g].password){
            lectura=true;
            //aca esta el problema
            posicionEncontrada = g;
            oku26();
            break;    
        }  
    }

    if(lectura){
          alert("bienvenido, su posicion es: " + posicionEncontrada);
           oku25();

// mover desde aca para admi hasta(ver abajo misma linea de identacion)           
      
    } else {
           if(dato5 === "AdmiSena8800" && dato6=== "Delta717"){
            alert("bienvenido");  
           } else {
            alert(" ingresó mal la contraseña o el usuario, digitela de nuevo");
           }   
    }
  
// hasta aca mover a roll de admi 
});
botonIngreso.addEventListener("click", function(){
   
    if (nick.value !==""){
        nick.value="";
    }     
    if (contrasena.value !=="") {
        contrasena.value="";
    }
});

//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


  // aca esta el ejemplo de como crear funciones, debo como hacerlo modular por ahora no 
let buscarEmpresaPrincipal=document.getElementById("botonCrearempresa");
buscarEmpresaPrincipal.addEventListener("click", function(){
   oku();
   oku2();
   opcionCrear();
   oku24();

});


 

    let crearEmpresaPrincipal=document.getElementById("botonBuscarEmpresa");
    crearEmpresaPrincipal.addEventListener("click", function(){
        mostrarOpcionSeleccionada();
       oku23();
    });

   let supervisorMas=document.getElementById("masSupervisor");
   supervisorMas.addEventListener("click", function(){
     oku22();
   });
   let aprendizMas=document.getElementById("masAprendiz");
    aprendizMas.addEventListener("click", function(){
       oku21();
    });
    
let empresas = [];
let empre=document.getElementById("empresa");
let numeroIT=document.getElementById("nito");
let supervisor=document.getElementById("super");
let contactoSupervisor=document.getElementById("contac");
let nombAprendiz=document.getElementById("nomAprendiz");
let idenAprendiz=document.getElementById("idAprendiz");
let fichprendiz=document.getElementById("fichaAprendiz");
let dato11="";
let dato12="";
let dato13="";
let dato14="";
let dato17="";
let dato18="";
let dato19="";
//let personaRegistro=[{nombre:"", password:""}];
let empresaSena= {
    nombreEmpresa: "",
    nit: "",
    supervisores:[],
};
//vaper

let supervisores = [];
let supervisorSena= {
    nombreSupervisor:"",
    numeroContanto:"",
    aprendiz:[],
}
supervisores.push(supervisorSena);

let aprendiz =[];
let aprendizSena={
    nombreAprendiz:"",
    identificacionAprendiz:"",
    fichaAprendiz:"",
}
aprendiz.push(aprendizSena);
  
let botonEmpresa=document.getElementById("crearEmpresa");
let deje2=document.getElementById("deje2");
let deje3=document.getElementById("deje3");
botonEmpresa.addEventListener("click", function(){
   
        dato11=empre.value;
        dato12=numeroIT.value;
     //   if(dato11 != "" && dato12 != ""){
          empresaSena= {
          nombreEmpresa: dato11,
          nit: dato12,
          supervisores:[],
         }
         
      
   // } else {
      //  alert("los dos campos son obligatorios");
   // }
    empresas.push(empresaSena);
    empre.value="";
    numeroIT.value="";

            let botonSupervisor= document.getElementById("acusuper");
            botonSupervisor.addEventListener("click", function(){
                dato13=supervisor.value;
                dato14=contactoSupervisor.value;
              // OJO!!!! no esta guardando supervisor si no se ingresa dato completo y si se pone un alert se replica mucho
               // aca esta el problema, parece que lo hice asi para guardar el supervisor dentro de la empresa ultima creada
               // parece que la solucion es ponerle un condicional que filtre los espacios vacios y solo guarde los que tienen algo
               // otra solucion es sacar a supervisor  del boton de empresa y lo mismo para aprendiz pero tocaria ubicar algo 
               // que identificque unir en cual empresa y cual supervisor 
               // tener un boton dentro de otro boton hace eso 
               if(dato13 !="" && dato14 !=""){
                supervisorSena= {
                    nombreSupervisor:dato13,
                    numeroContanto:dato14,
                    aprendiz:[],
                }
                empresaSena.supervisores.push(supervisorSena);
               }
                 
            supervisor.value="";
            contactoSupervisor.value="";

                      let botonAprendiz=document.getElementById("crearAprendiz");
                      botonAprendiz.addEventListener("click", function(){
                           dato17= nombAprendiz.value;
                           dato18= idenAprendiz.value;
                           dato19= fichprendiz.value;
                         if (dato17 !="" && dato18 !="" && dato19 !=""){
                                aprendizSena={
                                nombreAprendiz:dato17,
                                identificacionAprendiz:dato18,
                                fichaAprendiz:dato19,
                            }
                            supervisorSena.aprendiz.push(aprendizSena);
                         }
                            

                        nombAprendiz.value = "";
                        idenAprendiz.value = "";
                        fichprendiz.value = "";
                           
                      });
            });


            //la siguiente push se puede cambiar por esto empresas[posicionDeseada] = empresaSena;posicion deseada es dodne quiero que quede 
           // empresas.push(empresaSena);
            // imprimir 
            let view3="";
            let view4="";
           let pony2 =document.getElementById("pony2");
           pony2.addEventListener("click", function(){

            for (let g = 0; g< empresas.length; g++) {
                let empresa = empresas[g];
                let datosEnJSON3 = JSON.stringify(empresa);
                view3 += "Empresa"+(g + 1)+"" +datosEnJSON3+"<br>";
                view4+= `Empresa ${g + 1}: ${JSON.stringify(empresa.nombreEmpresa)}  ${JSON.stringify(empresa.nit)}<br>`;
            }
            deje2.innerHTML= view3;  
            deje3.innerHTML= view4;
           });

           
});



//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
let empreEncontrada=document.getElementById("empresaEncontrada");
let busquedaEmpresa=document.getElementById("buscaempresa");
let busquedaNit=document.getElementById("buscaNit");

let  posicionEncontrada2 = -1;
let botonBuscar=document.getElementById("botomBusqueda");
let nitBuscado="";
let empresaBuscada="";
let empresaEncontradaVar = null;
let empresaEncontradaIngresar=null;

//XXXXXXXXXXX

let nombreSupervisorBuscado="";
let busquedaSupervisor=document.getElementById("buscaSupervisor");
let  posicionEncontrada3 = -1;
let posicionEncontrada5=-1;
let posicionEncontrada6=-1;
let posicionEncontrada7=-1;
let posicionEncontrada8=-1;
// aca buscar como meter lo de busqueda de supervisro y aprendiz
botonBuscar.addEventListener("click", function(){
     nitBuscado = busquedaNit.value;
     empresaBuscada= busquedaEmpresa.value;
     let lectura2=false; 
    oku4();
      
      // tienen que guardar la empresa con nit por obligacion, sino quiere este problema pongale condicional a que por obligacion
      // tiene que tener nit, o le quitamos a la siguiente linea la parte de || nit buscado 
      // si la empresa tiene nit la busca, sino tira el primer elemento del array
     

      for ( let i = 0; i < empresas.length; i++) {
        if ( empresaBuscada === empresas[i].nombreEmpresa || nitBuscado === empresas[i].nit ) {
            lectura2=true;
           
            posicionEncontrada2 = i;
            break
        }
      }

      if (lectura2) {
       // ACA DEBO INLCUIR EN OTRO LECTURA 2 LA PARTE DE AGREGAR SUPERVISOR
        empresaEncontradaVar = empresas[posicionEncontrada2];
        let datosEnJSON5 = JSON.stringify(empresaEncontradaVar);
        empreEncontrada.innerHTML = "Empresa encontrada:" +datosEnJSON5+"";
      
        // todas las que se han buscado se modifican porque tiene memoria toca cambiar eso
        let edisionEmpresa=document.getElementById("editarEmpresa");
        let edisionNit=document.getElementById("editarNit");
        let dato15="";
        let dato16="";
            let gcEmpresa=document.getElementById("guardarCambiosEmpresas");
            gcEmpresa.addEventListener("click", function(){
            
                dato15=edisionEmpresa.value;
                dato16=edisionNit.value;
            
                if( dato15 != ""){
                    empresaEncontradaVar.nombreEmpresa=dato15;
                }
                if( dato16 != ""){
                    empresaEncontradaVar.nit=dato16;
                }
                posicionEncontrada2=-1;
                empresaEncontradaVar = null;
            });
        // aca puede ir lo de ingreso de supervisor 
       //let ingresoNombreSupervisor=document.getElementById("nombreIngresoSupervisor");
       //let ingresoContactoSupervisor=document.getElementById("contactoIngresoSupervisor");
        let dato24="";
        let dato25="";
      
         
       empresaEncontradaIngresar=empresas[posicionEncontrada2];
                let ingresoSupervisorBoton= document.getElementById("acusuperingreso");
                ingresoSupervisorBoton.addEventListener("click", function(){
                    dato24=supervisor.value;
                    dato25=contactoSupervisor.value;
                    if(dato24 !="" && dato25 !=""){
                    supervisorSena= {
                        nombreSupervisor:dato24,
                        numeroContanto:dato25,
                        aprendiz:[],
                    }
                  empresaEncontradaIngresar.supervisores.push(supervisorSena);
                    }
                        
                supervisor.value="";
                contactoSupervisor.value="";

                });     
               
        
      } else {
        empreEncontrada.innerHTML = "No se encontró ninguna empresa ";
      }

      if(busquedaNit.value != ""){
        busquedaNit.value="";
      }
      if(busquedaEmpresa.value != ""){
        busquedaEmpresa.value="";
      }
 
}); 
// en arreglo AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
let supervisorEncontradoVar = null;
let supervisorEncontradoIngreso=null;
let  aprendizEncontradoIngreso=null;
let superEncontrado=document.getElementById("supervisorEncontrado");
let botonBuscar2=document.getElementById("botomBusqueda2");
botonBuscar2.addEventListener("click", function(){
    nombreSupervisorBuscado=busquedaSupervisor.value;
   oku5();
     let lectura3=false; 
      
      // tienen que guardar la empresa con nit por obligacion, sino quiere este problema pongale condicional a que por obligacion
      // tiene que tener nit, o le quitamos a la siguiente linea la parte de || nit buscado 
      // si la empresa tiene nit la busca, sino tira el primer elemento del array
     

      for (let i = 0; i < empresas.length; i++) {
        // Itera sobre los supervisores de cada empresa
        for (let j = 0; j < empresas[i].supervisores.length; j++) {
            if (nombreSupervisorBuscado === empresas[i].supervisores[j].nombreSupervisor) {
                lectura3 = true;
                posicionEncontrada3 = i;
                posicionEncontrada5=j;
                break; // Termina el bucle interno porque ya encontraste el supervisor
            }
        }
    }
// aca voy 
    

                if (lectura3) {
                    
                    supervisorEncontradoVar = empresas[posicionEncontrada3];
                    let datosEnJSON6 = JSON.stringify(supervisorEncontradoVar);
                    superEncontrado.innerHTML = "supervisor encontrado:" +datosEnJSON6+"";
                
                    // todas las que se han buscado se modifican porque tiene memoria toca cambiar eso
                    let edisionSupervisor=document.getElementById("editarsupervisor");
                    let dato20="";
                   
                    let gcSupervisor=document.getElementById("guardarCambiosSupervisor");
                    gcSupervisor.addEventListener("click", function(){
                    
                        dato20=edisionSupervisor.value;
                        
                  //  XXXXXXXXXX
                        if( dato20 != ""){
                            supervisorEncontradoVar.supervisores[posicionEncontrada5].nombreSupervisor=dato20;
                        }
                     //XXXXXXXXXXXX   
                        posicionEncontrada3=-1;
                        posicionEncontrada5=-1;
                        supervisorEncontradoVar = null;
                    
                    });
                    let dato26="";
                    let dato27=""; 
                    let dato28=""; 

                supervisorEncontradoIngreso=empresas[posicionEncontrada3];
             

                let ingresoAprendizBoton= document.getElementById("crearaprendizingreso");
                ingresoAprendizBoton.addEventListener("click", function(){
                            dato26=nombAprendiz.value;
                            dato27=idenAprendiz.value;
                            dato28=fichprendiz.value;

                            if(dato26 !="" && dato27 !="" && dato28 !=""){
                             aprendizSena={
                                    nombreAprendiz:dato26,
                                    identificacionAprendiz:dato27,
                                    fichaAprendiz:dato28,
                                }
                               
                                supervisorEncontradoIngreso.supervisores[posicionEncontrada5].aprendiz.push(aprendizSena);
                            }
                                  
                          nombAprendiz.value="";
                          idenAprendiz.value="";
                          fichprendiz.value="";

                });  
                    
                } else {
                    superEncontrado.innerHTML = "No se encontró ninguna empresa ";
                }

                if(busquedaSupervisor.value != ""){
                    busquedaSupervisor.value="";
                }
}); 
//XXXXXXXXXXXXXXXXXXXXXXXX
        
let aprendizEncontradoVar=null;
let aprendizEncontrado= document.getElementById("aprendizEncontrado");
let busquedaAprendiz=document.getElementById("buscaAprendiz");
let busquedaDocumentoAprendiz=document.getElementById("buscaIdentificacionAprendiz");
let  posicionEncontrada4 = -1;
let botonBuscar3=document.getElementById("botomBusqueda3");
let aprendizBuscado="";
let documentoAprendizBuscado="";

botonBuscar3.addEventListener("click", function (){
      aprendizBuscado=busquedaAprendiz.value;
      documentoAprendizBuscado=busquedaDocumentoAprendiz.value;
      let lectura4=false;
      
      for (let i = 0; i < empresas.length; i++) {
        // Itera sobre los supervisores de cada empresa
        for (let j = 0; j < empresas[i].supervisores.length; j++) {

            for (let g =0; g<empresas[i].supervisores[j].aprendiz.length; g++){
               if(aprendizBuscado === empresas[i].supervisores[j].aprendiz[g].nombreAprendiz ||  documentoAprendizBuscado === empresas[i].supervisores[j].aprendiz[g].identificacionAprendiz ){
                lectura4 = true;
                posicionEncontrada4 = i;
                posicionEncontrada6 =j;
                posicionEncontrada7 =g;
                break;
                }
                    
            }
        }
    }
    // aca voy 
            if (lectura4) {
                aprendizEncontradoVar =empresas[posicionEncontrada4];
                let datosEnJSON7= JSON.stringify(aprendizEncontradoVar);
                aprendizEncontrado.innerHTML=" Aprendiz encontrado:" +datosEnJSON7+"";
              // edision aprendiz
                let edisionAprendiz=document.getElementById("editaraprendiz");
                let edisionIdentificacionAprendiz=document.getElementById("editaridentificacionaprendiz");
                let edisionFichaAprendiz=document.getElementById("editarfichaaprendiz");
                let dato21="";
                let dato22="";
                let dato23="";
                let gcAprendiz=document.getElementById("guardarCambiosAprendiz");
                gcAprendiz.addEventListener("click", function(){
                      dato21=edisionAprendiz.value;
                      dato22=edisionIdentificacionAprendiz.value;
                      dato23=edisionFichaAprendiz.value;
// aca voy 18 diciembre 2023
                    if( dato21 != ""){
                        aprendizEncontradoVar.supervisores[posicionEncontrada6].aprendiz[posicionEncontrada7].nombreAprendiz=dato21;
                    }
                    
                    if( dato22 != ""){
                        aprendizEncontradoVar.supervisores[posicionEncontrada6].aprendiz[posicionEncontrada7].identificacionAprendiz=dato22;
                    }
                     
                    if( dato23!= ""){
                        aprendizEncontradoVar.supervisores[posicionEncontrada6].aprendiz[posicionEncontrada7].fichaAprendiz=dato23;
                    }
                    
                   

                 //XXXXXXXXXXXX
                    posicionEncontrada4=-1;   
                    posicionEncontrada6=-1;
                    posicionEncontrada7=-1;
                   
                    aprendizEncontradoVar = null;
                
                });
            
            }else {
                aprendizEncontrado.innerHTML = "No se encontró ninguna empresa ";
            }

            if(  busquedaAprendiz.value != ""){
                busquedaAprendiz.value="";
            }
            if(  busquedaDocumentoAprendiz.value != ""){
                busquedaDocumentoAprendiz.value="";
            }
           
      
              

});

 
//editar empresa 
let editarEmpresa=document.getElementById("modificarEmpresa");
editarEmpresa.addEventListener("click", function (){
    oku20();
   
   });  

// el siguiente codigo es para poner opciones en la eleccion de que modificar ?


 function mostrarOpcionSeleccionada() {
    const selectElement = document.getElementById("opciones");
   
    if(selectElement.value == "empresa"){
       oku6();
        }
    if(selectElement.value == "supervisor"){
        oku8();
        }
    if(selectElement.value == "aprendiz"){
        oku19();
        
        }   
  }

 function opcionCrear(){
    const seleccionElemento=document.getElementById("opciones2");
    if(seleccionElemento.value=="Empresa"){
      oku7();
    }
    if(seleccionElemento.value== "Supervisor"){
        oku9();

    }
    if(seleccionElemento.value=="Aprendiz"){
        oku18();
           
    }

  }








//tareas: 


//////////////////////////////////////////////////////////////////////////
// si ya tiene datos el instru,entonces solo imprima el nombre y datos de el oculte el ingreso de datos instru y muestre el resto 
// el ID es la posicion de registro, evaluar como crear uno nuevo 
// el usuario crea empresas que se ven en cada perfil  perfil y en un global osea crear la empresa ahi en ese contexto y para que lo 
// vean todos se crea algo diferente que todos pueden agregar pero no modificar 

 


// se asume que es el rol de usuario y abrira:
//         -espacios para ingresar los datos del usuario para reconocerlo, quedara sin cambios 
                //la contraseña y el nick name asociados tendran un unico registro de quien es el instructor, contiene
                // nombre, centro asociado ejm CASA, fichas, al parecer aca se requiere un array de objetos
                // este sera un espacio solo  para el instru, nadie mas podra modificarlo(preguntar si el admi es el que puede modificarlo)
//         -espacio para ingresar y modificar  datos de las empresas(array) y modificarlar el consolidado debe ser de libre acceso para todos los usuarios
//          - espacio con el consolidado de ingreso de empresas para todos los usuarios, solo sera visible sin posibilidad de que
//            puedan modificarlo
//         - el lado del admi, podra modificar empresar del consolidado global e ingresar empresas
//         - buscar empresas, buscar estudiantes
           
 // crear boton de ir al ingreso y sacar de  la creacion del array eso,ocultarlo y desocultarlo cuando otro ingrese 
  // si se ingresa nick name "jaime"asi, o pedir cedula o contraseña o algo que sea muy unico, se llama el array y se solicitara ingreso de datos de empresa para llenar ese array asi
  // a la hora de imprimir, se agrupa en funcion de ese array

