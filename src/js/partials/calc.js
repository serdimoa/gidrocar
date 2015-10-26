/**
 * Created by HOME on 29.09.2015.
 */

var calc_price = 0;
var calc_priceBefore = $(".price-before span ");
var calc_priceAfter = $(".price-after span ");
/**
 * Оюъект цен
  */

var Category_value = function (base, salon, him, engine, coleso, discount) {

    this.base = base;
    this.salon = salon;
    this.him = him;
    this.engine = engine;
    this.coleso = coleso;
    this.discount = discount


};

/**
 * Функция добавления value
 */

Category_value.prototype.init = function () {
    this.base.forEach(function (value, i) {
        i += 1;
        $("#base-" + i+" input").val(value);
        $("#base-" + i+" span").html(value + '<i class="fa fa-rub"></i>');
    });

    this.salon.forEach(function (value, i) {
        i += 1;
        $("#salon-" + i+" input").val(value);
        $("#salon-" + i+" span").html(value + '<i class="fa fa-rub"></i>');
    });

    this.him.forEach(function (value, i) {
        i += 1;
        $("#chim-salon-" + i+" input").val(value);
        $("#chim-salon-" + i+" span").html(value + '<i class="fa fa-rub"></i>');

    });

    this.engine.forEach(function (value, i) {
        i += 1;
        $("#engine-" + i+" input").val(value);
        $("#engine-" + i+" span").html(value + '<i class="fa fa-rub"></i>');

    });

    this.coleso.forEach(function (value, i) {
        i += 1;
        $("#coleso-" + i+" input").val(value);
        $("#coleso-" + i+" span").html(value + '<i class="fa fa-rub"></i>');

    });

    this.discount.forEach(function (value, i) {
        i += 1;
        $("#complex-" + i).val(value);
    });
    if ($(":radio:checked")) {
        price_change($(":radio:checked").val());

    }
    else {

        price_change();
    }
};

/**
 *  Класс калькулятора
 * @param param
 * @constructor
 */

var Calcinit = function () {


    //Обработка чекбоксов
    //Жмем
    $(":checkbox").on('change', function () {
        if ($(this).prop("checked")) {
            var selected = [];
            //если не нажат то добавляем стоимость
            if ($(":radio:checked")) {
                price_change($(":radio:checked").val());

            }
            else {

                price_change();
            }
            $(this).prop("checked", true);

            Radio_check();
            console.log(Radio_check());


        }
        else {
            //если нажат уменьшаем
            Radio_check();
            $(this).prop("checked", false);
            if ($(":radio:checked")) {
                price_change($(":radio:checked").val());

            }
            else {

                price_change();
            }
        }
    });
    /**
     * Обработка радиобатонов
     */
    $(":radio").on('change', function () {
        switch ($(this).attr("id")) {
            case "complex-1":
                complex(complex_1_value);
                $("#salon-6 input").prop("checked", false);
                $("#coleso-1 input").prop("checked", false);
                price_change($(this).val());
                break;

            case "complex-2":
                complex(complex_2_value);
                price_change($(this).val());
                $("#coleso-1").prop("checked", false);

                break;

            case "complex-3":
                complex(complex_3_value);
                price_change($(this).val());
                break;


        }
    });
    /**
     * Обработка при нажатии комлекса
     * @param e
     */
    function complex(e) {
        $("#base-3 input,#salon-4 input,#salon-7 input,#salon-1 input,#salon-3 input,#salon-6 input,#coleso-1 input").prop("checked", false);

        e.base.forEach(function (val) {
            $("#base-" + val+" input").prop("checked", true);
        });
        e.salon.forEach(function (val) {
            $("#salon-" + val +" input").prop("checked", true);
        });
        if (e.koleso) {
            e.koleso.forEach(function (val) {
                $("#coleso-" + val+" input").prop("checked", true);
            });

        }



    }





};

/**
 * Функция очистки
 */
Calcinit.prototype.clean = function () {

        $(":checkbox").prop('checked', false);
        $(":radio").prop('checked', false);
    price_change();

};
/**
 * Функция инициализации значений по категориям
 * @param param
 *
 */
Calcinit.prototype.init = function (param) {
    this.param = param;
    switch (this.param) {
        case 1:
            var category_1 = new Category_value(
                [150, 200, 350, 100], [80, 50, 100, 100, 100, 100, 50, 50], [1200, 1100, 500, 500, 1000, 1000], [100, 350], [100, 30], [130,130, 130]);
            category_1.init();
            break;
        case 2:
            var category_2 = new Category_value(
                [170, 220, 400, 100], [100, 60, 100, 100, 110, 110, 50, 50], [1300, 1200, 600, 600, 1100, 1100], [100, 400], [100, 40], [160, 160, 160]);
            category_2.init();
            break;
        case 3:
            var category_3 = new Category_value(
                [190, 240, 450, 110], [110, 70, 110, 100, 120, 120, 50, 50], [1500, 1500, 700, 700, 1500, 1400], [100, 450], [120, 40], [190, 190, 190]);
            category_3.init();
            break;
        case 4:
            var category_4 = new Category_value(
                [210, 260, 500, 120], [180, 70, 140, 100, 140, 130, 50, 50], [1700, 1600, 800, 800, 1800, 1800], [100, 500], [130, 50], [140, 170, 200]);
            category_4.init();
            break;
        case 5:
            var category_5 = new Category_value(
                [230, 280, 550, 130], [200, 80, 150, 100, 140, 150, 50, 50], [1800, 1700, 900, 900, 1900, 1900], [100, 800], [140, 60], [180, 210, 220]);
            category_5.init();
            break;
    }
};

/**
 * 1 комплекс, указывает на id чекбокса который нужно нажать
 * @type {{base: number[], salon: number[]}}
 */
var complex_1_value = {base: [3], salon: [7, 2,4, 1, 3]};

/**
 * 2 комплекс, указывает на id чекбокса который нужно нажать
 * @type {{base: number[], salon: number[]}}
 */
var complex_2_value = {base: [3], salon: [7, 2,4, 1, 3, 6]};

/**
 * 3 комплекс, указывает на id чекбокса который нужно нажать
 * @type {{base: number[], salon: number[], koleso: number[]}}
 */
var complex_3_value = {base: [3], salon: [7, 2,4, 1, 3, 6], koleso: [1]};

/**
 * Проверка чекбоксов для включения скидок
 * @constructor
 */
function Radio_check() {
    if ($("#base-3 input").prop("checked") &&
        $("#salon-4 input").prop("checked") &&
        $("#salon-7 input").prop("checked") &&
        $("#salon-1 input").prop("checked") &&
        $("#salon-3 input").prop("checked") && !$("#salon-6 input").prop("checked") && !$("#coleso-1 input").prop("checked")
    ) {
        $("#complex-1 ").prop("checked", true);
        price_change($("#complex-1").val());
    }
    else if ($("#base-3 input").prop("checked") &&
        $("#salon-4 input").prop("checked") &&
        $("#salon-7 input").prop("checked") &&
        $("#salon-1 input").prop("checked") &&
        $("#salon-3 input").prop("checked") &&
        $("#salon-6 input").prop("checked") && !$("#coleso-1 input").prop("checked")
    ) {
        $("#complex-2 ").prop("checked", true);
        price_change($("#complex-2").val());
    }
    else if ($("#base-3 input").prop("checked") &&
        $("#salon-4 input").prop("checked") &&
        $("#salon-7 input").prop("checked") &&
        $("#salon-1 input").prop("checked") &&
        $("#salon-3 input").prop("checked") &&
        $("#salon-6 input").prop("checked") &&
        $("#coleso-1 input").prop("checked")
    ) {

        $("#complex-3 ").prop("checked", true);
        price_change($("#complex-3 ").val());

    }
    else {
        $(":radio").prop("checked", false);
        if ($(":radio:checked")) {
            price_change($(":radio:checked").val());

        }
        else {

            price_change();
        }
    }

}
/**
 * Проверкаизменения цен, и включения скидочного блока
 * @param vals
 */
function price_change (vals) {
    calc_price = 0;
    var discount = vals;
    $(":checkbox").each(function (e) {
        if ($(this).prop("checked")) {
            calc_price += parseInt($(this).val());

        }
    });
    if (discount) {
        $(".price-before").show();
        console.log(calc_price);
        calc_priceAfter.text(calc_price - discount);
        calc_priceBefore.text(calc_price);
    } else {
        console.log(calc_price);

        $(".price-before").hide();
        calc_priceAfter.text(calc_price);

    }

}




