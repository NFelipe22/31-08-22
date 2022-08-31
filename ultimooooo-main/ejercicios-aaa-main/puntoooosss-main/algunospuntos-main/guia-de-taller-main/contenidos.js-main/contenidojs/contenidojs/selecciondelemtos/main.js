'use strict';
//Seleccionar por id

const parrafo1 = document.getElementById('parrafo1');
//console.log(parrafo1)
//selccion por atributo name
let nameparrafo = document.getElementsByName("parrafo2");
//console.log(nameparrafo);
//seleccion por class
let elemento =document.getElementsByClassName("parrafo");
//concole.long(elemento);
//query selector por id#
const parrauno =document.querySelector('#parrafo1');
const elementEtiqueta = documet.querySelector("h1");
const elementClass = document.querySelector(".ejemplo");

//seleccionando todos los elentos p
const todosP = document.querySelector("p");
//console.log(todosP);

/*function print(){
    const valor = document.getElementById("edad").value;
    alert("la edad es"+ valor);
}*/
const print = () =>{
    const valor = document.getElementById("edad").value;
    alert("la edad es:" + valor);
}
