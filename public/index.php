<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Registro Aprende-Excel</title>
        <link rel="styleSheet" href="../libs/bootstrap-4.5.3-dist/css/bootstrap.min.css">
        <link rel="styleSheet" href="../libs/bootstrap-4.5.3-dist/css/bootstrap.css">
        <link rel="styleSheet" href="../libs/bootstrap-4.5.3-dist/css/bootstrap-grid.css">
        <link rel="styleSheet" href="../libs/css/index.css">
        <link rel="styleSheet" href="../libs/css/modal.css">
        <link rel="styleSheet" href="../libs/css/banner_popup.css">
        <script type="text/javascript" src="../libs/js/jquery-3.5.1.min.js"></script>        
        <script type="text/javascript" src="../libs/bootstrap-4.5.3-dist/js/bootstrap.js"></script>
        <script type="text/javascript" src="../libs/bootstrap-4.5.3-dist/js/bootstrap.min.js"></script>
    </head>

    <body class="wt_body">        
        <div class="container">
            <div>
                <div class="div_logo">
                    <img class="img_logo" src="../images/logojpg.jpg">
                </div>            
                <nav class="nav_menu">
                    
                </nav>
            </div>

            <div class="div_reset"></div>            

            <br>
            <h2 class="wt_title_page">Registro de Nuevo Usuario</h2>
            <br>

            <div class="wt_content_form">
                <form class="form-group wt-form-login">
                    <div>
                        <label> <strong> Nombre: </strong> </label>
                        <input class="form-control" id="in_nombre" type="text" name="nombre" placeholder="Nombre" required>
                        <div id="div_error_nombre" class="error_disabled"> <strong>Nombre no válido, solo letras.</strong> </div>
                        <br>
                    </div>

                    <div>
                        <label> <strong> Apellido: </strong> </label>
                        <input class="form-control" id="in_apellido" type="text" name="apellido" placeholder="Apellido" required>
                        <div id="div_error_apellido" class="error_disabled"> <strong>Apellido no válido, solo letras.</strong> </div>
                        <br>
                    </div>

                    <div>
                        <label> <strong> Email: </strong> </label>
                        <input class="form-control" id="in_email" type="text" name="email" placeholder="Email" required>
                        <div id="div_error_email" class="error_disabled"> <strong>Correo no válido.</strong> </div>
                        <br>
                    </div>
                    
                </form>

                    <div>
                        <button id="in_registrar" class="btn btn-success">Registrar</button>
                    </div>
                    <br>

                    <?php include './modal.php'; ?>

            </div>

        </div>

        <?php include './banner_popup.php'; ?>

        <script type="text/javascript" src="../libs/js/validador.js"></script>
        <script type="text/javascript" src="../libs/js/send.js"></script>
        <script type="text/javascript" src="../libs/js/banner_popup.js"></script>

        

    </body>
</html>