///Задания с урока///

// Задание 1
/* var browser;
if (browser === 'Edge') {
    alert("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    alert('Okay we support these browsers too');
} else {
    alert('We hope that this page looks ok!');
}
 */


// Задание 2
/* var login = prompt('Введите Ваш логин');
if (login === 'Админ') {
    var pass = prompt('Введите Ваш пароль');
    if (pass === 'Я главный') {
        alert('Здравствуйте');
    } else if (pass === '' || pass === null) {
        alert('Отменено');
    } else {
        alert('Неверный пароль');
    }
} else if (login === '' || login === null) {
    alert('Отменено');
} else {
    alert('Я вас не знаю');
}
 */


// Задание 3
/* var str = '#'
var q = Number(prompt('Сколько ступенек?'));
for(var i=0;i<q;i++){
    console.log(str);
    str = str + '#';
} */



///ДЗ///
/* Задача 1.
Создайте переменные, затем сложите их и выведите результат в консоль разработчика.
var x = 20;
var y = 58;
var z = 42;
console.log( x + y + z ); 
 */




/*  Задача 2.
Создайте переменные:
- количество секунд в минуте
- количество минут в часу
- количество часов в сутках
- количество суток в году
Посчитайте ваш возраст в секундах и поместите результат в
переменную myAgeInSeconds  

var secondsInMinute = 60;
var minutesInHour = 60;
var hoursInDay = 24;
var daysInYear = 365;
var myAgeInSeconds = 23 * daysInYear * hoursInDay * minutesInHour * secondsInMinute ;
console.log(myAgeInSeconds)  */




/* Задача 3.
Создайте две переменные. Переменную count превратите в
строку, а userName наоборот в число. Попробуйте реализовать задачу двумя
разными способами. 

var count = 42;
var userName = '42';
console.log(String(count));
console.log(count + '');
console.log(Number(userName));
console.log(+userName);
 */




/* Задача 4.
Имеется три переменные:
Сложите переменные так, чтобы в результате получилось выражение: 12 белых
медведей и результат выведите в консоль. 

var a = 1
var b = 2
var c = 'белых медведей'
console.log(String(a) + String(b) + ' ' + c)
 */




/* Задача 5.
Создать 3 переменные разных типов и вывести в консоль для каждой из них
строку следующего вида:
`Variable: %variable name% have type: %type variable%` 

var a =  12;
var b = 'hello';
var c = true;
console.log(`Variable:a have type: ${typeof(a)}`);
console.log(`Variable:b have type: ${typeof(b)}`);
console.log(`Variable:c have type: ${typeof(c)}`);  */




/*  Задача 6.
Запросить у пользователя имя и возраст и вывести их в консоль. 

var userName = prompt('Введите ваше имя');
var age = prompt('Введите ваш возраст');
console.log(`Ваше имя: ${userName}. Ваш возраст: ${age}`) */




/* Задача 7.
Поменяйте значение переменных местами не создавая дополнительной
переменной: 

var a = 4;
var b = 3;
a = a + b;
b = a - b;
a = a - b;
console.log(a);
console.log(b); */




/* Задача 8.
Создайте переменные и присвойте им значения:
'true'
false
17
undefined
null
Затем с помощью оператора typeof выведите в консоль все типы созданных значений
переменных.

 var str = 'true';
 var bool = false;
 var num = 17;
 var und = undefined;
 var zero = null;
 console.log(typeof(str));
 console.log(typeof(bool));
 console.log(typeof(num));
 console.log(typeof(und));
 console.log(typeof(zero)); */




/*  Задача 9.
Даны две переменные:
var height = 15
var width = 20
С помощью условий выведите в консоль разработчика наибольшее число. 

var height = 15;
var width = 20;
if (width > height){
    console.log(width);
} else {
    console.log(height);
}
 */




/* Задача 10.
Написать перебор от 1 до 20, где выведутся все числа кратные трём.
Для вычисления кратности обратите внимание на оператор % . 

for(i = 1; i <= 20; i++){
    if (i % 3 === 0){
        console.log(i);
    }
} */




/*  Задача 11.
Нам надо идти на работу, но нужно проверить все ли мы взяли или нет? Нам точно нужны
ключи документы и ручка, но из еды нам надо яблоко или апельсин. Для решения этой задачи
нам помогут логические операторы || && .
var key = true
var documents = true
var pen = true
var apple = false
var orange = true
Ответ поместите в переменную shouldGoToWork 

var key = true;
var documents = true;
var pen = true;
var apple = false;
var orange = true;
var things = key && documents && pen;
var food = apple || orange;
var shouldGoToWork = things = food;
console.log(shouldGoToWork); */




/*  Задача 12.
Запросить у пользователя число:
1. Если число делится без остатка на 5 выводим сообщение Fiz
2. Если число делится без остатка на 3 выводим сообшение Buz
3. Если число делится без остатка и на 3 и на 5 выводим сообшение FizBuz 

var number = prompt('Введиет число');
if (number % 5 === 0) {
    alert('Fiz');
} else if (number % 3 === 0) {
    alert('Buz');
} else if (number % 3 === 0 && number % 5 === 0) {
    alert('FizBuz');
} */



/*  Задача 13.
Написать программу, которая выполняет следующие операции:
Запрашивает у пользователя возраст, если он больше 18, то выводит сообщение - Попей
пивка.
Если меньше, то выводит сообщение - Пей колу.
Добавить условие, что если возраст от 16 - 18, выводим сообщение - Можешь выкурить
сигаретку, только маме не говори. 
var age = prompt('Введите ваш возраст')
if (age > 18) {
    alert('Попей пивка')
} else if (age >= 16 && age <= 18) {
    alert('Можешь выкурить сигаретку, только маме не говори')
}
else {
    alert('Пей колу');
} */




/* Задача 14.
Напишем программу для туристического терминала. Запросите у пользователя в какую
сторону света он бы хотел отправиться. После ввода данных мы должны вывести в консоль
сообщение из списка. Если пользователь ввел неверные данные, выведите сообщение в
консоль чтобы он попробовал еще раз.
юг на юг пойдешь счастье найдешь
север на север пойдешь много денег найдешь
запад на запад пойдешь верного друга найдешь
восток на восток пойдешь разработчиком станешь
Используйте конструкцию switch . 
var side = prompt('В какую сторону света вы хотели бы отправиться?');
switch (side) {
    case 'юг':
        alert('на юг пойдешь счастье найдешь');
        break;
    case 'север':
        alert('на север пойдешь много денег найдешь');
        break;
    case 'запад':
        alert('на запад пойдешь верного друга найдешь');
        break;
    case 'восток':
        alert('на восток пойдешь разработчиком станешь');
        break;
    default: alert('Попробуйте еще раз')
} */