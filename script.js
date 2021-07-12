$(document).ready(() => {

    

    $(".startIcons").click(() => {
        $(".startMenue").toggleClass("showStart");

        setTimeout(() => {
            var audio = new Audio("/sounds/windows11.mp3");
            audio.play();
    
        }, 0);
    })

    function declare(){
        alert("Hey use! You are using vitual windows11!!!");
    }



})