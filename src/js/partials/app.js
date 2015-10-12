var calculate = function () {
    var initcalc = new Calcinit();
    var price = $('.price');

};
$(document).ready(function () {
    var calcs = new Calcinit();
    $('ul.tabs').tabs();

    if (bowser.firefox) {
        $(".nav-wrapper img").css({"width": "200px"});
    }
    if (bowser.msie) {
        $(".nav-wrapper img ").css({"width": "300"});

    }
    if (bowser.ios) {
        $("#phone").addClass("iosfontfix");
        $("#h4ios").addClass("iosfontfix");
        $("#index-banner h1, #time h2, .header, #calc h4, #calc h4 span, #clean h4, #clean p span, #time p span").addClass("iosfontfix");
        $('#content').show(1000);
        $('.price-sm-show').css("opacity", 1);
        //$("#phone")
    }
    $("html").css({"padding-top": "0 !important"});
    $(".button-collapse").sideNav({
        menuWidth: 200, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $("#owl-demo").owlCarousel({

        navigation: false, // Show next and prev buttons
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        pagination: false,
        autoPlay: true,
        transitionStyle: "goDown",

        // "singleItem:true" is a shortcut for:
        items: 1
        // itemsDesktop : false,
        // itemsDesktopSmall : false,
        // itemsTablet: false,
        // itemsMobile : false

    });
    var n = new Date().getFullYear();
    $("#year").text(n);
    var element = document.getElementById('index-banner');
    var element2 = document.getElementById('conts');
    var menu = $(".menu");
    menu.pushpin({top: menu.offset().top});
    if (!element && !element2) {
        var c = document.getElementById("menu_calc");
        c.className = c.className + " activemenu";
        calculate();
        console.log("other");

    } else if (element && !element2) {
        var h = document.getElementById("menu_home");
        h.className = h.className + " activemenu";
        console.log("home");
    }
    else if (element2 && !element) {
        var d = document.getElementById("menu_contact");
        d.className = d.className + " activemenu";
        $('#textarea').trigger('autoresize');
        console.log("hellppp")
    }
    $(".browser-default").change(function () {
        calcs.init(parseInt($(":selected").val()));
    });
    calcs.init(parseInt($("ul.tabs li a.active").attr("data-id")));
    $(".price").css({"opacity":1});

    $("ul.tabs li a").click(
        function(){
            calcs.init(parseInt($(this).attr("data-id")));
        }
    );

console.log(screen.width);


});







