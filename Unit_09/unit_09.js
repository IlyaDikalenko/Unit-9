//  Task 1
// По нажатию на кнопку .b-1 функция присваивает блоку .out-1 ширину 200px, высоту 90px.


function f1() {
const out1 = document.querySelector('.out-1');
out1.style.width = '200px';
out1.style.height = '90px'
}

document.querySelector('.b-1').onclick = f1;

//  Task 2
// По нажатию на кнопку .b-2 функция f2, которая присваивает блоку .out-2 класс .bg-orange.

function f2() {
const out2 = document.querySelector('.out-2');
out2.classList.add('bg-orange')  
}

document.querySelector('.b-2').onclick = f2;


//  Task 3
// По нажатию кнопки .b-3 запускайте функцию f3, которая удаляет у блока .out-3 класс .bg-orange.

function f3() {
const out3 = document.querySelector('.out-3');
out3.classList.remove('bg-orange')  
}

document.querySelector('.b-3').onclick = f3;

//  Task 4
// По нажатию кнопки .b-4 запускайте функцию f4, которая делает toggle класса .bg-orange для блока out-4.


function f4() {
const out4 = document.querySelector('.out-4');
out4.classList.toggle('bg-orange')  
}

document.querySelector('.b-4').onclick = f4;


//  Task 5
// По нажатию .b-5 запускайте функцию f5, которая проверяет наличие класса .bg-orange у блока .out-4 (да, именно у out-4 ). Результат - true или false, выводите в .out-5.

function f5() {
let out4 = document.querySelector('.out-4');
let out5 = document.querySelector('.out-5');

if(out4.classList.contains('bg-orange')) {
    out5.innerHTML = 'true'
}
else {
    out5.innerHTML = 'false'
}
}

document.querySelector('.b-5').onclick = f5;


//  Task 6
// По нажатию .b-6 запускайте функцию f6, которая выводит в .out-6 количество параграфов с классом .p-6.

function f6() {
let p = document.querySelectorAll('.p-6');
let out6 = document.querySelector('.out-6');
out6.innerHTML = p.length
}

document.querySelector('.b-6').onclick = f6;


//  Task 7
// По нажатию кнопки .b-7 запускайте функцию f7, которая присваивает блокам .out-7 класс .bg-orange. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks7 = document.querySelectorAll('.out-7');

function f7() {
let blocks7 = document.querySelectorAll('.out-7');
for ( let i = 0; i < blocks7.length; i++) {
    blocks7[i].classList.add('bg-orange');
}
    //внутри цикла blocks7[i].classList....
}

document.querySelector('.b-7').onclick = f7;


//  Task 8
// По нажатию кнопки .b-8 запускайте функцию f8, которая делает toggle блокам .out-8 класс .bg-orange. Обратите внимание, что данных блоков больше одного, следовательно нужен цикл.

let blocks8 = document.querySelectorAll('.out-8');

function f8() {
let blocks8 = document.querySelectorAll('.out-8');
for (let i = 0; i < blocks8.length; i++){
    blocks8[i].classList.toggle('bg-orange')
}
    //внутри цикла blocks8[i].classList....
}

document.querySelector('.b-8').onclick = f8;


//  Task 9
// Усложним предыдущие задачи. С помощью цикла повесим на блоки .out-9 событие клик. По клику должна выполняться функция f9. Функция, должна добавлять класс .bg-orange тому .out-9 на котором кликнули.

function f9() {
    this.classList.add('bg-orange');
    //this.classList...  // все решается одной строкой
}

let div9 = document.querySelectorAll('.out-9');

for (let i = 0; i < div9.length; i++) {
    div9[i].onclick = f9;
}


//  Task 10
// Усложним предыдущие задачи. С помощью цикла повим на блоки .out-10 событие клик. По клику должна выполняться функция f10. Функция, должна делать toggle класса .bg-orange тому .out-10 на котором кликнули.

//let div10 = тут получите все out-10
let div10 = document.querySelectorAll('.out-10');

function f10() {
    this.classList.toggle('bg-orange');

}

for (let i = 0; i < div10.length; i++) {
    div10[i].onclick = f10;
}
// а тут цикл, похожий на предыдущее задание



//  Task 11
// Кнопка .b-11, запускает функцию f11. Функция создает через createElement div c текстом 25 и добавляет его через append в .out-11.


function f11() {
let t11 = document.createElement('div');
t11.innerHTML = '25'
document.querySelector('.out-11').append(t11);
}

document.querySelector('.b-11').onclick = f11;

//  Task 12
// Добавьте кнопку .b-12, которая запускает функцию f12. Функция создает через createElement div c текстом 12 и добавляет ему класс bg-12. Созданный div добавляется в out-12.


function f12() {
let t12 = document.createElement('div');
t12.innerHTML = '12'
t12.classList.add('bg-12') // я думаю тут опечатка и походу надо добавить класс bg-orange, но оставлю как есть в условии, может я не прав
document.querySelector('.out-12').append(t12)
}

document.querySelector('.b-12').onclick = f12;

//  Task 13
// Кнопка .b-13, запускает функцию f13. Функция создает через createElement div c текстом pushMe и добавляет ему класс bg-orange. Также, созданному div добавляется событие onclick, по которому выполняется функция f13_1. Созданный div добавляется в .out-13.

function f13() {
let t13 = document.createElement('div');
t13.innerHTML = 'pushMe'
t13.classList.add('bg-orange')
t13.onclick = f13_1;
document.querySelector('.out-13').append(t13)
}

function f13_1() {
    document.querySelector('.out-13-1').innerHTML += this.innerHTML;
}


document.querySelector('.b-13').onclick = f13;

//  Task 14
// Кнопка .b-14, запускает функцию f14. Функция создает через createElement div c текстом 14 и добавляет ему класс .bg-orange. Созданный div добавляется в .out-14 с помощью append.


function f14() {
let t14 = document.createElement('div');
t14.innerHTML = '14'
t14.classList.add('bg-orange')
document.querySelector('.out-14').append(t14)
}

document.querySelector('.b-14').onclick = f14;

//  Task 15
// Кнопкa .b-15, которая запускает функцию f15. Функция создает через createElement div c текстом 15 и добавляет ему класс .bg-orange. Созданный div добавляется перед .out-15 с помощью before.

function f15() {
let t15 = document.createElement('div');
t15.innerHTML = '15'
t15.classList.add('bg-orange')
document.querySelector('.out-15').before(t15)
}

document.querySelector('.b-15').onclick = f15;

//  Task 16
// Кнопкa .b-16, которая запускает функцию f16. Функция создает через createElement div c текстом 16 и добавляет ему класс .bg-orange. Созданный div добавляется после .out-16 с помощью after.

function f16() {
let t16 = document.createElement('div');
t16.innerHTML = '16'
t16.classList.add('bg-orange')
document.querySelector('.out-16').after(t16)
}

document.querySelector('.b-16').onclick = f16;

//  Task 17
// Кнопкa .b-17, которая запускает функцию f17. Функция создает через createElement div c текстом 17 и добавляет ему класс .bg-orange. Созданный div заменяет .out-17 с помощью replaceWith.

function f17() {
let t17 = document.createElement('div');
t17.innerHTML = '17'
t17.classList.add('bg-orange')
document.querySelector('.out-17').replaceWith(t17)
}

document.querySelector('.b-17').onclick = f17;

//  Task 18
// Кнопкa .b-18, которая запускает функцию f18. Функция с помощью getAttribute получает data-b атрибут с параграф .p-18 и выводит в .out-18.

function f18() {
let p = document.querySelector('.p-18');
let value = p.getAttribute('data-b')
document.querySelector('.out-18').textContent = value
}

document.querySelector('.b-18').onclick = f18;

//  Task 19
// Кнопкa .b-19, которая запускает функцию f19. Функция с помощью getAttribute получает data-b атрибут с параграфов p-19 и выводит в .out-19 через пробел. Обратите внимание, что элементов .p-19 больше одного.

function f19() {

}

document.querySelector('.b-19').onclick = f19;

//  Task 20
// Кнопкa .b-20, которая запускает функцию f20. Функция с помощью setAttribute присваивает атрибут title="go" в div.out-20. Обращаю ваше внимание - увидеть атрибут можно только в с помощью инструментов веб разработчика.

function f20() {
    
}

document.querySelector('.b-20').onclick = f20;