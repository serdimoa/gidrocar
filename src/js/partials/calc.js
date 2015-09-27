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


    var category_1 = new Category_value(
        [150, 200, 350, 100], [80, 50, 100, 100, 100, 100, 50, 50], [1200, 1100, 500, 500, 1000, 1000], [100, 350], [100, 30]);
    var category_2 = new Category_value(
        [170, 220, 400, 100], [100, 60, 100, 100, 110, 110, 50, 50], [1300, 1200, 600, 600, 1100, 1100], [100, 400], [100, 40]);
    var category_3 = new Category_value(
        [190, 240, 450, 110], [110, 70, 110, 100, 120, 120, 50, 50], [1500, 1500, 700, 700, 1500, 1400], [100, 450], [120, 40]);

    var category_4 = new Category_value(
        [210, 260, 500, 120], [120, 70, 110, 100, 130, 130, 50, 50], [1700, 1600, 800, 800, 1800, 1800], [100, 500], [130, 50]);

    var category_5 = new Category_value(
        [230, 280, 550, 130], [130, 70, 110, 100, 140, 140, 50, 50], [1800, 1700, 900, 900, 1900, 1900],[100,500],[140,60]);
    category_1.init();

    var complex_1_value = {base: [], salon: []};
    //Обработка чекбоксов
    //Жмем
    $(":checkbox").on('change', function () {
        if ($(this).is(":checked")) {
            //если не нажат то добавляем стоимость
            price_change_add($(this).attr("data-cost"));
        }
        else {
            //если нажат уменьшаем
            price_change_del($(this).attr("data-cost"));
        }
    });

    $(":radio").on('change', function () {
        switch ($(this).attr("id")) {
            case "complex-1":
                complex_1({base: [1, 3]});
                break;

            case "complex-2":
                complex_2();

                break;

            case "complex-3":
                complex_3();

                break;


        }
    });

    complex_1 = function (e) {
        e.base.forEach(function (val) {
            $("#base-" + val).attr("checked", true);
        });


    };

    complex_2 = function (e) {

    };

    complex_3 = function (e) {

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





