let validator_nombre   = false;
let validator_apellido = false;
let validator_email    = false;

let expRegCadena = /^[a-zA-Z]*$/;
let expRegEmail  = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;

//Captura del campo nombre
$('#in_nombre').blur(validarNombre);
$('#in_nombre').on('keyup', validarNombre);
//Captura del campo apellido
$('#in_apellido').blur(validarApellido);
$('#in_nombre').on('keyup', validarApellido);
//Captura del campo email
$('#in_email').blur(validarEmail);
$('#in_email').on('keyup', validarEmail);

function validarNombre(){
//Validar nombre mientras se presiona
val = $('#in_nombre').val();    
    if(val.length < 4){
        element = document.getElementById("div_error_nombre");
        element.className = "error_enabled";
        element.innerHTML = "<strong>Mínimo 03 caracteres.</strong>";
        validator_nombre = false;
    }else{
        if(expRegCadena.test(val)){
            element = document.getElementById("div_error_nombre");
            element.className = "error_disabled";
            validator_nombre = true;
        }else{
            element = document.getElementById("div_error_nombre");
            element.className = "error_enabled";
            element.innerHTML = "<strong>Nombre no válido, solo letras.</strong>";
            validator_nombre = false;
        }    
    }        
}


//Validar apellido mientras se presiona
function validarApellido(){
    val = $('#in_apellido').val();    
    if(val.length < 4){
        element = document.getElementById("div_error_apellido");
        element.className = "error_enabled";
        element.innerHTML = "<strong>Mínimo 03 caracteres.</strong>";
        validator_nombre = false;
    }else{
        if(expRegCadena.test(val)){
            element = document.getElementById("div_error_apellido");
            element.className = "error_disabled";
            validator_apellido = true;
        }else{
            element = document.getElementById("div_error_apellido");
            element.className = "error_enabled";
            element.innerHTML = "<strong>Apellido no válido, solo letras.</strong>";
            validator_apellido = false;
        }
    }
}


//Validar email
function validarEmail(){
    val = $('#in_email').val();    
    if(expRegEmail.test(val)){
        element = document.getElementById("div_error_email");
        element.className = "error_disabled";
        validator_email = true;
    }else{
        element = document.getElementById("div_error_email");
        element.className = "error_enabled";
        validator_email = false;
    }
}