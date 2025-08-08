let vectorLista = []; // Vector para almacenar los amigis ingresados
let amigoIgresado = document.getElementById("amigo");  // captura del elemento campo de tecto donde se ingresa eñ amigo
let botonAñadir = document.getElementById("button-add"); // captura elemento del boton que añade a los amigos
let botonSortear = document.getElementById("button-draw"); // captura elemento del boton que sortea a los amigos
let listalistaAmigos = document.getElementById("listaAmigos"); // captura elemento lista de amigos
let listaResultado = document.getElementById("resultado"); // captura elemento lista de resultado
let audio = document.getElementById("alarma"); // captura elemento audio

// funcion que añade a la lista, el valor capturado desde el campo de texto 
function agregarAmigo(){

    let listaHija1 = document.createElement("li");
    listaHija1.textContent = amigoIgresado.value;
    listalistaAmigos.appendChild(listaHija1);
    vectorLista.push(amigoIgresado.value);
    amigoIgresado.value = "";
    console.log(vectorLista);

}


// Validacion del campo de texto, para confirmar si esta vacio capturando la informacion del evento click
function ValidacionDeCampo(event){

    if(amigoIgresado.value == ""){
        alert("Debes ingresar un nombre valido en el campo");
        event.preventDefault(); // bloqueo de el uso por defecto del boton
    }
    else{
        agregarAmigo();
    }
}

// funcion que sortea a los amigos almacenas en el vector
function sortearAmigo(){

    if(vectorLista.length < 2){
        alert("Debes ingresar almenos 2 amigos para el sorteo")
    }
    else{
        let listaHija2 = document.createElement("li");
        let nombreAleatorio= Math.floor(Math.random()*vectorLista.length);
        listaHija2.textContent = "Tu amigo secreto es: " + vectorLista[nombreAleatorio] + " !!!!";
        listaResultado.appendChild(listaHija2);
        audio.play();
        Temporizador();
    }
}

// funcion vaciar listas y vaciar el vector
function VaciarListaAmigos(){
    listalistaAmigos.innerHTML = "";
    listaResultado.innerHTML = "";
    vectorLista = [];
    alert("Inicie la dinamina nuevamente !!!")
}

// Temporizasor para que se ejecute luego de un tiempo automaticamente la funcion VaciarListaAmigos
function Temporizador(){
    setTimeout(VaciarListaAmigos, 2000);
}