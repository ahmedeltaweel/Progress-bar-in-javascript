function start(){

    var element = document.getElementById("myBar");
    var width = 10;

    var id = setInterval( frame , 30 );

    function frame(){
        if(width == 100){
            clearInterval(id);
        }else {
            width+=.5;
            element.style.width = width+'%'
        }
    }
}
