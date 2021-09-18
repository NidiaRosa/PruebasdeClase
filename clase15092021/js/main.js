//document.write("Hola a todos");

//Manejo de funciones
/* function saludar(nombre){
    console.log("Hola ", nombre, " como te va");
    document.write("<br/>Hola ", nombre, " como te va");
}
saludar("Marcos");
saludar("Juan"); */

function sumar(n1, n2){
    //console.log(n1+n2);
    let suma = n1+n2;
    return n1+n2;
}

let valorRetornado = sumar(25,-15);
document.write("<br/>La suma es: ", valorRetornado, "<br/>");

function numerMaximo(valor1, valor2){
    if(valor1>valor2){
        return valor1;
    }else{
        return valor2;
    }
}

let mayor = numerMaximo(10, 20);
document.write("<br/>El valor identificado como mayor fue: ",mayor, "<br/>");

//diferentes tipos de variables
function iteraciones(arg1){
    for (let i = 0; i < arg1.length; i++){
        document.write("Posición [",i,"]: ",arg1[i],"<br/>");
        
        //Imprimir el promedio parseInt parseFloat

    }
        
}
const numeros = [1,2,3,4,5,6];
const arreglo2 = [1, "Pedro",3,"Maria",12.25, true,"score"]

iteraciones(numeros);
iteraciones(arreglo2);

function sumar2(n1,n2){
    let suma = n1+n2;
    return n1+n2;
}
const resultado1 = sumar2(1, 10);
const resultado2 = sumar2(5, 5);
const resultado3 = sumar2(resultado1, resultado2);
document.write("<br/>El valor del resultado3 es: ",resultado3, "<br/>");

//callback
function sumar3(a1,b1,cb){
    const re = a1 + b1;
    cb(re);
}
function valor(result){
    document.write("<br/>El valor retornado desde la función es: ",result, "<br/>");
}
sumar3(15,6,valor);