/*
* OBJETO CON LAS PROPIEDADES DEL BOTÓN
*/

var pb = {

   botonMovil: document.querySelector("#btnMovil span"),
   vistaBotones: false,
   botonera: document.querySelector("nav"),
   botones: document.querySelectorAll("nav ul li a")
}

/*
* OBJETO CON LOS METODOS DEL BOTÓN
*/

var mb = {

    inicioMovil: function(){

        pb.botonMovil.addEventListener("click", mb.mostrarBotonera);

        pb.botones.forEach(boton=>{
            boton.addEventListener("click", mb.ocultarBotonera);
        })
    },

    mostrarBotonera: function(boton){

        if (!pb.vistaBotones) {
            
            pb.vistaBotones = true;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-9 col-xs-12";

        }
        else{

            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-9 col-xs-0";
        }
    },

    ocultarBotonera: function(boton){

        if (window.matchMedia("(max-width:767px)").matches) {

            pb.vistaBotones = false;
            pb.botonera.className = "col-lg-6 col-md-7 col-sm-9 col-xs-0";
            
        }

    }

}

mb.inicioMovil();