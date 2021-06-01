const post = {
    title: 'Some Title',
    body: 'someBody',
    author: 'Mykhailo Kriuchek',
    views: 5,
    comment: {
        firstName: 'Mykhailo',
        secondName: 'Kriuchek',
        body: 'commentBody'
    },
    isLive: true,
    someFunction: () => {
        console.log('my function works')
    }
}


/**
 * 1.2 Отримайте довжину об'єкта post і напишіть скрипт, який повинен повернути список значень ключів об'єкта "post"
*/
// довжину об'єкта
let length = Object.keys(post).length;
console.log(length);


//  список значень ключів variant 1
for (let key in post) {
    console.log(post[key]);
}

//  список значень ключів variant 2
let keys = Object.values(post);
console.log(keys);


/**
 * 2. Напишіть функцію "helloColleagues", яка повинна приймати два параметри "company" і "team" і повинна повертати
 * стрінгу - "Я працюю в "company" компанії в чудовій команді " team "` . Використовуйте синтаксис темплейт стрінгів
 * для параметризації змінних всередині стрінги - ``
 */
function helloColleagues(company,team) {
    console.log(`Я працюю в ${company} компанії в чудовій команді ${team}`)
}

helloColleagues("nix","qa");

/**
 * 2.1) Напишіть функцію isEmpty (obj), яка повертає true, якщо об'єкт не має властивостей, інакше false.
 *
 *
 * Повинна працювати так:
 * let schedule = {};
 *
 * console.log( isEmpty(schedule) ); // true
 *
 * schedule["8:30"] = "get up";
 *
 * console.log( isEmpty(schedule) ); // false
 */

function isEmpty(obj){
  return Object.keys(obj).length == 0 ? true : false;
}

let schedule = {};
console.log( isEmpty(schedule) );

schedule["8:30"] = "get up";
console.log( isEmpty(schedule) );

/**
 * 2.2) Напишіть функцію, яка приймає два числа і повертає максимальне з двох переданих чисел. Потрібно обробити і від"ємні значення
 *
 * function maxNumber (a, b) {
 * // ваш код
 * }
 *
 * maxNumber (1, 2) // 2
 */

function maxNumber (a, b) {
    if (a>b){
        return a;
    } else return b;
 }

console.log(maxNumber (1, 2));
/**
 * 3) Є об’єкт в якому зберігається зарпати кількох колег:
 *
 * let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }
 *
 * Напишіть функцію, яка підсумує всі зарплати і повертає це значення. У прикладі вище результат має бути 1000.
 *
 */

let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }

function  costs(obj){
    let total = 0;

    for (let property in obj) {
        total += obj[property];
    }
    return total;
}

console.log(costs(salaries));
/**
 * 3.1) Є об’єкт в якому зберігається зарпати кількох колег:
 *
 * let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 }
 * Напишіть функцію, яка повертає ім’я та значення працівника, який отримує найбільшу зарплату.
 *
 */
let salaries = { Mykola: 250, Pavlo: 250, Petro: 500 };
function maxSalary(obj){

    var allvalues = Object.keys(obj).map(function(key){return obj[key];});
    return allvalues;
}

console.log(maxSalary(salaries));

/**
 * 3.2) Створіть функцію multiplyNumeric (obj), яка помножує всі числові властивості об"єкта на 2
 *
 * Наприклад:
 * let menu = { width: 200, height: 300, title: "My menu" };
 *
 * multiplyNumeric(menu);
 * // після виклику функції  multiplyNumeric - menu = { width: 400, height: 600, title: "My menu" }; Майте на увазі
 * multiplyNumeric не повинна повертати нічого. Вона повинна модифікувати об"єкт на місці
 * P.S. Використовуйте typeof метод для перевірки типу значень.
 */

let menu = { width: 200, height: 300, title: "My menu" };
function  multiplyNumeric(obj){
    for (let property in obj) {
        let as = typeof obj[property];
        if (as == "number"){
            obj[property] *= 2;
        }
     }
}

multiplyNumeric(menu);
console.log(menu);

