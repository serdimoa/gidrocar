(function ($) {
    jQuery.fn.lightTabs = function (options) {

        var createTabs = function () {
            tabs = this;
            i = 0;

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
                showPage(parseInt($(this).attr("data-page")));
                var calcs = new Calcinit();
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
    price.pushpin({top: price.offset().top, offset: 154});
    tabs.pushpin({top: tabs.offset().top,offset:100});
};
$(document).ready(function () {
    $(".button-collapse").sideNav( {menuWidth: 300, // Default is 240
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
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

