// task 1
// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// function checkAge(age) {
//   if (age>=18) {
//     return "You are an adult";
//   }

//   return "You are a minor";

// }
// console.log(checkAge(20));

// task 2
// Функція checkPassword отримує пароль користувача у параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
  
//   if (password === ADMIN_PASSWORD) {
//     return "Welcome!";
//   }
//     return "Access denied, wrong password!";
// }
// console.log(checkPassword("mangohackzor"));

// task 3
// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат. Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

// available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай рефакторинг коду функції checkStorage, використовуючи патерн «раннє повернення».

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//      return "Your order is empty!";
//   }  if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";
// }
// console.log(checkStorage(100, 50));

// task 4
// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// const fruits = ["apple", "plum", "pear", "orange"]

// task 5
// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// task 6
// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1]="peach";
// fruits[3]="banana";

// task 7
// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// task 8
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length-1;
// const lastElement = fruits[lastElementIndex];

// task 9
// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини. Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// function getExtremeElements(array) {
// array = [array[0], array[array.length-1]];
// return array;
// }
// console.log(getExtremeElements([1, 2, 3, 4, 5]));

// task 10
// Доповни код функції splitMessage(message, delimiter) таким чином, щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// function splitMessage(message, delimiter) {
//   let words;
// words = message.split(delimiter);
//   return words;
// }
// console.log(splitMessage("Mango hurries to the train", " "));

// task 11
// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає рядок, що складається зі слів, розділених лише пробілами (параметр message) та ціну гравірування одного слова (параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// function calculateEngravingPrice(message, pricePerWord) {
// let words;
//   words=message.split(" ").length;
// let engravingPrice;
//   engravingPrice=words*pricePerWord;
//   return engravingPrice;
// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10))

// task 12
// Доповни код функції makeStringFromArray(array, delimiter) таким чином, щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// function makeStringFromArray(array, delimiter) {
//   let string;
// string = array.join(delimiter);
//   return string;
// }
// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " "))

// task 13
// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире

// function slugify(title) {
//   let word;
//   word = title.split(" ");

//   let slug;
//   slug = word.join("-");

//   return slug.toLowerCase();;
// }
// console.log(slugify("Arrays for begginers"))

// task 14
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, 4);
// const lastThreeEls = fruits.slice(-3);

// task 15
// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];
// const allClients = oldClients.concat(newClients);

// console.log(allClients);

// task 16
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву довжиною maxLength елементів. В іншому випадку функція повинна повернути новий масив повністю.

// function makeArray(firstArray, secondArray, maxLength) {
//   let allUsers;
// allUsers = firstArray.concat(secondArray).slice(0, maxLength);
//   return allUsers;
// }
// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3))

// task 17
// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1 ) { // Change this line
//   console.log(i);
// }

// task 18
// Напиши функцію calculateTotal(number), яка приймає ціле число (параметр number) і повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// function calculateTotal(number) {
//  let sum = 0;

//   for(let i = 1; i <= number; i++){
//     sum += i;
//   }

//   return sum;
// }
// console.log(calculateTotal(18));

// task 19
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i +=1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// task 20
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює загальну суму його елементів. Загальна сума елементів повинна зберігатися у змінній total, яка повертається як результат роботи функції.

// function calculateTotalPrice(order) {
//   let total = 0;
// for(let i = 0; i < order.length; i++){
//     total +=  order[i];
//   }
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]))

// task 21
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів, розділених пробілом (параметр string), і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
// let words = string.split(" ");
// let longestWord = words[0];

// for (const word of words) {
//     if (word.length > longestWord.length) {
//         longestWord = word;
//     }
// }
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"))

// task 22
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max.

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//  for(let i = min;  i <= max; i++)
//     numbers.push(i);
//   return numbers;
// }
// console.log(createArrayOfNumbers(29, 34));

// task 23
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел (параметр numbers) і повертає новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value (число).

// function filterArray(numbers, value) {
// const newArray = [];
    
//     for(let i = 0; numbers.length > i; i++){
       
//         if (numbers[i]>value){
//             newArray.push(numbers[i])
//         }
//     }
//   return newArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3))

// task 24
// Функція checkFruit(fruit) приймає рядок з назвою фрукта (параметр fruit), і перевіряє, чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.

// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];

//   return fruits.includes(fruit);
// }
// console.log(checkFruit("mandarin"))

// task 25
// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в параметри array1 і array2, і повертає новий масив, що складається з тих елементів, які присутні в обох вихідних масивах.

// function getCommonElements(array1, array2) {
// let commonElements = [];
 
//   for(let i=0; i<array1.length; i+=1) {
//     if(array2.includes(array1[i])) {
//       commonElements.push(array1[i]);
//     }
//   }
// return commonElements;
// }
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]))

// task 26
// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const value of order) {
//     total += value;
//     }
    
//   return total;
// }
// console.log(calculateTotalPrice([164, 48, 291]))

// task 27
// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const number of numbers) {
    

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
// }
// console.log(filterArray([1, 2, 3, 4, 5], 5))

// task 28
// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// task 29
// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end. Парним вважається число, яке ділиться на 2 без остачі (10 % 2 === 0).

// function getEvenNumbers(start, end) {
// let evenNumbers = [];
//   for (let i=start; i<=end; i +=1) {
    
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
     
//     }
    
//   }
//  return evenNumbers;
// }
//   console.log(getEvenNumbers(2, 5))

// task 30
// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end, яке ділиться на 5 без остачі.

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// task 31
// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number

// function findNumber(start, end, divisor) {
//   let number;

//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       number = i;
//       return i;
//     }
//   }

//   return number;
// }
// console.log(findNumber(2, 6, 5))

// task 32
// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// function includes(array, value) {
// for (let i=0; i<array.length; i+=1) {
//   if (array[i] === value) {
//     return true;
//     break;
//   }
// }
//   return false;
// }
// console.log(includes([1, 2, 3, 4, 5], 3))
