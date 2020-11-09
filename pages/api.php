<?php

use pages\Connect;
use pages\Usuario;

require '../autoload.php';
    
    ##  RECIBIR DATOS JSON  ##
    $var = json_decode(file_get_contents("php://input"), true);    
    $var = (Object) $var;        
    ##  ENVIARLOS A LA BASE DE DATOS  ##
    if($var->action === 'register'){
        $connect = new Connect();
        $result = $connect->insert($var);
        echo json_encode($result);
    }
    

?>