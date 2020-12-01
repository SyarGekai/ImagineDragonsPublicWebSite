//REST
var uriserver = "https://restcountries.eu/rest/v2/all";
/*la direccion que voy a ocupar*/

var datos;
//PAISES COMBO
function callrestapi() {

    $.ajax({ /*objeto ajax recibe el json*/
        url: uriserver,
        type: "GET",
        dataType: "json",
        success: OnSuccess,
        error: OnError
    })
}
function OnSuccess(data) {
    datos = data;

    var valor1 = document.getElementById("paises");

    for (var i = 0; i < datos.length; i++) {

        valor1.innerHTML += "<option>" + datos[i].name + "</option>";
    }
}

function OnError(jq, textstatus, errorthrow) {
    alert(" Error" + errorthrow + "url" + uriserver);
}

//Calculo edad
function calcularEdad(fecha) {
    var fecha
    var hoy = new Date();
    var cumpleanos = new Date(fecha);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }

    return edad;
}
//Comprobacion de registro

function comprobarDatosYEnviarCorreo() {
    //Informacion
    var nombreCompleto = document.getElementById("nombreCompleto").value;
    var generoInfo = document.getElementById("generoInfo").value;
    var gradoAcademicoInfo = document.getElementById("gradoAcademicoInfo").value;
    var pais = document.getElementById("paises").value;

    //Fecha de nacimiento y edad
    var fecha = document.getElementById("fecha").value;
    var edad = calcularEdad(fecha);

    //Informacion del email
    var emailTo = document.getElementById("emailTo").value;
    var emailCC = "";
    var emailSub = "* Sucrito a FAN VIP de Imagine Dragons *";
    var emailBody = "\n Informacion del usuario suscrito "
        + "\n Nombre Completo del suscriptor: "
        + nombreCompleto
        + "\n Genero del Suscriptor: "
        + generoInfo
        + "\n Grado Academico del Suscriptor: "
        + gradoAcademicoInfo
        + "\n Pais de origen o nacionalidad: "
        + pais
        + "\n Gracias por suscribirse , recibira noticias periodicas de tu grupo favorito!!!";
    //Validar edad mayor a 15 años y espacios requeridos
    if (edad > 15) {
        alert("Te has convertido en un FAN VIP de Imagine Dragons!");
        window.open("mailto:" + emailTo + '?cc=' + emailCC + '&subject=' + emailSub + '&body=' + emailBody);
    } else {
        alert("Lo Sentimos, no cumple con los requisitos o hay espacios vacios.");
    }

}
//CONTACTO : VALIDACION DE LLENADO DE ESPACIO 
function textarea() {
    if (document.getElementById("text").value == '') {
        alert("Por favor, digite un mensaje en la caja de texto.");
    } else {
        alert("Mensaje Enviado! ☺ ")
    }

}