// let mas = [1, true, "asdsad", undefined, function mas() {console.log('fad')},[{name: "Karl", age: 5, happy: true}, { }] ];
//
//
// console.log(mas[0]);
// console.log(mas[mas.length - 1]);
//
//
//  console.log(mas[4]());
//  console.log(mas[5][0].name);
//

// const obj = {name: 'Mykola', age: 27};
//
// const {name, age} = obj;
//
// const name1 = name;
// console.log(name1, age);

let user = {
    name: "Вася"
};

let id = Symbol("id");

user[id] = 1;

console.log( user[id] );
