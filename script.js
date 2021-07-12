$(document).ready(() => {

    

    $(".startIcons").click(() => {
        setTimeout(() => {
            var audio = new Audio("windows11.mp3");
            audio.play();
    
        }, 0);
        
        $(".startMenue").toggleClass("showStart");

    })

    function declare(){
        alert("Hey use! You are using vitual windows11!!!");
    }



})
