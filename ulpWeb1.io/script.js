var imagenes = [
 
    "imagenes/MM4.jpeg",
    "imagenes/MM5.jpeg",
    "imagenes/MM6.jpeg",
    "imagenes/MM7.jpeg",
    "imagenes/MM8.jpeg",
    "imagenes/MM_10.jpeg",
    "imagenes/MM_11.jpeg",
    "imagenes/MM12.jpeg",
    "imagenes/MM13.jpeg",
    "imagenes/MM14.jpeg",
    "imagenes/MM1.jpeg",
    "imagenes/MM2.jpeg"


]

var index = 0 
var carruselImg = document.getElementById("carrusel_Imagenes")

function cargarImagenes() {
    
    carruselImg.innerHTML = "";
   
    for (var i = index; i < index + 4; i++) {
         var img = document.createElement("img");
       
        img.src = imagenes[i];
        img.alt="carrusel roto"+(i+1);
        carruselImg.appendChild(img);
    }
}
avanzaAuto();

function imagenAnterior() {
    if (index >= 4) {
        index -= 4;
        cargarImagenes();
    }
}

function imagenSiguiente() {
    if (index + 4 < imagenes.length) {
        index += 4;
        cargarImagenes();
    }else{
        index = 0;
        cargarImagenes();
    }
}

cargarImagenes();

function avanzaAuto(){
    setInterval( function(){
        imagenSiguiente();
    }, 4000 )
}



avanzaAuto();