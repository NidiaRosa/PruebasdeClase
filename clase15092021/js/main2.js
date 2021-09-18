/* function informar(){
    let mensaje="Usuario no autorizado...";
    let usuarios= new Array(3);
    let claves= new Array(3);

    usuarios[0] = "CARLOS";
    usuarios[1] = "JUAN";
    usuarios[2] = "PEPE";

    claves[0] = "123";
    claves[1] = "456";
    claves[2] = "678";
    
    for (let i = 0; i < usuarios.length; i++) {
        if((usuarios[i]==document.miFormulario.usuario.value.toUpperCase()) && (claves[i]== document.miFormulario.password.value))
        {
            mensaje="Bienvenido al sistema...";
        }        
        break;
    }
    alert(mensaje);
    document.miFormulario.botonlimpiar.click();
    document.miFormulario.usuario.focus();
} */
function tratarTexto(){
    var array_palabras = new Array();
    var nueva_ventana;
    var num_palabras;

    array_palabras=miFormulario.miArea.value.split(" ");
    for (let i = 0; i < array_palabras.length; i++) {
        document.write("<br/>Valores del arreglo [",i,"] :", array_palabras[i]);
    }
}