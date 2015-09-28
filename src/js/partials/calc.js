/**
 * Created by HOME on 27.09.2015.
 */

// Оюъект цен
var Category_value = function (base, salon, him, engine, coleso) {

    this.base = base;
    this.salon = salon;
    this.him = him;
    this.engine = engine;
    this.coleso = coleso;


};

// Функция инициализации
Category_value.prototype.init = function () {
    this.base.forEach(function (value, i) {
        i += 1;
        $("#base-" + i).attr("data-cost", value);
    });

    this.salon.forEach(function (value, i) {
        i += 1;
        $("#salon-" + i).attr("data-cost", value);
    });

    this.him.forEach(function (value, i) {
        i += 1;
        $("#chim-salon-" + i).attr("data-cost", value);
    });

    this.engine.forEach(function (value, i) {
        i += 1;
        $("#engine-" + i).attr("data-cost", value);
    });

    this.coleso.forEach(function (value, i) {
        i += 1;
        $("#coleso-" + i).attr("data-cost", value);
    });

};

var Calcinit = function (param) {

    var calc_tabs = $(".tabs ul li");
    var calc_complex = $(".complex li ");
    var calc_base = $(".base li :checkbox");
    var calc_salon = $(".salon li :checkbox");
    var calc_chimSalon = $(".chim-salon li :checkbox");
    var calc_engine = $(".engine li :checkbox");
    var calc_coleso = $(".coleso li :checkbox");
    var calc_priceBefore = $(".price-before span ");
    var calc_priceAfter = $(".price-after span ");
    var calc_price = 0;
    this.param = param;


    //Обработка чекбоксов
    //Жмем
    $(":checkbox").on('change', function () {
        if ($(this).is(":checked")) {
            var selected = [];
            //если не нажат то добавляем стоимость
            price_change_add($(this).attr("data-cost"));
            Radio_check();
            console.log(selected);


        }
        else {
            //если нажат уменьшаем
            Radio_check();
            price_change_del($(this).attr("data-cost"));
        }
    });

    $(":radio").on('change', function () {
        switch ($(this).attr("id")) {
            case "complex-1":
                complex(complex_1_value);
                break;

            case "complex-2":
                complex(complex_2_value);

                break;

            case "complex-3":
                complex(complex_3_value);

                break;


        }
    });

    complex = function (e) {
        e.base.forEach(function (val) {
            $("#base-" + val).attr("checked", true);
        });
        e.salon.forEach(function (val) {
            $("#salon-" + val).attr("checked", true);
        });
        e.koleso.forEach(function (val) {
            $("#coleso-" + val).attr("checked", true);
        });


    };


    //Обработка чекбоксов Салон
    //calc_salon.on('change', function () {
    //    if ($(this).is(":checked")) {
    //        price_change_add($(this).attr("data-cost"));
    //    }
    //    else {
    //        price_change_del($(this).attr("data-cost"));
    //    }
    //});
    //
    ////Обработка чекбоксов Химчастка салона
    //calc_chimSalon.on('change', function () {
    //    if ($(this).is(":checked")) {
    //        price_change_add($(this).attr("data-cost"));
    //    }
    //    else {
    //        price_change_del($(this).attr("data-cost"));
    //    }
    //});
    //
    ////Обработка чекбоксов Двигатель
    //calc_engine.on('change', function () {
    //    if ($(this).is(":checked")) {
    //        price_change_add($(this).attr("data-cost"));
    //    }
    //    else {
    //        price_change_del($(this).attr("data-cost"));
    //    }
    //});
    //
    ////Обработка чекбоксов Колеса
    //calc_coleso.on('change', function () {
    //    if ($(this).is(":checked")) {
    //        price_change_add($(this).attr("data-cost"));
    //    }
    //    else {
    //        price_change_del($(this).attr("data-cost"));
    //    }
    //});

    // (+) к стоимости
    price_change_add = function (vals) {
        calc_price += parseInt(vals);
        calc_priceAfter.text(calc_price);

    };

    // (-) к стоимости
    price_change_del = function (vals) {
        calc_price -= parseInt(vals);
        calc_priceAfter.text(calc_price);

    };

    //console.log(param.tabs);


};


Calcinit.prototype.init = function (param) {
    this.param = param;
    switch (this.param) {
        case 1:
            var category_1 = new Category_value(
                [150, 200, 350, 100], [80, 50, 100, 100, 100, 100, 50, 50], [1200, 1100, 500, 500, 1000, 1000], [100, 350], [100, 30]);
            category_1.init();
            break;
        case 2:
            var category_2 = new Category_value(
                [170, 220, 400, 100], [100, 60, 100, 100, 110, 110, 50, 50], [1300, 1200, 600, 600, 1100, 1100], [100, 400], [100, 40]);
            category_2.init();
            break;
        case 3:
            var category_3 = new Category_value(
                [190, 240, 450, 110], [110, 70, 110, 100, 120, 120, 50, 50], [1500, 1500, 700, 700, 1500, 1400], [100, 450], [120, 40]);
            category_3.init();
            break;
        case 4:
            var category_4 = new Category_value(
                [210, 260, 500, 120], [120, 70, 110, 100, 130, 130, 50, 50], [1700, 1600, 800, 800, 1800, 1800], [100, 500], [130, 50]);
            category_4.init();
            break;
        case 5:
            var category_5 = new Category_value(
                [230, 280, 550, 130], [130, 70, 110, 100, 140, 140, 50, 50], [1800, 1700, 900, 900, 1900, 1900], [100, 500], [140, 60]);
            category_5.init();
            break;
    }
};
var complex_1_value = {base: [3], salon: [7, 4, 1, 3]};
var complex_2_value = {base: [3], salon: [7, 4, 1, 3, 6]};
var complex_3_value = {base: [3], salon: [7, 4, 1, 3, 6], koleso: [1]};
Radio_check = function () {
    if ($("#base-3").is(":checked") &&
        $("#salon-4").is(":checked") &&
        $("#salon-7").is(":checked") &&
        $("#salon-1").is(":checked") &&
        $("#salon-3").is(":checked") && !$("#salon-6").is(":checked") && !$("#coleso-1").is(":checked")
    ) {
        $("#complex-1:radio").attr("checked", true);
    }
    else if ($("#base-3").is(":checked") &&
        $("#salon-4").is(":checked") &&
        $("#salon-7").is(":checked") &&
        $("#salon-1").is(":checked") &&
        $("#salon-3").is(":checked") &&
        $("#salon-6").is(":checked") && !$("#coleso-1").is(":checked")
    ) {
        $("#complex-2:radio").attr("checked", true);
    }
    else if ($("#base-3").is(":checked") &&
        $("#salon-4").is(":checked") &&
        $("#salon-7").is(":checked") &&
        $("#salon-1").is(":checked") &&
        $("#salon-3").is(":checked") &&
        $("#salon-6").is(":checked") &&
        $("#coleso-1").is(":checked")
    ) {
        $("#complex-3:radio").attr("checked", true);

    }
    else {
        $(":radio").attr("checked", false);
    }

};



