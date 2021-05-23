/**
 * Ex. 1 - Необхідно поміняти місцями вивід значень змінних "cat" та "dog"
 * let cat = 'cat';
 * let dog = 'dog';
 */
let cat = 'cat';
const mediate = cat;
let dog = 'dog';

cat = dog;
dog = mediate;

console.log(cat); // Після виклику цієї змінної значення повинно бути 'dog'
console.log(dog); // Після виклику цієї змінної значення повинно бути 'cat'

/**
 * Ex.2 - Values and variables
 * 1. Оголосіть змінну з назвою 'company', 'position' та запишіть туди значення відповідно до компанії та позиції на
 * якій працюєте
 * 2. Залогуйте значення цих змінних в консоль використовуючи функцію console.log()
 */
const company = 'MacPaw';
const position = 'QA';

console.log(company,position);

/**
 * Ex.3 - Data Types
 * 1. Оголосіть змінну з назвою 'isProductCompany' та запишіть туди значення відповідно до компанії в якій працюєте.
 * Значення повинно бути типу boolean. Також оголосіть змінну
 * 'projectName', але поки не записуйте туди ніякого значення.
 * 2. Залогуйте тип змінних 'isProductCompany', 'company' та 'position' в консоль
 */
const isProductCompany = true;
let projectName;

console.log('isProductCompany:', typeof(isProductCompany));
console.log('company:', typeof(company));
console.log('position:', typeof(position));

/**
 * Ex.4 - let, const and var
 * 1. Запишіть значення в 'projectName'  відповідно до назви проекту над яким працюєте
 * 2. Подумайте, які із створених раніше змінних варто оголосити через  "const"  (які значення можуть змінитись а які ні?).
 * Потім змініть ці змінні використовуючи "const".
 */
projectName = 'Setapp';
