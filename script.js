$(document).ready(() => {

    setTimeout(() => {
            var audio = new Audio("windows11.mp3");
            audio.play();
    
        }, 0);

    $(".startIcons").click(() => {
        $(".startMenue").toggleClass("showStart");

    })

    function declare(){
        alert("Hey use! You are using vitual windows11!!!");
    }



})
