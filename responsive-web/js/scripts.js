$(document).ready(function() {
    // alert("Seja bem-vindo à nossa adega!")

    // Animação do Logo
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

    // Animação do Carrinho
    $("#cart").mouseenter(function(){
        $("span#cart").animate({
            opacity: 0.5
        });
    });
    $("#cart").mouseleave(function(){
        $("span#cart").animate({
            opacity: 1.0
        });
    });
    
});