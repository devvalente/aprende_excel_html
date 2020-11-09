let contador = 3;
let banner = document.getElementById("div_banner");
let interval = setInterval('fadeIn(banner)', 1000);
let btn_aceptar = document.getElementById("wt_btn_popup_acept");
let time;

    function fadeIn(element){
        //console.log(contador);    
        if(contador > 0){
            contador--;        
        }else{        
            element.style.position = "fixed";
            element.style.opacity = 1;
            clearInterval(interval);
        }
    }

    btn_aceptar.addEventListener('click', fadeOut);    
        
    function fadeOut(){
        banner.style.height  = "0px";
        banner.style.opacity = 0;     
        time = setInterval('displayNone(banner)', 1000);
    }

    function displayNone(element){
        banner.style.display = "none";
        clearInterval(time);
    }
//  $('#wt_btn_popup_acept').on('click', function(){ banner.fadeOut(); })