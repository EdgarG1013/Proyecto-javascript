// let titulo = document.querySelector("h1");
// titulo.innerHTML = "Juego del numero secreto";

// let parrafo = document.querySelector("p");
// parrafo.innerHTML = "Ingresa un numero entre 1 y 10"


let numeroSecreto = 0;
let Intentos = 1;
let ListaNumeroSorteados = [];
let numeroMaximos = 10;


//---- [ creamos una funcion que de forma generica inserte en el html ] ------//
function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//---- [ creamos una funcion que cambie de forma generica una imagen en el html ] ------//
function cambiarImagen(idImg, srcImg) {
    const imagen = document.getElementById(idImg);
    imagen.src = srcImg;

}

//---- [ creamos una funcion que genera un numero seudoaleatorio para el juego ] ------//
function generarNumeroSecreto() {
// generamos el numero secreto y lo guardamos en "numero generado"
 let numeroGenrado = Math.floor(Math.random()*numeroMaximos)+1;

console.log(numeroGenrado)
console.log(ListaNumeroSorteados)
// veriicamos si ya todos los numeros del arreglo han sido sorteados
 if (ListaNumeroSorteados.length == numeroMaximos) {
    //asignarElementoTexto("p", "ya se sortearon todos los numeros posibles")
     (ListaNumeroSorteados.splice(0, 3))
 } else {
    // si el numero random generado esta en la lista de numeros volvemos a ejecutar "generar numero secreto"
    if (ListaNumeroSorteados.includes(numeroGenrado)) {
        return generarNumeroSecreto();
    // si no ingresamos el numero a la lista y retornamos el numero para jugar
    } else {
        ListaNumeroSorteados.push(numeroGenrado);
        return numeroGenrado;
    }
  }

}

//---- [ creamos una funcion que verifica el intento del usuario ] ------//
function VerificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);

// verificamos que el numero secreto es igual al que ingresa el usuario
    if (numeroSecreto == numeroUsuario){
// el usuario acierta
        asignarElementoTexto("p", `Felicitaciones, acertaste el numero secreto en ${Intentos} ${(Intentos == 1) ? "intento" : "intentos"}`);
        cambiarImagen("id_imagen", "./img/haruWin.png");
    // para activar el boton nuevo juego cuando el usuario acierta
    document.getElementById("reiniciar").removeAttribute("disabled");
// el usuario no acierta
    } else {
            if (numeroSecreto > numeroUsuario){
                asignarElementoTexto("p", "El numero es mayor");
            } else {
                 asignarElementoTexto("p", "El numero es menor");
            }

        }
    Intentos++;
    limpiarCaja();
    return;
}

//---- [ creamos una funcion que limpia la caja de texto ] ------//
function limpiarCaja(){
//  let valorCaja = document.querySelector("#valorUsuario") // con queryselector usamos "#" para buscar por id
//  valorCaja.value = ""; 
//  let valorCaja =  document.getElementById("valorUsuario") // con elementbyid no es necesario
//  valorCaja.value = "";

document.getElementById("valorUsuario").value = "";

}

//---- [ creamos una funcion que restebalce a las condiciones iniciales ] ------//
function CondicionesIniciales(){
    asignarElementoTexto("h1", "Juego del número secreto con haru urara");
    asignarElementoTexto("p", `Ingresa un numero entre 1 y ${numeroMaximos}`);
    numeroSecreto = generarNumeroSecreto();
    Intentos = 1;

 return;
}

//---- [ creamos una funcion que reinicia el juego ] ------//
function ReiniciarJuego() {
    limpiarCaja();
    CondicionesIniciales();
    cambiarImagen("id_imagen", "./img/haru.png");
// desabilitamos el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", true);

 return;
}

//---- [ ejecutamos las condiciones iniciales ] ------//
CondicionesIniciales();

