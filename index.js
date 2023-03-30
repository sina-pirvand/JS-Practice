"use strict";

// ! CHAPTER 7

// const a = document.querySelector("#test-btn");
// const b = document.querySelector("#other-btn");

// //NOTE 1. will log 1 each time btn is clicked
// a.addEventListener("click", function () {
//   console.log(1);
// });
// // 1 //

// function cl2() {
//   console.log(2);
// }
// //NOTE 2.will log 2 each time btn is clicked
// b.addEventListener("click", cl2);
// // 2 //

// //NOTE 3.will log 2 only one time after document is started (not related to the click at all)
// b.addEventListener("click", (e) => {
//   console.log(e);
// });

// document.addEventListener("click", (e) => {
//   console.log(e);
// });
// document.addEventListener("keydown", (e) => {
//   console.log(e);
// });
// // 3 //

// const numInput = document.querySelector("#num-input");
// if (!numInput) console.log("invalid entry");

// numInput.style.backgroundColor = "#640b44";
// numInput.style.border = "2px solid green !important";
// numInput.style.width = "10rem";

// const check = document.querySelector("#test-btn");
// check.classList.remove("active");
// check.classList.remove("active", "animate", "visible");

// document.addEventListener("keydown", (e) => {
//   if (e.key === "Escape") console.log("escape was used");
// });

// ! CHAPTER 8 & 9

// const arr = [1, 2, 3, 4];
// // NOTE: without destructing
// const a = arr[1];
// const b = arr[2];
// const c = arr[3];
// const d = arr[4];
// // NOTE: with destructing
// const [w, x, y, z] = arr;

// const food = {
//   main: ["pizza", "kebab", "stake"],
// };

// // NOTE: 1 //
// const [one, two] = food.main;
// console.log(one, two); //pizza kebab
// //1//
// // NOTE: 2 //
// const [a, b, c, d] = food.main;
// console.log(a, b, c, d); // pizza kebab stake undefined
// //2//
// // NOTE: 3 //
// const [first, , third] = food.main;
// console.log(first, third); //pizza stake
// //3//

// // NOTE: without destructing
// const shop = {
//   branch1: "Tehran",
//   branch2: "Rasht",
// };

// let main = shop.branch1;
// let second = shop.branch2;
// console.log(main, second); //Tehran Rasht

// let temp = main;
// main = second;
// second = temp;
// console.log(main, second); //Tehran Rasht

// // NOTE: with destructing
// const myShop = {
//   branch1: "Tabriz",
//   branch2: "Esfahan",
// };

// let myMain = myShop.branch1;
// let mySecond = myShop.branch2;
// console.log(myMain, mySecond); //Tabriz Esfahan

// [myMain, mySecond] = [mySecond, myMain];
// console.log(myMain, mySecond); //Esfahan Tabriz

// const restaurant = {
//   mainFood: ["pizza", "kebab", "stake"],
//   starter: ["patato", "salad", "ice cream"],
//   orderFood: function (mainFoodChoice, starterChoice) {
//     return [this.mainFood[mainFoodChoice], this.starter[starterChoice]];
//   },
// };

// // NOTE: using destructing
// const [mainFood, starterFood] = restaurant.orderFood(2, 0);
// console.log(mainFood, starterFood); //stake patato

// const nested = [1, [2, 3]];

// // NOTE: regular destructing
// const [a, b] = nested;
// console.log(a, b); //1  [2, 3]

// // NOTE: nested destructing
// const [i, [j, k]] = nested;
// console.log(i, j, k); //1 2 3

// const unknown = [100, 200];

// // NOTE: without default values
// const [x, y, z] = unknown;
// console.log(x, y, z); //100 200 undefined

// // NOTE: with default values
// const [a = 1, b = 1, c = 1] = unknown;
// console.log(a, b, c); // 100 200 1

// const shop = {
//   shopName: "baran",
//   openingHours: {
//     weekDays: {
//       open: 9,
//       close: 22,
//     },
//     weekend: {
//       open: 11,
//       close: 23,
//     },
//   },
// };

// const { weekDays } = shop.openingHours;
// console.log(weekDays); //{open: 9, close: 22}

// const { open: start, close } = weekDays;
// console.log(start, close); //9 22

// // NOTE: without default value
// const { address, shopName: theName } = shop;
// console.log(address, theName); //undefined 'baran'

// // NOTE: with default value
// const { owner = [], shopName } = shop;
// console.log(owner, shopName); //[] 'baran'

// const { shopName, openingHours } = shop;
// console.log(shopName, openingHours); //baran {weekDays: {…}, weekend: {…}}

// const { shopName: thename, openingHours: timing } = shop;
// console.log(thename, timing); // baran {weekDays: {…}, weekend: {…}}

// let a = 500;
// let b = 999;
// const obj = {
//   a: 10,
//   b: 20,
// };

// {a,b} = obj; // ERROR

// ({ a, b } = obj);
// console.log(a, b); // 10 20

// const restaurant = {
//   mainFood: ["pizza", "kebab", "stake"],
//   starter: ["patato", "salad", "ice cream"],
//   orderDelivery: function ({ starter, mainFood, address, time }) {
//     console.log(
//       `your ${this.mainFood[mainFood]} & ${this.starter[starter]} will be delivered at ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "21:15",
//   address: "tehran, 13",
//   mainFood: "2",
//   starter: "1",
// });
// OUTPUT => your stake & salad will be delivered at tehran, 13 at 21:15

// const arr = [1, 2];
// // without sread
// const newArr = [arr[1], arr[2], 3, 4]; // [1,2,3,4]
// //with spread
// const spread = [...arr, 3, 4]; // [1,2,3,4]

// const myName = "sina";
// console.log(...myName); // s i n a
// console.log([...myName]); // ['s', 'i', 'n', 'a']
// console.log(`${...myName}`); //Uncaught SyntaxError: Unexpected token '...'

// const juiceShop = {
//   name: "x",
//   orderJuice: function makeJuice(ing1, ing2, ing3) {
//     console.log(`here is your juice with ${ing1},${ing2},${ing3}`);
//   },
// };

// const arr = [1, 2, 3, 4];
// const str = "Hello World";

// console.log(...arr); //1 2 3 4
// console.log(...str); //H e l l o   W o r l d
// console.log(...juiceShop); // ERROR

// const newShop = {
//   owner: "Mr.Z",
//   ...juiceShop, // OK
//   foundedIn: "2002",
// };
// console.log(newShop);

// const restaurant = {
//   openTime: {
//     thu: {
//       open: 9,
//       close: 23,
//     },
//     wed: {
//       open: 10,
//       close: 23,
//     },
//     fri: {
//       open: 11,
//       close: 24,
//     },
//   },
// };
// const { thu, ...other } = restaurant.openTime;
// console.log(thu, other); // {open: 9, close: 23} {wed: {…}, fri: {…}}

// function sum(...nums) {
//   let sum = 0;
//   for (i = 0; i < nums.length; i++) sum += nums[i];
//   console.log(sum);
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// sum(...numbers); //55

// function pizza(mainIngredient, ...others) {
//   console.log(
//     `your pizza will've lots of ${mainIngredient} and some ${others}`
//   );
// }

// pizza("meat", "mushroom", "olives", "pepper"); // your pizza will've lots of meat and some mushroom,olives,pepper

// console.log(
//   "" || false || undefined || NaN || 0 || "" || "hi" || 20 || "sina" || null
// ); //hi
// console.log(false || NaN || null || "" || undefined); // undefined

// const party = {
//   numGuests: function (num) {
//     // OR SHORT CIRCUTING
//     guests = num || 10;
//     // WITH TERNATY
//     guests = num ? num : 10
//     // WITH IF-ELSE
//     if (guests) guests = num
//     else guests = 10
//     console.log(`you will have ${guests} guests tonight`);
//   },
// };
// party.numGuests(15); //you will have 15 guests tonight
// party.numGuests(null); //you will have 10 guests tonight
// party.numGuests(undefined); //you will have 10 guests tonight
// party.numGuests(27); //you will have 27 guests tonight

// const fastfood = {
//   order: function (food, drink) {
//     console.log(`${food} and ${drink} will be sent`);
//   },
// };
// // if-else
// if (fastfood.order) {
//   fastfood.order("pizza", "fanta");
// }
// // AND short circuting
// fastfood.order && fastfood.order("hotdog", "sprites");

// const party = {
//   numGuests: function (num) {
//     guests = num ?? 10;
//     console.log(`you will have ${guests} guests tonight`);
//   },
// };
// // party.numGuests(15); //you will have 15 guests tonight
// // party.numGuests(0); //you will have 0 guests tonight
// // party.numGuests(undefined); //you will have 10 guests tonight

// //OR
// party.numGuests = party.numGuests || 10;
// party.numGuests ||= 10;
// //AND
// party.numGuests = party.numGuests && 10;
// party.numGuests &&= 10;
// //NULLISH
// party.numGuests = party.numGuests ?? 10;
// party.numGuests ??= 10;

// const obj1 = {
//   data: "test",
// };

// const obj2 = {
//   date: 2022,
//   // old way
//   obj1: obj1,
//   // enhanced
//   obj1,
// };
// console.log(obj2); //{date: 2022, obj1: {…}}

// const obj = {
//   // old way
//   sayHello: function (name) {
//     console.log(`hello ${name}`);
//   },
//   // enhanced
//   sayHello(name) {
//     console.log(`hello ${name}`);
//   },
// };

// const weekDays = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
// const workTime = {
//   [weekDays[0]]: {
//     time: "9-22",
//   },
//   [weekDays[6]]: { time: "11-24" },
//   [`day ${2 + 3}`]: { time: "10-22" },
//   [`${weekDays[3]}`]: { time: "8-21" },
// };
// console.log(workTime); // {sat: {…}, fri: {…}, day 5: {…}, tue: {…}}

// const weekDays = ["sat", "sun", "mon", "tue", "wed", "thu", "fri"];
// const shop = {
//   openingHours: {
//     [weekDays[0]]: {
//       time: "9-22",
//     },
//     [weekDays[6]]: { time: "11-24" },
//     [`day ${2 + 3}`]: { time: "10-22" },
//     [`${weekDays[3]}`]: { time: "8-21" },
//   },
// };
// for (const day of weekDays) {
//   const open = shop.openingHours[day]?.time ?? "closed";
//   console.log(`on ${day} we're ${open}`);
//   // on sat we're 9-22
//   //  on sun we're closed
//   //  on mon we're closed
//   //  on tue we're 8-21
//   //  on wed we're closed
//   //  on thu we're closed
//   //  on fri we're 11-24
// }
// // OLD WAY
// if (shop.openingHours && shop.openingHours.sat) {
//   console.log(`we work from ${shop.openingHours.sat.time} on Sat`);
//   // we work from 9-22 on Sat
// }
// // OPTIONAL CHAINING
// if (shop?.openingHours?.sat) {
//   console.log(`we work from ${shop.openingHours.sat.time} on Sat`);
//   //we work from 9-22 on Sat
// }

// const fastfood = {
//   order(food, drink) {
//     return `${food} and ${drink} will be sent`;
//   },
// };
// const food1 = fastfood.order?.("pizza", "cola") ?? "method doesn't exist";
// console.log(food1); // pizza and cola will be sent
// const food2 = fastfood.orderFood?.("pizza", "cola") ?? "method doesn't exist";
// console.log(food2); // method doesn't exist

// const shop = {
//   openingHours: {
//     sat: {
//       open: 9,
//       close: 22,
//     },
//     sun: {
//       open: 10,
//       close: 23,
//     },
//     mon: {
//       open: 12,
//       close: 24,
//     },
//   },
// };

// // KEYS
// const properties = Object.keys(shop.openingHours);
// let workDays = `we're open on ${properties.length} days: `;
// for (const day of properties) {
//   workDays += `${day},`;
// }
// console.log(workDays); //we're open on 3 days: sat,sun,mon,

// // ENTRIES
// const entries = Object.entries(shop.openingHours);
// console.log(entries); // [Array(2), Array(2), Array(2)]

// for (const [day, { open, close }] of entries) {
//   console.log(`on ${day} we work from ${open} to ${close}`);
//   //  on sat we work from 9 to 22
//   //  on sun we work from 10 to 23
//   //  on mon we work from 12 to 24
// }

// const mySet = new Set(["sina", "ali", 2, "sina", 5, 2, 2, "ali"]);
// console.log(mySet); // Set(4) {'sina', 'ali', 2, 5}

// console.log(mySet.size); //4
// console.log(mySet.has("ali")); //true
// mySet.add("kasra");
// mySet.delete(2);
// console.log(mySet); //Set(4) {'sina', 'ali', 5, 'kasra'}

// // ---looping---
// for (const data of mySet) console.log(data);
// // sina
// // ali
// // 5
// // kasra

// // ---how many uniqe letters does my name has? ---
// console.log(new Set("sinapirvand").size); //8

// const restaurant = new Map();
// restaurant.set("name", "taj");
// restaurant.set("branch 1", "tehran");
// restaurant.set("branch 2", "shiraz");
// restaurant.set("mainFoods", ["ghorme", "kebab", "gheyme"]);
// restaurant.set("open", 10);
// restaurant.set("close", 23);
// restaurant.set(true, "we're open");
// restaurant.set(false, "we're closed");
// console.log(restaurant);
// // Map(8) {'name' => 'taj', 'branch 1' => 'tehran', 'branch 2' => 'shiraz', 'mainFoods' => Array(3), 'open' => 10, …}
// // [[Entries]]
// // 0: {"name" => "taj"}
// // 1: {"branch 1" => "tehran"}
// // 2: {"branch 2" => "shiraz"}
// // 3: {"mainFoods" => Array(3)}
// // key:
// // "mainFoods"
// // value: (3) ['ghorme', 'kebab', 'gheyme']
// // 4: {"open" => 10}
// // 5: {"close" => 23}
// // 6: {true => "we're open"}
// // 7: {false => "we're closed"}

// console.log(restaurant.get("name")); //taj
// console.log(restaurant.get("mainFoods")); //['ghorme', 'kebab', 'gheyme']
// console.log(restaurant.get(true)); //we're open

// const currentTime = 13;
// console.log(
//   restaurant.get(
//     currentTime > restaurant.get("open") &&
//       currentTime < restaurant.get("close")
//   )
// ); // we're open

// console.log(restaurant.has("mainFoods")); // True
// console.log(restaurant.has("branch 3")); // False
// restaurant.delete("branch 2");
// console.log(restaurant); // branch 2 is deleted
// console.log(restaurant.size); //7
// restaurant.clear();
// console.log(restaurant);

// const quiz = new Map([
//   ["question", "best prog lang?"],
//   [1, "c++"],
//   [2, "js"],
//   [3, "phyton"],
//   [4, "php"],
//   ["correct", 2],
//   [true, "that's damn right!"],
//   [false, "think more!"],
// ]);
// console.log(quiz);
//Map(7) {'question' => 'best prog lang?', 1 => 'c++', 2 => 'js', 3 => 'phyton', 'correct' => 2, …}

//quiz app
// console.log(quiz.get("question"));
// for (const [key, value] of quiz) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = Number(prompt("choose the right answer? 1,2 or 3?"));
// console.log(answer);
// console.log(quiz.get("correct") === answer);
// console.log(quiz.get(quiz.get("correct") === answer));

//* if I write 1 in prompt (wrong choice)
// best prog lang?
//  Answer 1: c++
//  Answer 2: js
//  Answer 3: phyton
//  Answer 4: php
//  1
//  false
//  think more!
//* if I write 2 in prompt (right choice)
// best prog lang?
//  Answer 1: c++
//  Answer 2: js
//  Answer 3: phyton
//  Answer 4: php
//  2
//  true
//  that's damn right!

// const a = 2;
// console.log(5 === a); // false
// console.log(2 === a); // true

// const quiz = new Map([
//   ["question", "best prog lang?"],
//   [1, "c++"],
//   [2, "js"],
//   [3, "phyton"],
//   [4, "php"],
//   ["correct", 2],
//   [true, "that's damn right!"],
//   [false, "think more!"],
// ]);
// // CONVERT TO ARRAY
// console.log([...quiz]);

// // 3 METHODES
// console.log(quiz.entries());
// console.log(quiz.keys());
// console.log(quiz.values());
// // Convert them to arrays
// console.log([...quiz.entries()]);
// console.log([...quiz.keys()]);
// console.log([...quiz.values()]);

/*
(8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['question', 'best prog lang?']
1: (2) [1, 'c++']
2: (2) [2, 'js']
3: (2) [3, 'phyton']
4: (2) [4, 'php']
5: (2) ['correct', 2]
6: (2) [true, "that's damn right!"]
7: (2) [false, 'think more!']
length: 8
index.js:557 MapIterator {'question' => 'best prog lang?', 1 => 'c++', 2 => 'js', 3 => 'phyton', 4 => 'php', …}
index.js:558 MapIterator {'question', 1, 2, 3, 4, …}
index.js:559 MapIterator {'best prog lang?', 'c++', 'js', 'phyton', 'php', …}
index.js:561 (8) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
index.js:562 (8) ['question', 1, 2, 3, 4, 'correct', true, false]
index.js:563 (8) ['best prog lang?', 'c++', 'js', 'phyton', 'php', 2, "that's damn right!", 'think more!']
 */

// const airline = "Gity Peyma Iranian";
// const planeModel = "B737";
// console.log(planeModel[0]); //B
// console.log(planeModel[3]); //7

// // //* Also can be used on a string directly
// // console.log("A320"[1]); //3

// const airline = "Gity Peyma Iranian";
// const planeModel = "B737";
// console.log(airline.length); //18
// console.log(planeModel.length); //4

// /* Also can be used on a string directly
// console.log("A320 N".length); //6

// const airline = "Gity Peyma Iranian";
// const planeModel = "B737";

//NOTE THAT LIKE ARRAYS, STRING INDEX STARTS FROM 0
// console.log(airline.indexOf("a")); // 9
// console.log(airline.lastIndexOf("a")); // 16
// console.log(airline.indexOf("Peyma")); // 5
// console.log(airline.indexOf("peyma")); // -1

// const airline = "Gity Peyma Iranian";
// const planeModel = "B737";

// console.log(airline.slice(5)); //Peyma Iranian
// console.log(airline.slice(5, 11)); //Peyma

// const airline = "Gity Peyma Iranian";
// console.log(airline.slice(0, airline.indexOf(" "))); //Gity
// console.log(airline.slice(airline.lastIndexOf(" ") + 1)); //Iranian

// const airline = "Gity Peyma Iranian";
// console.log(airline.slice(-5)); //anian
// console.log(airline.slice(-9, -3)); //a Iran
// console.log(airline.slice(1, -1)); //ity Peyma Irania

// const InputName = "MaHYar"; // correct form => Mahyar
// const nameLower = InputName.toLowerCase();
// const correctName = nameLower[0].toUpperCase() + nameLower.slice(1);
// console.log(correctName); //Mahyar

// const correctEmail = "hello@gmail.com";
// const inputEmail = "    HeLLo@gmail.com  ";
// const emailLower = inputEmail.toLowerCase();
// const correctmail = emailLower.trim();
// console.log(correctmail); //hello@gmail.com

// //* REPLACE
// const priceGB = "237,82£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS); //237.82$
// const str = "I'm Sina. It's Sina!";
// console.log(str.replace("Sina", "Ali")); //I'm Ali. It's Sina!

// //* REPLACE ALL
// // multiple replace
// console.log(str.replace("Sina", "Ali").replace("Sina", "Ali")); //I'm Ali. It's Ali!
// // regex
// console.log(str.replace(/Sina/g, "Ali")); //I'm Ali. It's Ali!
// // replaceAll
// console.log(str.replaceAll("Sina", "Ali")); //I'm Ali. It's Ali!

// const plane = "Airbus A320Neo";
// console.log(plane.includes("A320")); //true
// console.log(plane.includes("Ai")); //true
// console.log(plane.includes("ai")); //false
// console.log(plane.includes("B737")); //false

// console.log(plane.startsWith("Airb")); //true
// console.log(plane.startsWith("AirB")); //false

// console.log(plane.endsWith("Neo")); //true
// console.log(plane.endsWith("New")); //false

//! CHAPTER 10

// function planeChecker(model) {
//   if (model.startsWith("Airbus") && model.endsWith("Neo"))
//     console.log("this plane is a part of new Airbus family");
//   else if (model.startsWith("Airbus") && !model.endsWith("Neo"))
//     console.log("this plane is a part of old Airbus family");
//   else console.log("this plane is not a part of Airbus family");
// }

// planeChecker("Airbus A320Neo"); //this plane is a part of new Airbus family
// planeChecker("Airbus A320"); //this plane is a part of old Airbus family
// planeChecker("Boeing B737Neo"); //this plane is not a part of Airbus family

// // SPLITE
// console.log("a+very+nice+string".split("+")); // ['a', 'very', 'nice', 'string']

// const fullName = "Sina Pirvand";
// const [firstName, LastName] = fullName.split(" ");
// console.log(firstName, LastName); // Sina Pirvand

// // JOIN
// const newName = ["Mr.", firstName.toUpperCase(), LastName].join(" ");
// console.log(newName); // Mr. SINA Pirvand

// // MIXED
// function nameCapitalizer(name) {
//   const words = name.split(" ");
//   const nameUpper = [];
//   for (const word of words) {
//     nameUpper.push(word.replace(word[0], word[0].toUpperCase()));
//   }
//   console.log(nameUpper.join(" "));
// }
// nameCapitalizer("sina pirvand"); // Sina Pirvand
// nameCapitalizer("neymar junior da silva"); // Neymar Junior Da Silva

// const me = "Sina";

// console.log(me.padStart(10, "*")); // ******Sina
// console.log(me.padEnd(10, "*")); // Sina******
// console.log(me.padStart(10, "*").padEnd(15, "#")); // ******Sina#####

// const MaskCreditCard = function (num) {
//   const str = num + "";
//   const lastFour = str.slice(-4);
//   return lastFour.padStart(str.length, "•");
// };
// console.log(MaskCreditCard(12345678)); // ••••5678
// console.log(MaskCreditCard(5047061052965197)); // ••••••••••••5197
// console.log(MaskCreditCard("6037441058974011")); // ••••••••••••4011

// const sos = "HELP US! SOS... ";
// console.log(sos.repeat(10)); //HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS... HELP US! SOS...

// const planesInLine = function (n) {
//   console.log(`there are ${n} planes waiting in line ${"✈".repeat(n)}`);
// };
// planesInLine(2); // there are 2 planes waiting in line ✈✈
// planesInLine(11); // there are 11 planes waiting in line ✈✈✈✈✈✈✈✈✈✈✈
// planesInLine(6); // there are 6 planes waiting in line ✈✈✈✈✈✈

// // ES6 (NEW WAY)
// const booking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 190 * numPassengers
// ) {
//   console.log(flightNum, numPassengers, price);
// };
// booking("IR104", 2); //IR104 2 380
// booking("IR441"); // IR441 1 190
// booking("IR721", undefined); //IR721 1 190

// // TRICK: skipping one parameter
// booking("IR1001", undefined, 250); //IR1001 1 250
// const flightNum = "IR305";
// const passengerInfo = {
//   name: "Sina Pirvand",
//   age: 24,
//   passportNum: 123456,
// };
// const checkIn = function (flightNum, passenger) {
//   flightNum = "IR312";
//   passenger.name = "Mr." + passenger.name;
//   if (passenger.passportNum === 123456) console.log("Checked In :)");
//   else console.log("Wrong Passport!");
// };

// checkIn(flightNum, passengerInfo);
// console.log(flightNum); //IR305
// console.log(passengerInfo); // {name: 'Mr.Sina Pirvand', age: 24, passportNum: 123456}

// // GENERIC (NORMAL) FUNCTIONS
// const oneWord = function (str) {
//   return str.replace(/ /g, "").toLowerCase();
// };
// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(" ");
//   return [first.toUpperCase(), ...others].join(" ");
// };
// // HIGHER ORDER FUNCTION
// const strTransformer = function (str, fn) {
//   console.log(`original string: ${str}`);
//   console.log(`new string: ${fn(str)}`);
//   console.log(`transformed by: ${fn.name}`);
//   console.log("-----------------------------------");
// };
// strTransformer("javascript is the Best", upperFirstWord);
// strTransformer("javascript is the Best", oneWord);

// const click = function () {
//   console.log("you clicked");
// };
// document.body.addEventListener("click", click);

// const hi = function () {
//   console.log("hi");
// };
// ["sina", "mahyar", "saeed"].forEach(hi);

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };
// const greeting = greet("hello");
// console.log(greeting); // ƒ (name) {console.log(`${greeting} ${name}`);}
// greeting("Sina"); // hello Sina

// // CALL WITH BOTH ARGUMENTS AT A TIME
// greet("hey")("Mahyar"); //hey Mahyar

// // CHALLENGE: rewrite the greet func with arrow functions
// const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
// greetArrow("Hi")("Kim"); // Hi Kim

const homa = {
  airline: "Homa",
  iataCode: "HM",
  bookings: [],
};
homa.book(212, "Sina");
homa.book(695, "Ali");
console.log(homa);

const mahan = {
  airline: "Mahan",
  iataCode: "MA",
  bookings: [],
};

// DOESN'T WORK => Uncaught ERROR
const book = homa.book;
book(700, "Saeed");
