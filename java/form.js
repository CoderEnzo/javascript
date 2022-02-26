var inputs =document.getElementsByClassName('formulario__input');
for(var i = 0; i < inputs.length; i++){
    inputs[i].addEventListener('keyup', function(){
        if(this.value.length>=1) {
            this.nextElementSibling.classlist.add('fijar');
        }else {
            this.nextElementSibling.classlist.remove('fijar');
        }
    });
} 

var elemento = document.createElement ("h3"),
contenido = document.createTextNode ("contacto");
elemento.appendChild(contenido);
document.getElementById("subtitulo4").appendChild(elemento)