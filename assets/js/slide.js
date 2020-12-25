/*
* OBJETO CON LAS PROPIEDADES DEL SLIDE
*/

var p = {

    paginacion: document.querySelectorAll("#paginacion li"),
    item: 0,
    cajaSlide: document.querySelector("#slide ul"),
    animacionSlide: "slide",
    imgSlide: document.querySelectorAll("#slide ul li"),
    avanzar: document.querySelector("#slide #avanzar"),
    retroceder: document.querySelector("#slide #retroceder"),
    velocidadSlide: 3000,
    formatearPaginacion: false
}

/*
* OBJETO CON LOS METODOS DEL SLIDE
*/

var m = {

    inicioSlide: function(){

        for (let i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].addEventListener("click", m.paginacionSlide);
            p.imgSlide[i].style.width = (100 / p.paginacion.length) + "%";                        
        }

        p.avanzar.addEventListener("click", m.avanzar);
        p.retroceder.addEventListener("click", m.retroceder);

        m.intervalo();

        p.cajaSlide.style.width = (p.paginacion.length * 100) + "%";

    },

    paginacionSlide: function(item){
        p.item = item.target.parentNode.getAttribute("item") - 1;

        m.movimientoSlide(p.item);
    },
    avanzar: function(item){
        p.item++;
        
        if (p.item > p.imgSlide.length - 1) {
            p.item = 0;
        }

        m.movimientoSlide(p.item);
    },

    retroceder: function(){
        p.item--;

        if (p.item < 0) {
            p.item = 3;
        }

        m.movimientoSlide(p.item);
    },

    movimientoSlide: function(item){
        p.formatearPaginacion = true;

        p.cajaSlide.style.left = item * -100 + "%";
        
        for (let i = 0; i < p.paginacion.length; i++) {
            p.paginacion[i].style.opacity = .5;                        
        }

        p.paginacion[item].style.opacity = 1;

        if (p.animacionSlide == "slide") {
            p.cajaSlide.style.transition = ".7s left ease-in-out";
        }
        
        if (p.animacionSlide == "fade") {

            p.imgSlide[item].style.opacity = 0;

            setTimeout(function () {
                p.imgSlide[item].style.transition = ".7s opacity ease-in-out";
                p.imgSlide[item].style.opacity = 1;                             
            }, 500);

        }

    },

    intervalo: function () {
        setInterval(function(){

            if(p.formatearPaginacion){
                p.formatearPaginacion = false;
            }
            else{
                m.avanzar();
            }

        }, p.velocidadSlide);
    }
}

m.inicioSlide();