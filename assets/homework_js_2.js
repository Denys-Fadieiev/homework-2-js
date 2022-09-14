/*  Работа с concat
1. Даны два массива: [1, 2, 3] и [4, 5, 6]. Объедините их вместе. */
const arrOne = [1, 2, 3,];
const arrTwo = [4, 5, 6,];
const arrThree = arrOne.concat(arrTwo);
console.log(arrThree);


/*  Работа с reverse
2. Дан массив [1, 2, 3]. Сделайте из него массив [3, 2, 1]. */
const arr = [1, 2, 3];
const arrReverse = arr.reverse();
console.log(arrReverse);

/*  Работа с push, unshift
3.  Дан массив [1, 2, 3]. Добавьте ему в конец элементы 4, 5, 6.*/
const arrPush = [1, 2, 3];
arrPush.push(4, 5, 6);
console.log(arrPush);

// 4. Дан массив [1, 2, 3]. Добавьте ему в начало элементы 4, 5, 6. */
const arrUnshift= [1, 2, 3];
arrUnshift.unshift(4, 5, 6);
console.log(arrUnshift);

/*  Работа с shift, pop
5. Дан массив ['js', 'css', 'jq']. Выведите на экран первый элемент и удалите его.*/
const arrSrtings = ['js', 'css', 'jq'];
const arrStringsShift = arrSrtings.shift();
// console.log(arrSrtings);
console.log(arrStringsShift);

// 6. Дан массив ['js', 'css', 'jq']. Выведите на экран последний элемент и удалите его . 
const arrSrt = ['js', 'css', 'jq'];
const arrStrPop = arrSrt.pop();
// console.log(arrSrtings);
console.log(arrStrPop);


/* Работа с slice
7. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [1, 2, 3].*/
const arrNum = [1, 2, 3, 4, 5,];
const arrSliseOne = arrNum.slice(0, 3,);
console.log(arrSliseOne);

//  8. Дан массив [1, 2, 3, 4, 5]. С помощью метода slice запишите в новый элементы [4, 5]. 
const arrSliseTwo = arrNum.slice(3);
console.log(arrSliseTwo);

/*  Работа с splice
9. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5]. */
const arrNumbers = [1, 2, 3, 4, 5,];
arrNumbers.splice(1, 2);
console.log(arrNumbers);

//  10. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите в новый массив элементы [2, 3, 4].
const arrNumbersTwo = [1, 2, 3, 4, 5,];
const splice = arrNumbersTwo.splice(1, 3,);
console.log(arrNumbersTwo);
console.log(splice);

//  11. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].
const arrOther = [1, 2, 3, 4, 5];
arrOther.splice(3, 0, 'a', 'b', 'c',);
console.log(arrOther);

//  12. Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
const arrOtherTwo = [1, 2, 3, 4, 5];
arrOtherTwo.splice(1, 0, 'a', 'b',);
arrOtherTwo.splice(6, 0, 'c',);
arrOtherTwo.splice(8, 0, 'e',);
console.log(arrOtherTwo);

// или

const arrOtherThree= [1, 2, 3, 4, 5];
arrOtherThree.splice(0, 5, 1, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
console.log(arrOtherThree);

/* Работа с sort
13. Дан массив [3, 4, 1, 2, 7]. Отсортируйте его. */
const arrSort = [3, 4, 1, 2, 7];
arrSort.sort(function(a, b) {
  return a - b;
});

console.log(arrSort);


/* Работа с forEach
14. Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,} 		
Для каждого элемента выведите сообщение в консоль типа “Пользователь (имя) (фамилия) является (пол) и ему сейчас (возраст) лет” */

const arrObj = [
{firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 
{firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
{firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
{firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
];

arrObj.forEach(function (elem) {
  console.log(`Пользователь ${elem.firstName} ${elem.lastName} является ${elem.gender} и ему сейчас ${elem.age} лет`);
});



/* Работа с map
15. Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 42, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},	{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,}		
Создайте новый массив на основании старого массива, добавив каждому пользователю в новом массиве свойство telephoneNumber которое может быть или строкой или числом (на ваше усмотрение). */

const arrObjTwo = [
  {firstName: 'Test', lastName: 'Testovich', age: 42, gender: 'male',}, 
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
  {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
  {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',}
];

const arrMap = arrObjTwo.map(function (elem) {
  return {
    firstName: elem.firstName,
    lastName: elem.lastName, 
    age: elem.age, 
    gender: elem.gender,
    telephoneNumber: 1243254676,
    };
});
console.log(arrMap);
// console.log(arrObjTwo);

/* Работа с filter
16. Дан массив со следующими объектами внутри:  					{firstName: ‘Test’, lastName: ’Testovich’, age: 27, gender: ‘male’,}, 			{firstName: ‘User’, lastName: ’Userovich’, age: 12, gender: ‘male’,},		{firstName: ‘Test`ya’, lastName: ’Testovna’, age: 16, gender: ‘female’,},		{firstName: ‘Logina’, lastName: ’Consol`evna’, age: 42, gender: ‘female’,},		{firstName: ‘Undefined’, lastName: ’Undefinovich’, age: 99},			{firstName: ‘Null’, lastName: ’Nullovich’, gender: ‘male’}				Создайте новый массив на основании старого массива, в котором будут только те совершеннолетние пользователи, у которых будет определенный пол. */

const arrObjThree = [
  {firstName: 'Test', lastName: 'Testovich', age: 27, gender: 'male',}, 
  {firstName: 'User', lastName: 'Userovich', age: 12, gender: 'male',},		
  {firstName: 'Test`ya', lastName: 'Testovna', age: 16, gender: 'female',},		
  {firstName: 'Logina', lastName: 'Consol`evna', age: 42, gender: 'female',},
  {firstName: 'Undefined', lastName: 'Undefinovich', age: 99},			{firstName: 'Null', lastName: 'Nullovich', gender: 'male',}	
];

const arrFilter = arrObjThree.filter(function(item){
  return item.age >=18 && item.gender === 'male';
})

console.log(arrFilter);

/* Работа с flat
17. Дан следующий массив [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]]. Создайте новый массив на основании старого массива, в котором не будет вложенных массивов. */

const array = [1,2,3, [10,20,30, [100,200,300, [1000, 2000, 3000]]]];
const arrayFlat = array.flat(Infinity);
console.log(arrayFlat);


