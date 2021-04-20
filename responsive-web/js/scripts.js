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

    // Conteúdos da barra de navegação
    $("ul.nav-container").addClass("unselectable")

    $("li.btn-menu-nrg").click(function(){
        $("div.content-nrg").addClass("style-nav")
        $("div.content-nrg").slideToggle("slow");
        $("li.btn-menu-nrg").mouseleave(function(){
            $("div.content-nrg").slideUp("fast")
        });
    });

    $("li.btn-menu-vod").click(function(){
        $("div.content-vod").addClass("style-nav")
        $("div.content-vod").slideToggle("slow");
        $("li.btn-menu-vod").mouseleave(function(){
            $("div.content-vod").slideUp("fast")
        });
    });

    $("li.btn-menu-cer").click(function(){
        $("div.content-cer").addClass("style-nav")
        $("div.content-cer").slideToggle("slow");
        $("li.btn-menu-cer").mouseleave(function(){
            $("div.content-cer").slideUp("fast")
        });
    });

    $("li.btn-menu-whi").click(function(){
        $("div.content-whi").addClass("style-nav")
        $("div.content-whi").slideToggle("slow");
        $("li.btn-menu-whi").mouseleave(function(){
            $("div.content-whi").slideUp("fast")
        });
    });

    $("li.btn-menu-vin").click(function(){
        $("div.content-vin").addClass("style-nav")
        $("div.content-vin").slideToggle("slow");
        $("li.btn-menu-vin").mouseleave(function(){
            $("div.content-vin").slideUp("fast")
        });
    });

    $("li.btn-menu-oth").click(function(){
        $("div.content-oth").addClass("style-nav")
        $("div.content-oth").slideToggle("slow");
        $("li.btn-menu-oth").mouseleave(function(){
            $("div.content-oth").slideUp("fast")
        });
    }); 

    

    $("div.products").addClass("viewer-products")

    // Animação do Botão Fechar 
    $("span#close").mouseenter(function(){
        $("span#close").animate({
            opacity: 1.0
        });
    });
    $("span#close").mouseleave(function(){
        $("span#close").animate({
            opacity: 0.5
        });
    });

    $("img#exclu").click(function(){
        $("div#product-one").removeAttr("style")
        $("main-container").prepend("div#product-one")
        $("product-one").fadeIn("slow")
    });
    $("span#close").click(function(){
        $("div#product-one").fadeOut("fast")
    });
    
    $("img#novi").click(function(){
        $("div#product-two").removeAttr("style")
        $("main-container").prepend("div#product-two")
        $("product-two").fadeIn("slow")
    });
    $("span#close").click(function(){
        $("div#product-two").fadeOut("fast")
    });

    $("img#drin").click(function(){
        $("div#product-thr").removeAttr("style")
        $("main-container").prepend("div#product-thr")
        $("product-thr").fadeIn("slow")
    });
    $("span#close").click(function(){
        $("div#product-thr").fadeOut("fast")
    });

});