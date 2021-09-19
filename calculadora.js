
var input_content = document.getElementById("operacion-numeros").value;

function pulsada(tecla){
    switch(tecla){
        case "del":

            document.getElementById("operacion-numeros").value ='';
        
        break;

        case "=":

            var resultado = eval(document.getElementById("operacion-numeros").value);
        
            document.getElementById("operacion-numeros").value = resultado;
        
        break;

        default:

            document.getElementById("operacion-numeros").value = document.getElementById("operacion-numero").value + tecla;
        
        break;
    }
}

function eliminar(){

    var anterior = document.getElementById('operacion-numeros').value;

    var nuevovalor=anterior.substring(0, anterior.length-1);

    document.getElementById("operacion-numeros").value=nuevovalor;
}

function sin(numero1){
    
    resultado= Math.sin(numero1);
    return resultado;
    
}

function cos(numero1){
    
    resultado= Math.cos(numero1);
    return resultado;
    
}

function tan(numero1){
    
    resultado= Math.tan(numero1);
    return resultado;
    
}

function raiz(numero1){
    
    resultado= Math.sqrt(numero1);
    return resultado;

}

function potencia(numero1){

    resultado= Math.pow(numero1);
    return resultado;

}

function prc(numero1,numero2){
    
    resultado = ((numero1/100)*numero2);
    return resultado;

}

function log(numero1){
    
    resultado= Math.log(numero1);
    return resultado;

}


