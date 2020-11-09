<?php
    namespace pages;

use PDO;
use PDOException;

class Connect{
        private $db_driver;
        private $db_host;
        private $db_user;
        private $db_pass;
        private $db_name;
        private $db_dsn;        
        private $db_pdo;

        public function __construct(){
            $this->db_driver = 'mysql';
            $this->db_host   = 'fdb30.awardspace.net';
            $this->db_user   = '3578582_waller';
            $this->db_pass   = 'Apl1c4c10n*';
            $this->db_name   = '3578582_waller';
            $this->db_dsn    = "{$this->db_driver}:dbname={$this->db_name}; host={$this->db_host}";            
        }

        public function connect(){
            ##  Conectar a base de datos
            try{
                $this->db_pdo = new PDO($this->db_dsn, $this->db_user, $this->db_pass);   
                
            }catch(PDOException $e){
                return "Error de conexcion: ".$e->getMessage();
            }            
        }

        public function insert($entity){            
            try{
                $this->connect();
                $sql_insert = "INSERT INTO usuarios(nombre, apellido, email) VALUES( ? , ? , ?)";                 
                $statement_insert = $this->db_pdo->prepare($sql_insert);
                $statement_insert->execute(array($entity->nombre, $entity->apellido, $entity->email));
                $statement_insert = null;
                $this->disconnect();                
                $data[] = [
                    'status' => 'ok',
                    'code'   => 200,
                    'data'   => [
                        'Message' => 'Usuario registrado correctamente.',
                        'Redirect'=> $this->redirect()
                    ]
                ];
                return $data;
            }catch(PDOException $e){
                $data[] = [
                    'status' => 'error',
                    'code'   => 400,
                    'data'   => [
                        'Message' => 'Error al insertar '.$e->getMessage()
                    ]
                ];
                $this->disconnect();
                return $data;
            }
        }

        public function update(){

        }

        public function delete(){

        }

        public function disconnect(){
            $this->db_pdo = null;
        }

        public function redirect(){
            $ip = $_SERVER['REMOTE_ADDR'];
            //$ip = '200.108.190.2';
            $dataArray = json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip), true);
            //$country = $dataArray["geoplugin_countryName"];
            $country = strtolower($dataArray["geoplugin_countryCode"]);
            $file_redirect = "gracias_$country.html";
            return $file_redirect;
        }

        public function __destruct(){
            $this->disconnect();
        }
        

    }

?>