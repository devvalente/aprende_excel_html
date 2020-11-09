let validator_nombre   = false;
let validator_apellido = false;
let validator_email    = false;

let expRegCadena = /^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/;
let expRegEmail  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

let in_nombre     = document.getElementById("in_nombre");
let in_apellido   = document.getElementById("in_apellido");
let in_email      = document.getElementById("in_email");
let btn_registrar = document.getElementById("in_registrar");

checkValidator()

//Captura listener del campo nombre
in_nombre.addEventListener('blur',  validarNombre);
in_nombre.addEventListener('keyup', validarNombre)
//Captura listener del campo apellido
in_apellido.addEventListener('blur',  validarApellido);
in_apellido.addEventListener('keyup', validarApellido)
//Captura listener del campo email
in_email.addEventListener('blur',  validarEmail);
in_email.addEventListener('keyup', validarEmail);

function validarNombre(){
//Validar nombre mientras se presiona
val = in_nombre.value;
    if(val.length < 4){
        element = document.getElementById("div_error_nombre");
        element.className = "error_enabled";
        element.innerHTML = "<strong>Mínimo 03 caracteres.</strong>";          
        validator_nombre = false;
    }else{
        if(expRegCadena.test(val)){
            element = document.getElementById("div_error_nombre");
            element.className = "error_disabled";
            btn_registrar.disabled = false;
            validator_nombre = true;
        }else{
            element = document.getElementById("div_error_nombre");
            element.className = "error_enabled";
            element.innerHTML = "<strong>Nombre no válido, solo letras.</strong>";        
            validator_nombre = false;
        }    
    }        
    checkValidator();
}


//Validar apellido mientras se presiona
function validarApellido(){
    val = in_apellido.value;
    if(val.length < 4){
        element = document.getElementById("div_error_apellido");
        element.className = "error_enabled";
        element.innerHTML = "<strong>Mínimo 03 caracteres.</strong>";        
        validator_apellido = false;
    }else{
        if(expRegCadena.test(val)){
            element = document.getElementById("div_error_apellido");
            element.className = "error_disabled";
            btn_registrar.disabled = false;
            validator_apellido = true;
        }else{
            element = document.getElementById("div_error_apellido");
            element.className = "error_enabled";
            element.innerHTML = "<strong>Apellido no válido, solo letras.</strong>";            
            validator_apellido = false;
        }
    }
    checkValidator();
}


//Validar email
function validarEmail(){
    val = in_email.value;
    if(expRegEmail.test(val)){
        element = document.getElementById("div_error_email");
        element.className = "error_disabled";        
        validator_email = true;
    }else{
        element = document.getElementById("div_error_email");
        element.className = "error_enabled";        
        validator_email = false;
    }
    checkValidator();
}

function checkValidator(){
    if( (validator_nombre===true) && (validator_apellido===true) && (validator_email===true) ){
        enabledButton();
    }else{
        disabledButton();
    } 
}

function enabledButton(){
    btn_registrar.disabled = false;
}

function disabledButton(){
    btn_registrar.disabled = true;
}