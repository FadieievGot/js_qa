/**
 * Завдання 1
 * Напишіть функцію, яка повинна повертати суму всіх чисел усередині масиву. Функція повинна враховувати позитивні та від'ємні значення
 */

// Приклад масиву
const numbers = [1, -1, 2, 3];

function sum(obj) {
    return obj.reduce(function(sum, current) {
        return sum + current;
    }, 0);
}

// Виклик функції
console.log(sum(numbers)); // повинно вивести 5

/**
 * Завдання 2
 * Коли ви запускаєте функцію arrayFromRange, функція повинна виводити числа від мінімального до максимального значення в форматі масиву
 * Також ця функція повинна приймати від'ємні числа
 */
function arrayFromRange(min, max) {
    let length = max-min;
    let arr = new Array();
    for (let i=0; i<length; i++) {
        let a = min++;
        arr.push(a);
    }
    arr.push(max);
    return arr;
}

const numbers = arrayFromRange(1, 4); // мінімальне та максимальне значення

console.log(numbers); // повинно повернути [1, 2, 3, 4]

const negativeNumbers = arrayFromRange(-10, -8);
console.log(negativeNumbers); // повинно повернути [-10, -9, -8]

/**
 * Завдання 3
 * Потрібно створити функцію, яка повертатиме максимальне число з масиву
 */
const numbers = [1, 2, 3, 4, 5];

function getMax(someArray) {
    let maxNamb = 0;
    for (let numb of someArray){
        if (numb > maxNamb){
            maxNamb = numb;
        }
    }
    return maxNamb;
}

const maxNumber = getMax(numbers);

console.log(maxNumber) // має відображати максимальне число з масиву - 5
/**
 * Завдання 4
 *
 * Завдання складається з 3 частин
 * 1. На основі масиву movies потрібно повернути усі фільми, які були випущені в 2021 році з рейтингом більше 4
 * 2. Потім відсортуйте відфільтровані раніше фільми за рейтингом у порядку спадання
 * 3. В кінці поверніть тільки назви відсортованих фільмів по тайтлу в форматі масиву. Результат скрипта має бути ось
 * таким - ["a", "c"]
 */


let movies = [
    {title: 'a', year: 2021, rating: 4.7},
    {title: 'b', year: 2020, rating: 4.4},
    {title: 'c', year: 2021, rating: 4.3},
    {title: 'd', year: 2021, rating: 3.9},
]


function newGoodMovies (arr){
    // 1
    let newGoodMovies = arr.filter(function (item){
        return item.year == 2021 && item.rating >4.0;
    });
    // 2
    newGoodMovies.sort(function (a,b){
        return b.rating - a.rating;
    });
    // 3
    let moviesTitle = newGoodMovies.map(function(item, index, array) {
        return item.title;
    });

    return moviesTitle;
}
console.log(newGoodMovies(movies));


