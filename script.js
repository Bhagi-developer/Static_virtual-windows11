$(document).ready(() => {

    

    $(".startIcons").click(() => {

        
        $(".startMenue").toggleClass("showStart");
        
        setTimeout(() => {
            var audio = new Audio("windows11.mp3");
            audio.play();
    
        }, 10);
        
    })
    
     $(".notify").click(() => {
        $(".notifyMenue").toggleClass("showNotify");

       
    })

    function declare(){
        alert("Hey use! You are using vitual windows11!!!");
    }



})
