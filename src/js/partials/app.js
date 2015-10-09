(function ($) {
    jQuery.fn.lightTabs = function (options) {

        var createTabs = function () {
            tabs = this;
            i = 0;
            var calcs = new Calcinit();
            calcs.init(parseInt(1));


            showPage = function (i) {
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            };

            $(tabs).children("ul").children("li").each(function (index, element) {
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").click(function () {
                $('#content').show(1000);
                $('.price').css("opacity", 1);
                $('.price-sm-show').css("opacity", 1);
                showPage(parseInt($(this).attr("data-page")));
                calcs.init(parseInt($(this).attr("data-id")));
            });
            var ua = navigator.userAgent,
                event = (ua.match(/iPad/i)) ? "touchstart" : "click";
            $(tabs).children("ul").children("li").bind(event, function() {
                $('#content').show(1000);
                $('.price').css("opacity", 1);
                $('.price-sm-show').css("opacity", 1);
                showPage(parseInt($(this).attr("data-page")));
                calcs.init(parseInt($(this).attr("data-id")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
var calculate = function () {
    var initcalc = new Calcinit();
    var price = $('.price');
    var tabs = $('.tabs');
    tabs.lightTabs();
    price.pushpin({top: tabs.offset().top, offset: 180});
    tabs.pushpin({top: tabs.offset().top,offset:97});

};
$(document).ready(function () {

    if(bowser.firefox){
        $(".nav-wrapper img").css({"width":"200px"});
    }
    if(bowser.msie){
        $("nav ul").css({"width":"auto"});
        $(".nav-wrapper img ").css({"width":"300"});

    }
    if(bowser.ios){
        $("#phone").addClass("iosfontfix");
        $("#h4ios").addClass("iosfontfix");
        $("#index-banner h1, #time h2, .header, #calc h4, #calc h4 span, #clean h4, #clean p span, #time p span").addClass("iosfontfix");
        $('#content').show(1000);
        $('.price-sm-show').css("opacity", 1);
        //$("#phone")
    }
    $("html").css({"padding-top":"0 !important"});
    $(".button-collapse").sideNav( {menuWidth: 200, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
});
    $("#owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        pagination:false,
            autoPlay:true,
        transitionStyle : "goDown",

        // "singleItem:true" is a shortcut for:
        items : 1
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
    if (!element&&!element2) {
        var c = document.getElementById("menu_calc");
        c.className = c.className + " activemenu";
        calculate();
        console.log("other");

    } else if(element&&!element2)
    {
        var h = document.getElementById("menu_home");
        h.className = h.className + " activemenu";
        console.log("home");
    }
    else if(element2&&!element){
        var d = document.getElementById("menu_contact");
        d.className = d.className + " activemenu";
        $('#textarea').trigger('autoresize');
        console.log("hellppp")
    }




});

$(window).on('scroll', function () {
    var tabs = $(".tabs");
if(tabs) {


    var offset = 200;
    if (offset > tabs.offset().top) {
        if (bowser.firefox) {
            $(".tabs").css({"left": "0"});
        }

    }
    else {
        if (bowser.firefox) {
            $(".tabs").css({"left": "18%"});
        }
    }
    var scrollTop = $(this).scrollTop();
    //console.log(offset);
}
});


