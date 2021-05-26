/**
 * 1. Напишіть умову,  в якій потрібно перевірити, що змінна "age" становить від 18 до 90 включно за допомогою тернарного
 * оператора ? Включно означає, що значення змінної "age" може становити 18 або 90 років.
 * Наприклад:
 * let age = "19"
 * Тут буде ваша умова
 * const ternarCondition = ....
 */
let age = 91;
const ternarCondition = age >= 18 && age <= 90 ? 'in the range' : 'out the range';

console.log(ternarCondition);

/**
 * 2. Напишіть скрипт, який буде:
 * - приймати ім'я користувача (потрібно викликати метод promt() в консолі браузера)
 * - вітати користувача з іменем, який ввели в попередньому кроці (потрібно викликати метод alert() в консолі браузера)
 * - запитувати його рік народження (promt() )
 * - рахувати, скільки років користувачеві та виводити його вік
 * Приклад: -> Будь ласка, введіть своє ім'я <- Микола -> Привіт, Микола, приємно познайомитися. -> Будь ласка, введіть
 * рік народження <- 1993 -> Вам 27 років
 * ВАЖЛИВО: Дане завдання потрібно виконувати в консолі браузера!
 */
let name = window.prompt("Будь ласка, введіть своє ім'я");
window.alert(`Привіт, ${name}, приємно познайомитися.`)
let age = window.prompt("Будь ласка, введіть рік народження");
let date = new Date();
let userAge = date.getFullYear() - age;
window.alert(`Вам ${userAge} років`)

/**
 * 3. Напишіть скрипт, який перетворить число у відповідну літеру, і надрукує (виведе) результат:
 * Числа слід обчислювати наступним чином: Діапазон оцінки <60 F <70 D <80 C <90 B <100 A
 *
 * Приклад: для номера 92 - повинно надрукувати "A" для номера 29 - повинно надрукувати "F" і тд...
 */
let namber = 0;

if (namber <100 && namber >= 90) {
    console.log('A');
} else if (namber <90 && namber >= 80) {
    console.log('B');
}  else if (namber <80 && namber >= 70) {
    console.log('C');
} else if (namber <70 && namber >= 60) {
    console.log('D');
} else if (namber <60 && namber > 0) {
    console.log('F');
}else {
    console.log('Пожалуйста, укажите число от 1 до 99');
}

/**
 * 4. Використовуючи конструкцію switch/case, залогуйте  значення для змінної "language":
 * chinese or mandarin > 'MOST number of native speakers!'
 * spanish > '2nd place in number of native speakers'
 * english > '3rd place'
 * hindi > 'Number 4'
 * arabic > '5th most spoken language'
 * for all other simply log 'Great language too :D'
 */
let language = ' ';
switch (language){
    case 'chinese':
    case 'mandarin':
        console.log('MOST number of native speakers!');
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'english':
        console.log('3rd place');
        break;
    case 'hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log('Great language too :D');
}

