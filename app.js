

function encriptadoDeVocales(){
    let mensaje = (document.getElementById("mensajeUsuario").value);
    let mensajeEncriptado = "";
    for(i=0 ; i < mensaje.length ; i++){
        let char = mensaje[i];
        switch(char){
            case "a":
                mensajeEncriptado += "ai";
                break;
            case "e":
                mensajeEncriptado += "enter";
                break;
            case "i":
                mensajeEncriptado += "imes";
                break;
            case "o":
                mensajeEncriptado += "ober";
                break;
            case "u":
                mensajeEncriptado += "ufat";
                break;
            default:
                mensajeEncriptado += char;
        }
        vaciarTextArea();
    } return mostrarResultadoPantalla(mensajeEncriptado);
}


//let mensaje = "hola me llamo tomas y me gusta el arte, todo tipo de arte.";

//let mensajeEncriptado = encriptadoDeVocales(mensaje);

//console.log(`El mensaje encriptado es: "${mensajeEncriptado}".`)


//DESENCRIPTADO


function desencriptado(){
    {let mensajeEncriptado = (document.getElementById("mensajeUsuario").value);
    mensajeEncriptado = mensajeEncriptado.replace(/ai/g ,"a")
                                         .replace(/enter/g,"e")
                                         .replace(/imes/g,"i")
                                         .replace(/ober/g,"o")
                                         .replace(/ufat/g,"u");
    vaciarTextArea();
    
    return mostrarResultadoPantalla(mensajeEncriptado);}
}

//let mensajeDescencriptado = descencriptado(mensajeEncriptado);
//console.log (mensajeDescencriptado);




function vaciarTextArea(){
    document.getElementById("mensajeUsuario").value = "";
}

function vaciarResultado(){
    document.getElementById("mensajeParaCopiar").textContent = "";
}


function mostrarResultadoPantalla(mensajeEncriptado){
    let div = document.getElementById("resultado");
    if(mensajeEncriptado == mensajeEncriptado)
    
    div.innerHTML = `<h2 id="mensajeParaCopiar" class="resultado">${mensajeEncriptado}</h2><input id="copiar" class="copiar" type="button" onclick="copiar();" value="Copiar">`;
}


function copiar(){
    let mensajeParaCopiar = document.getElementById("mensajeParaCopiar");
    let button = document.getElementById("copiar");

    navigator.clipboard.writeText(mensajeParaCopiar.textContent);
    button.value = "Copiado!";

   return vaciarResultado();
}