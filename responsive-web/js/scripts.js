$(document).ready(function() {
    // alert("Seja bem-vindo à nossa adega!")

    $(".logo").mouseenter(function(){
        $("img#logo").animate({
            opacity: 0.6
        });
    });
    $(".logo").mouseleave(function(){
        $("img#logo").animate({
            opacity: 1.0
        });
    });

    
});