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

            hidePage = function (i) {

                $(tabs).children("div").children("div").hide(0);
                $(tabs).children("div").removeClass("borders");

            };

            delActive = function (i) {

                $(tabs).children("ul").children("li").removeClass("active");

            };

            selectPage = function (i) {

                $(tabs).children("div").addClass("borders");
                $(tabs).children("div").children("div").eq(i).show(1000);

            };

            showPage(0);
            delActive(0);
            hidePage(0);


            $(tabs).children("ul").children("li").each(function (index, element) {
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").hover(function () {
                if (parseInt($(this).attr("data-page")) != 4)
                    selectPage(parseInt($(this).attr("data-page")));
            });

            $(tabs).children("ul").children("li").mouseout(function () {
                hidePage(parseInt($(this).attr("data-page")));
            });

            $(tabs).children("ul").children("li").click(function () {
                $('#content').show(1000);
                $('.price').css( "opacity", 1 );
                showPage(parseInt($(this).attr("data-page")));
                var calcs = new Calcinit();
                calcs.init(parseInt($(this).attr("data-id")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
var calculate = function(){
    var initcalc = new Calcinit();
    var price = $('.price');
    var tabs = $('.tabs');
    tabs.lightTabs();
    $(".button-collapse").sideNav();
    price.pushpin({top: price.offset().top, offset: 54});
    tabs.pushpin({top: tabs.offset().top});
};
$(document).ready(function () {

    if($("#home")){
        var menu = $(".menu");
        $(".parallax").parallax();
        menu.pushpin({top: menu.offset().top});
        console.log("home");
    }
    else{
        console.log("other");
        calculate();
    }

});

