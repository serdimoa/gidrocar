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
        $(".nav-wrapper img ").css({"width": "300px"});

    }
    if (bowser.ios) {
        $("#phone").addClass("iosfontfix");
        $("#h4ios").addClass("iosfontfix");
        $("#index-banner h1, #time h2, .header, #calc h4, #calc h4 span, #clean h4, #clean p span, #time p span").addClass("iosfontfix");
        $('#content').show(1000);
        $(".menuul").hide();
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

    $('.scrollspy').scrollSpy();

    $('#download-button2').click(function(){
        $.scrollTo($("#calcinit"),1000,{offset:-100});
        return false;});

    $('.tooltipps').tooltipster({
        touchDevices: false,
        debug: false

    });



});


$('#hero-submit').click(function(e){

    // Stop form submission & check the validation
    e.preventDefault();

    // Variable declaration
    var error = false;
    var telephone = $('#telephone').val();
    var email = $('#email').val();
    var username = $('#icon_prefix').val();
    var message = $('#textarea').val();
    if(username.length == 0){
        var error = true;
    }
    if(email.length == 0 || email.indexOf('@') == '-1'){
        var error = true;
    }
    if(telephone.length == 0){
        var error = true;
    }
    if(message.length == 0){
        var error = true;

    }

    if(error == true){
        $('#hero-error-notification').addClass('show-up');
    }else{
        $('#hero-error-notification').removeClass('show-up');
    }


    if(error == false) {
        $.ajax({
            url: "https://mandrillapp.com/api/1.0/messages/send.json",
            data: {
                "key": "9OckqJjdpKNbs3X5PJKJqg",
                "message": {
                    "from_email": "" + email + "",
                    "to": [
                        {
                            "email": "marat.email@mail.ru",
                            "name": "Blog",
                            "type": "to"
                        }
                    ],
                    "autotext": "true",
                    "subject": "Форма обратной связи ",
                    "html": "Сообщение с сайта <br/> Имя:" + username + "<br>Email:" + email + "<br>Телефон:" + telephone + "<br>Сообщение:" + message
                }
            }, success: function () {
                $('#hero-error-notification').removeClass('show-up');
                $('#hero-success-notification').addClass('show-up');
                $('#hero-submit').addClass('disabled');
            },
            error: function() {
                $('#hero-error-notification').addClass('show-up');
            }

        })
    }});


// Function to close the Notification
$('a.notification-close').click(function(){
    $(this).parent('div').removeClass('show-up');
});







