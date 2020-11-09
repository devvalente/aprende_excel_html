$('#in_registrar').on('click', function(){
    if( (validator_nombre===true) && (validator_apellido===true) && (validator_email===true) ){
        send();
    }else{
        alert("Corregir errores en el formulario antes de enviar.");
    }
});

let params;
let nombre;
let apellido;
let email;

function send(){
    nombre   = $('#in_nombre').val();
    apellido = $('#in_apellido').val();
    email    = $('#in_email').val();
    params = {
        'action'  :'register',
        'nombre'  :nombre,
        'apellido':apellido,
        'email'   :email
    }

    fetch('http://localhost/html/aprende_excel/pages/api.php', {
        method: 'POST',
        body:  JSON.stringify(params)
    }).then(r => r.json())
    .then(data => { 
        //console.log(data);
        if(data[0].status === 'ok'){
            window.location = './gracias/'+data[0].data['Redirect'];
        }
    });
}