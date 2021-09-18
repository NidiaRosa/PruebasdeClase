/* alert ("Hola mundo"); 
console.log("Hola mundo");
document.write("Imprimir otro en dato la web");
document.write("<br/>Imprimir otro en dato la web 2<br/>");*/


/* Tipo de datos 
string
num
boolean
arreglos
object
null
NaN*/

/* Tipo de variables y constantes
var // let // const */

/* let nombre = "Maria";
let apellido = "Perez";
let resultado = nombre + " " + apellido;
console.log("El resultado es: ",resultado);
document.write("<br/>El resultado es: ",resultado);
alert("El resultado es: "+resultado);
console.log("14.3");
console.log(12);
console.log([11,3,4,5]);
console.log({"username":"Oscar","Puntaje":14.5,"horas":25}); */
 
/* Operaciones sobre cadenas de texto */
let texto = "Hola esto es una cadena";
let tt=texto.length;
document.write("<br/>",tt);
console.log(tt);
/* alert(tt); */

/* Cortar un cadena */
document.write("<br/>"+texto);
let corte=texto.substr(7);
document.write("<br/>Corte de una cadena: "+corte);
console.log(corte);
/* alert(corte); */

/* Cortar una cadena apartir de una posición */
let corte2=texto.substr(0,6);
document.write("<br/>Corte de una cadena de texto: ",corte2);

/* Encontrar un caracter y establecer la posicion de una cadena */
let pos=texto.indexOf("a");
document.write("<br/>La posición del caracter esta en: ",pos);

let pos2=texto.lastIndexOf("a");
document.write("<br/>La posición del caracter esta en: ",pos2);

/* Reemplazar una cadena por otra */
let reemplazo=texto.replace(texto, "Hoy es Lunes 13 de Septiembre");
document.write("<br/>Reemplazo: ",reemplazo);

let reemplazo2=texto.replace("Hola", "Ola");
document.write("<br/>Reemplazo: ",reemplazo2);

/* Convertir una cadena de texto en mayuscula */
let convertir = texto.toLocaleUpperCase();
document.write("<br/>Transformar el texto: ",convertir);

let convertir2 = texto.toLocaleLowerCase();
document.write("<br/>Transformar el texto: ",convertir2);

/* Constantes */
const pi=3.141516;
let num1 = 15;
let num2 = 4;
let suma = num1+num2;
let resta = num1-num2;
let multiplicacion = num1*num2;
let division = num1/num2;
let divisionentera = num1%num2;
let potencia = Math.pow(num1, num2);


document.write("<br/><br/>El resultado es: "+suma);
document.write("<br/>El resultado es: "+resta);
document.write("<br/>El resultado es: "+multiplicacion);
document.write("<br/>El resultado es: "+division);
document.write("<br/>El resultado es: "+divisionentera);
document.write("<br/>El resultado es: "+potencia);

let texto2 = "Oscar";
let numero5 = 5;
document.write("<br/>"+texto2+numero5);

/* Operadores relacionales */
let num10=60;
let num20=75;

let estado= num10 > num20;
console.log(estado);
document.write("<br/>El resultado de la pregunta es: "+estado);

let password ="Oscar123";
let intentos = 1;
let input = "Oscar123";
let validar = password == input;
document.write("<br/>El resultado de la validación del password es: "+validar);

/* Instrucciones condicionales */
if ((validar == true)&&(intentos==1)){
    alert("Has digitado correctamente la contraseña");
}else{
    alert("La constraseña es incorrecta");
}

let score = 70;
if (score>30 && score<60){
    console.log("Debes seguir intentando");
}else if(score<15){
    console.log("Estamos mejorando");
}else{
    console.log("Debes revisar el tutorial");
}

/* Instruccion con el CASE */
let tipoTarjeta = "Tarjeta Credito";
switch(tipoTarjeta){
    case "Tarjeta Debito":
        console.log("Vas a pagar con tarjeta DEBITO");
        break;
    case "Tarjeta Credito":
        console.log("Vas a pagar con tarjeta CREDITO");
        break;
    default:
        console.log("Tarjeta no valida");
        console.log("Tarjeta no valida");
}

let otravariable = variable;
document.write("Variable que viene de otro lugar "+otravariable);