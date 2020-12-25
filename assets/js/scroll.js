/*
* OBJETO CON LAS PROPIEDADES DEL MOUSE
*/

var ps = {
    posicionScroll: 0,
    articulos: document.querySelectorAll("#scroll article"),
    cajaScroll: document.querySelector("#scroll"),
    cabezote: document.querySelector("header"),
    botonera: document.querySelectorAll("nav ul li a"),
    enlace: null,
    intervalo: null,
    destinoScroll: 0,
    padding: 0
    
}

/*
* OBJETO CON LOS METODOS DEL MOUSE
*/

var ms = {

    inicioScroll: function(){

        document.addEventListener("scroll", ms.efectoParallax);

        ps.botonera.forEach(boton => {

            boton.addEventListener("click", ms.desplazamiento);
        });
    },

    efectoParallax: function(){
        
        //En el objeto window, existe la propiedad pageYoffset, que marca la posicion del cliente en la página

        ps.posicionScroll = window.pageYOffset;

        //posicion header

        if (ps.posicionScroll > 80){

            ps.cabezote.style.zIndex = 10;
            ps.cabezote.style.position = "fixed"; 
            if (window.matchMedia("(min-width:768px)").matches) {
                ps.padding = 90;        
            }
            else{
                ps.padding = 140;      
            }
           
            
        }
        else{

            ps.cabezote.style.zIndex = 0;
            ps.cabezote.style.position = "relative";
            if (window.matchMedia("(min-width:768px)").matches) {
                ps.padding = 190;        
            }
            else{
                ps.padding = 280;        

            }

        }

        //posicion articulos

        if (ps.posicionScroll > ps.cajaScroll.offsetTop - 200) {            

            ps.articulos.forEach(articulo => {

                articulo.style.marginLeft = "0%"
            });
        }
        else{

            ps.articulos.forEach(articulo => {
                if (window.matchMedia("(min-width:768px)").matches) {
                articulo.style.marginLeft = (ps.posicionScroll/23)-100 + "%";                                
                }

            }); 
        }
    },

    desplazamiento: function(boton){

        boton.preventDefault();        

        ps.ruta = boton.target.getAttribute("href");       

        ps.destinoScroll = document.querySelector(ps.ruta).offsetTop - ps.padding;

        ps.intervalo = setInterval(function(){    

            if (ps.posicionScroll < ps.destinoScroll) {
                
                ps.posicionScroll += 100;

                if (ps.posicionScroll >= ps.destinoScroll) {
                    
                    ps.posicionScroll = ps.destinoScroll;

                    clearInterval(ps.intervalo);
                }
                
            }else{

                ps.posicionScroll -= 100;

                if (ps.posicionScroll <= ps.destinoScroll) {
                    
                    ps.posicionScroll = ps.destinoScroll;

                    clearInterval(ps.intervalo);
                } 
            }

            window.scrollTo(0, ps.posicionScroll);

        }, 50)

    }
    
}



ms.inicioScroll();