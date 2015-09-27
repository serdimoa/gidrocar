(function($){
    jQuery.fn.lightTabs = function(options){

        var createTabs = function(){
            tabs = this;
            i = 0;

            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            };

            hidePage=function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").removeClass("borders");

            };

            delActive = function (i) {
                $(tabs).children("ul").children("li").removeClass("active");
            };

            selectPage = function (i) {
                $(tabs).children("div").children("div").hide();



                    $(tabs).children("div").addClass("borders");


                $(tabs).children("div").children("div").eq(i).show();


            };

            showPage(0);
            delActive(0);
            hidePage(0);


            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;
            });

            $(tabs).children("ul").children("li").hover(function(){
                if(parseInt($(this).attr("data-page"))!=4)
                selectPage(parseInt($(this).attr("data-page")));
            });

            $(tabs).children("ul").children("li").mouseout(function(){
                hidePage(parseInt($(this).attr("data-page")));
            });

            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
})(jQuery);
$(document).ready(function(){
    var price =$('.price');
    var tabs = $('.tabs');
    tabs.lightTabs();

    price.pushpin({ top: price.offset().top,offset:45 });
    tabs.pushpin({ top: tabs.offset().top });

});