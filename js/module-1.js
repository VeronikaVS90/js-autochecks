// task 1
// Оголоси дві змінні, productName для назви товару, і pricePerItem для зберігання ціни за штуку. При оголошенні надай змінним наступні значення:
// назва - рядок "Droid";
// ціна за штуку - число 2000.

// const productName = "Droid";
// const pricePerItem = 2000;


// task 2
// Ім'я товару змінили на "Repair droid" і збільшили його ціну на 1500 кредитів. Перевизнач значення змінних pricePerItem і productName після їх оголошення.

// let productName = "Droid";
// let pricePerItem = 2000;

// productName="Repair droid";
// console.log(productName);

// pricePerItem=3500;
// console.log(pricePerItem);

// task 3
// Оголоси наступні змінні, використовуючи ключове слово const або let, і присвой їм відповідні значення.
// topSpeed - число 160.
// distance - число 617.54.
// login - рядок "mango935".
// isOnline - буль true.
// isAdmin - буль false.

// const topSpeed = 160;
// const distance = 617.54;
// const login = "mango935";
// const isOnline = true;
// const isAdmin = false;

// task 4
// Доповни код, присвоївши змінній totalPrice вираз для підрахунку загальної суми замовлення. Змінна pricePerItem зберігає ціну однієї одиниці товару, а orderedQuantity - кількість одиниць товару в замовленні.

// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = pricePerItem*orderedQuantity;
// console.log (3500*4);

// task 5
// Оголоси змінну message і запиши в неї повідомлення про покупку, рядок у форматі: "You picked <назва товару>, price per item is <ціна товару> credits". Де <назва товару> і <ціна товару> — це значення змінних productName і pricePerItem. Використовуй синтаксис шаблонних рядків.

// const productName = "Droid";
// const pricePerItem = 3500;

// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;
// console.log(message);

// task 6
// Магазин з продажу ремонтних дроїдів готовий до відкриття, залишилося написати скрипт для їх замовлення. Оголоси змінні та присвой їм відповідні значення

// const pricePerDroid = 800;
// const orderedQuantity = 6;
// const deliveryFee = 50;
// const totalPrice = (pricePerDroid*orderedQuantity)+deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// task 7
// Оголоси функцію sayHi, всередині якої додай console.log() з рядком "Hello, this is my first function!". Після оголошення виклич функцію sayHi.

// function sayHi () {
//   console.log("Hello, this is my first function!")
// }
// sayHi();

// task 8
// Функція add повинна вміти додавати три числа і виводити результат у консоль. Додай функції add три параметри: a, b і c, які будуть отримувати значення аргументів під час її виклику.
// Доповни console.log() таким чином, щоб він логував рядок "Addition result equals <result>", де <result> - це сума переданих чисел.

// function add(a, b, c) {
//   console.log(`Addition result equals ${a+b+c}`);
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// task 9
// Доповни код функції add таким чином, щоб вона повертала результат додавання значень трьох параметрів: a, b і c.

// function add(a, b, c) {
//   return a+b+c;
// }

// add(2, 5, 8);

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// task 10
// Доповни код функції таким чином, щоб у змінну message записувався рядок "You picked <product name>, price per item is <product price> credits", де <product name> і <product price> - це значення параметрів name і price. Використовуй синтаксис шаблонних рядків.

// function makeMessage (name, price) {
//    const message = `You picked ${name}, price per item is ${price} credits`;
//   return message;
// };

// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Radar', 6150));
// console.log(makeMessage('Reactor', 8000));

// task 11
// Доповни код функції таким чином, щоб у змінну totalPrice записувалася загальна сума покупки - результат множення кількості товарів на ціну одного.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   const totalPrice = (orderedQuantity*pricePerItem);

//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// task 12
// Доповни код функції таким чином, щоб вона повертала повідомлення про замовлення у форматі "You ordered droids worth <total price> credits. Delivery (<delivery fee> credits) is included in total price.". Не забудь про ціну доставки в обчисленнях загальної вартості.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   const totalPrice = (orderedQuantity * pricePerDroid) + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// task 13
// Функція isAdult оголошує один параметр age (вік), значення якого буде задаватися під час її виклику. Присвой змінній passed вираз перевірки віку користувача на повноліття. Людина вважається повнолітньою у віці 18 років і старше.

// function isAdult(age) {
//   const passed =age>=18;
//   return passed;
// }

// console.log(isAdult(20));
// console.log(isAdult(14));
// console.log(isAdult(8));
// console.log(isAdult(37));

// task 14
// Присвой змінній isMatch вираз перевірки рівності введених і попередньо збережених паролів. Результатом виразу перевірки повинно бути true, якщо значення збігаються, і false - якщо ні.

// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   const isMatch =password=== SAVED_PASSWORD;

//   return isMatch;
// }
// console.log(isValidPassword("mangodab3st"));
// console.log(isValidPassword("kiwiru13z"));
// console.log(isValidPassword("jqueryismyjam"));

// task 15
// Додай вираз перевірки повноліття користувача, значення параметра age, в умову для інструкції if.

// function checkAge(age) {
//   let message;

//   if (age>=18) {
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// task 16
// Використовуючи розгалуження, доповни код функції таким чином, що:
// Якщо в замовленні вказане число, яке перевищує кількість товарів на складі, у змінну message записується рядок "Not enough goods in stock!".
// В іншому випадку записується рядок "Order is processed, our manager will contact you.".

// function checkStorage(available, ordered) {
//   let message;
// if (available<ordered) {
//   message="Not enough goods in stock!"
// } else {
//   message = "Order is processed, our manager will contact you."
// }
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// task 17
// Заміни вирази зі стандартними математичними операторами на комбінований оператор присвоєння з додаванням, відніманням, множенням і діленням.

// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// task 18
// Оголоси змінну totalPrice для зберігання загальної суми замовлення і присвой їй вираз розрахунку цієї суми.
// Додай перевірку, чи зможе клієнт оплатити замовлення:
// якщо сума до сплати перевищує кількість кредитів на рахунку клієнта, запиши у змінну message рядок "Insufficient funds!";
// в іншому випадку, відніми суму покупки з рахунку клієнта і запиши у змінну message повідомлення: "You ordered <число> droids, you have <число> credits left".

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   const totalPrice = pricePerDroid*orderedQuantity;
//   let message;
//   if(totalPrice>customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`;
//   }
  
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// task 19
// Функція checkPassword(password) отримує пароль користувача в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// Якщо значення параметра password збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// Якщо жодна з попередніх умов не виконалася, у змінну message записується рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) {
//     message =  'Canceled by user!';
//   } else if (password===ADMIN_PASSWORD) {
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// task 20
// Використовуючи розгалуження, доповни код функції таким чином, що:

// Якщо в замовленні ще немає товарів, тобто значення параметра ordered дорівнює 0, у змінну message присвоюється рядок "There are no products in the order!".
// Якщо товарів у замовленні більше, ніж доступно товарів на складі, то у змінну message присвоюється рядок "Your order is too large, there are not enough items in stock!".
// В іншому випадку у змінну message присвоюється рядок "The order is accepted, our manager will contact you".

// function checkStorage(available, ordered) {
//   let message;
//   if (ordered===0) {
//     message = "There are no products in the order!";
//   } else if (available<ordered) {
//     message = "Your order is too large, there are not enough items in stock!"
//   } else {
//     message = "The order is accepted, our manager will contact you";
//   }

//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// task 21
// Присвой змінній isInRange вираз перевірки входження number у числовий проміжок від start до end. Тобто число повинно бути більшим або дорівнювати start, і меншим або дорівнювати end. Результатом виразу перевірки буде буль true або false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number>=start && number<=end;

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));

// task 22
// Присвой змінній canAccessContent вираз перевірки передплати. Якщо значення параметра subType дорівнює рядкам "pro" або "vip", користувач отримає доступ. Результатом виразу перевірки буде буль true або false.

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==="vip" || subType==="pro";

//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent("pro"));
// console.log(checkIfCanAccessContent("starter"));
// console.log(checkIfCanAccessContent("vip"));
// console.log(checkIfCanAccessContent("free"));

// task 23
// Присвой змінній isNotInRange вираз інверсії значення змінної isInRange, використовуючи оператор !.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ;

//   return isNotInRange;
// }

// console.log(isNumberNotInRange(10, 30, 17));
// console.log(isNumberNotInRange(10, 30, 5));
// console.log(isNumberNotInRange(20, 50, 24));
// console.log(isNumberNotInRange(20, 50, 76));

// task 24
// Використовуючи розгалуження і логічні оператори, доповни код функції.

// Якщо витрачено від 50000 (включно) або більше кредитів - знижка 10% (золотий партнер)
// Якщо витрачено від 20000 (включно) до 50000 кредитів - знижка 5% (срібний партнер)
// Якщо витрачено від 5000 (включно) до 20000 кредитів - знижка 2% (бронзовий партнер)
// Якщо витрачено менше 5000 кредитів - знижка 0 (базовий партнер)
// Значення знижок кожного рівня зберігаються в однойменних константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT і GOLD_DISCOUNT.

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
// if (totalSpent>=50000) {
//   discount=GOLD_DISCOUNT
// } else if (totalSpent>=20000 && totalSpent<50000) {
//   discount=SILVER_DISCOUNT
// } else if (totalSpent>=5000 && totalSpent<20000) {
//   discount=BRONZE_DISCOUNT
// } else {
//   discount=BASE_DISCOUNT
// }
//   // Change code above this line
//   return discount;
// }

// console.log (getDiscount(137000));
// console.log (getDiscount(46900));
// console.log (getDiscount(8250));
// console.log (getDiscount(1300));
// console.log (getDiscount(5000));
// console.log (getDiscount(20000));
// console.log (getDiscount(50000));

// task 25
// Виконай рефакторинг рішення задачі «Склад товарів», замінивши інструкцію if...else тернарним оператором.

// function checkStorage(available, ordered) {
//   let message;
//  message = ordered > available ? "Not enough goods in stock!" : "The order is accepted, our manager will contact you";

//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// task 26
// Використовуючи тернарний оператор, доповни функцію таким чином, що:

// Якщо значення password і ADMIN_PASSWORD збігаються, присвой змінній message рядок "Access is allowed".
// В іншому випадку, присвой message рядок "Access denied, wrong password!".

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// message = password===ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!";
//   return message;
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));

// task 27
// Функція getSubscriptionPrice(type) отримує рядок з типом передплати користувача (параметр type), перевіряє її на збіг з трьома можливими типами щомісячної передплати та повертає ціну, що зберігається у змінній price.

// Якщо значення параметра type - це рядок:

// "starter" - ціна передплати 0 кредитів.
// "professional" - ціна передплати 20 кредитів.
// "organization" - ціна передплати 50 кредитів.

// function getSubscriptionPrice(type) {
//   let price;
//  switch (type) {
//     case "starter":
//       price = 0;
//       break;

//     case "professional":
//       price = 20;
//       break;

//     case "organization":
//       price = 50;
//       break;
//   }
//   return price;
// }

// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));

// task 28
// Функція checkPassword(password) отримує пароль в параметр password, перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і повертає повідомлення про результат порівняння, яке зберігається у змінній message.

// Якщо значення параметра password:

// дорівнює null, значить користувач скасував операцію і в message записується рядок "Canceled by user!".
// збігається зі значенням ADMIN_PASSWORD, у змінну message присвоюється рядок "Welcome!".
// не задовольняє жодну з попередніх умов, у змінну message записується рядок "Access denied, wrong password!".
// Зроби рефакторинг коду, замінивши інструкцію if..else на switch, і не забудь про блок default (аналог else).

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
// switch (password) {
//   case password=null:
//     message = "Canceled by user!";
//     break;

//   case password=ADMIN_PASSWORD:
//      message = "Welcome!";
// break;

//   default:
//    message = "Access denied, wrong password!";
// }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));

// task 29
// Функція getShippingCost(country) повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат, що зберігається у змінній message. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price>, необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China - 100 кредитів
// Chile - 250 кредитів
// Australia - 170 кредитів
// Jamaica - 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country"

// function getShippingCost(country) {
//   let message;
  
// switch (country) {
//   case "China":
//     message="Shipping to China will cost 100 credits";
//     break;
    
//      case "Chile":
//     message="Shipping to Chile will cost 250 credits";
//     break;
    
//      case "Australia":
//     message="Shipping to Australia will cost 170 credits";
//     break;
    
//      case "Jamaica":
//     message="Shipping to Jamaica will cost 120 credits";
//     break;

//   default:
//     message="Sorry, there is no delivery to your country";
// }
//   return message;
// }

// console.log(getShippingCost("Australia"));
// console.log(getShippingCost("Germany"));
// console.log(getShippingCost("China"));
// console.log(getShippingCost("Chile"));
// console.log(getShippingCost("Jamaica"));
// console.log(getShippingCost("Sweden"));

// task 30
// Функція getNameLength(name) приймає ім'я (параметр name) і повертає рядок, в якому вказана його довжина. Доповни шаблонний рядок у змінній message довжиною рядка з параметра name.

// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`;

//   return message;
// }

// console.log(getNameLength("Poly"));
// console.log(getNameLength("Harambe"));
// console.log(getNameLength("Billy"));
// console.log(getNameLength("Joe"));

// task 31
// Доповни код, присвоївши оголошеним змінним вирази звертання до відповідних елементів або властивостей рядка у змінній course.

// courseTopicLength - довжина рядка.
// firstElement - перший символ рядка.
// lastElement - останній символ рядка.

// const courseTopic = "JavaScript essentials";

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// task 32
// Присвой змінній substring вираз створення підрядка довжиною length символів (від початку) з рядка string.

// function getSubstring(string, length) {
//   const substring = string.slice(string, length);

//   return substring;
// }

// console.log(getSubstring("Hello world", 3));
// console.log(getSubstring("Hello world", 6));
// console.log(getSubstring("Hello world", 8));
// console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));

// task 33
// Функція formatMessage(message, maxLength) приймає рядок (параметр message) і форматує його, якщо довжина перевищує значення в параметрі maxLength.

// Доповни код функції таким чином, що якщо довжина рядка:

// не перевищує maxLength, функція повертає його в початковому вигляді.
// більша за maxLength, то функція обрізає рядок до maxLength символів і додає в кінець три крапки "...", після чого повертає скорочену версію.

// function formatMessage(message, maxLength) {
//   let result;
  
// if (message.length>maxLength) {
//   result = message.slice(0, maxLength)+'...';
// } else {
//   result=message;
// }

//   return result;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));

// task 34
// Функція normalizeInput(input) приймає рядок (параметр input) і повертає такий самий рядок, але в нижньому регістрі. Присвой змінній normalizedInput вираз створення рядка у нижньому регістрі з параметра input.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase();

//   return normalizedInput;
// }

// console.log(normalizeInput("Hello world"));
// console.log(normalizeInput("This ISN'T SpaM"));
// console.log(normalizeInput("Big SALE"));

// task 35
// Присвой змінній result вираз перевірки входження імені (параметр name), у повне ім'я (параметр fullname). Нехай функція чітко розрізняє регістр літер, тобто «Петя» і «петя» - для неї різні імена.

// function checkForName(fullName, name) {
//  const result = fullName.includes(name);
//   return result;
// }

// console.log(checkForName("Egor Kolbasov", "Egor"));
// console.log(checkForName("Egor Kolbasov", "egor"));
// console.log(checkForName("Egor Kolbasov", "egOr"));
// console.log(checkForName("Egor Kolbasov", "Zhenya"));
// console.log(checkForName("Vadim Nekrasov", "Vadim"));
// console.log(checkForName("Vadim Nekrasov", "vadim"));
// console.log(checkForName("Vadim Nekrasov", "Dima"));

// task 36
// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути у довільному регістрі, наприклад SPAM або sAlE.

// Якщо знайшли заборонене слово (spam або sale) то функція повертає буль true.
// Якщо в рядку відсутні заборонені слова, функція повертає буль false.

// function checkForSpam(message) {
//   let result;

// if (message.toLowerCase().includes('spam')) {
//   result=true;
// } else if (message.toLowerCase().includes('sale')) {
//   result=true;
// } else {
//   result=false;
// }
  
//   return result;
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));


