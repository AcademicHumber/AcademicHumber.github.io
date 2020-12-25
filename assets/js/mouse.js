/*
* OBJETO CON LAS PROPIEDADES DEL MOUSE
*/

var pm = {

    zona: document.querySelector("#efectoMouse"),
    figuras: document.querySelectorAll("#efectoMouse figure"),
    mouseX: 0,
    mouseY: 0,
    horizontal: true,
    vertical: false

}

/*
* OBJETO CON LOS METODOS DEL MOUSE
*/

var mm = {
    
    inicioMouse: function () {
        
        pm.zona.addEventListener("mousemove", mm.movimientoMouse);

        for (let i = 0; i < pm.figuras.length; i++) {
            pm.figuras[i].innerHTML = "<img src='img/mouse/plano0" + i + ".png'>";
            pm.figuras[i].style.zIndex = -i;
            
        }

        setTimeout(function (){
            pm.zona.style.height = pm.figuras[pm.figuras.length -1].childNodes[0].height + "px";
        }, 100);

    },

    movimientoMouse: function(mouse){

        pm.mouseX = - mouse.offsetX;
        pm.mouseY = mouse.offsetY;

        for (let i = 0; i < pm.figuras.length; i++) {

            pm.horizontal ? pm.figuras[i].style.left = pm.mouseX / (i * 100 + 65) + "%": null;
            pm.vertical ? pm.figuras[i].style.top = pm.mouseY / (i * 100 + 30) + "%": null;

        }

    }

}

mm.inicioMouse();