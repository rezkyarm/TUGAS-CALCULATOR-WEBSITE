"use srtict";

document.addEventListener('DOMContentLoaded', (event)=> {

let screenHolder = document.getElementById('screen');
let screen = '0';
screenHolder.innerHTML = screen;

let btn_operator_clear = document.getElementById("btn_operator_clear");
btn_operator_clear.addEventListener("click", function(event) {
screen = '';
screenHolder.innerHTML = screen;
});

let btn_operator_minus = document.getElementById("btn_operator_minus");
btn_operator_minus.addEventListener("click", function(event) {
    screen = screen * -1;
    screenHolder.innerHTML = screen;
});

let btn_operator_persen = document.getElementById("btn_operator_persen");
btn_operator_persen.addEventListener("click", function(event) {
    screen = screen / 100;
    screenHolder.innerHTML = screen;
});
 
let btn_operator_bagi = document.getElementById("btn_operator_bagi");
btn_operator_bagi.addEventListener("click", function(event) {
    screen = screen + '/';
    screenHolder.innerHTML = screen;
});

let btn_operator_kali = document.getElementById("btn_operator_kali");
btn_operator_kali.addEventListener("click", function(event) {
    screen = screen + '*';
    screenHolder.innerHTML = screen;
});

let btn_operator_kurang = document.getElementById("btn_operator_kurang");
btn_operator_kurang.addEventListener("click", function(event) {
    screen = screen + '-';
    screenHolder.innerHTML = screen;
});

let btn_operator_tambah = document.getElementById("btn_operator_tambah");
btn_operator_tambah.addEventListener("click", function(event) {
    screen = screen + '+';
    screenHolder.innerHTML = screen;
});

let btn_operand_koma = document.getElementById("btn_operand_koma");
btn_operand_komah.addEventListener("click", function(event) {
    screen = screen + ',';
    screenHolder.innerHTML = screen;
});

let btn_operand_0 = document.getElementById("btn_operand_0");
btn_operand_0.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = screen + '.0';
    } else {
        screen = screen + '0';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_1 = document.getElementById("btn_operand_1");
btn_operand_1.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '1';
    } else {
        screen = screen + '1';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_2 = document.getElementById("btn_operand_2");
btn_operand_2.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '2';
    } else {
        screen = screen + '2';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_3 = document.getElementById("btn_operand_3");
btn_operand_3.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '3';
    } else {
        screen = screen + '3';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_4 = document.getElementById("btn_operand_4");
btn_operand_4.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '4';
    } else {
        screen = screen + '4';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_5 = document.getElementById("btn_operand_5");
btn_operand_5.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '5';
    } else {
        screen = screen + '5';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_6 = document.getElementById("btn_operand_6");
btn_operand_6.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '6';
    } else {
        screen = screen + '6';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_7 = document.getElementById("btn_operand_7");
btn_operand_7.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '7';
    } else {
        screen = screen + '7';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_8 = document.getElementById("btn_operand_8");
btn_operand_8.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '8';
    } else {
        screen = screen + '8';
    }
    screenHolder.innerHTML = screen;
});

let btn_operand_9 = document.getElementById("btn_operand_9");
btn_operand_9.addEventListener("click", function(event) {
    if (screen == '0') {
        screen = '9';
    } else {
        screen = screen + '9';
    }
    screenHolder.innerHTML = screen;
});

})