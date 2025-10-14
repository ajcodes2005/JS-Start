let add = "5"+3;
//console.log(add);
//console.log(typeof add)

let alphabet = "xyzabc";
//console.log(Number(alphabet));
//console.log(typeof alphabet);

let day = "120925";
//console.log(Number(day));
//console.log(typeof day);

let str = "123.321";
//console.log(parseInt("123.321"));
//console.log(typeof str);

let str2 = "123xyz";
//console.log(parseInt(str2));
//console.log(typeof str2);

let decimal = "1.414";
//console.log(parseFloat(decimal));
//console.log(typeof decimal);

let pi = "irrational";
//console.log(+(pi));

let xxx = "478efq";
//console.log(+(xxx));
//console.log(typeof (xxx));

let xvx = "2010";
//console.log(+(xvx));

let largest4digit = "9999";
//console.log(Number("9999"));
//console.log(isNaN(Number("9999")));

let pqr = "cat";
//console.log(isNaN (Number("cat")));

let ___ = "";
//console.log(Number (___));

let concatanation = "33" + 3;
//console.log(concatanation);

let q1 = "42";
//console.log (Number(q1));
//console.log(parseInt(q1));
//console.log(+(q1));

let q2 = "42.5";
//console.log(Number(q2));
//console.log(parseInt(q2));
//console.log(+(q2));

let str1 = "hello123";
//console.log(Number(str1));
//console.log(parseInt(str1));

let strA = "ABC";
//console.log(Number(strA));
//console.log(isNaN (Number("strA")));
//console.log("invalid input!")

let converttoNumberA = "3.14";
//console.log(parseFloat(converttoNumber));
//console.log(typeof (3.14));

let converttoNumberB = "xyz";
//console.log(parseFloat(converttoNumber));

let converttoNumberC = "100px";
//console.log(parseFloat(converttoNumber));

let converttoNumberD = " ";
//console.log(parseFloat(converttoNumberD));

let userAge = "25 years";
//console.log(parseInt(userAge));

let userAgeB = "twenty five";
//console.log(parseInt (userAgeB));
//const wordToNumbers = require('words-to-numbers');
//let numberAge = wordToNumbers.wordToNumbers(userAgeB);
//NOTE; here i am doing mistakes. I will solve again.

// stack and heap memory
let num1 = 100;
let num2 = num1;
num2 = 200;
//console.log(num1)
//console.log(num2)

let obj1 = { value:100 };
let obj2 = obj1;
obj2.value=200;
//console.log(obj1.value);

let greeting = "Good Evening" ;
let userName = 'Shekhar' ;
let message = `Hello ${userName}` ;
//console.log(message)
//console.log(userName.length)
//console.log(message.length)

//console.log(message.charAt(1));
//console.log(greeting[4]);
//console.log(userName.length);
//console.log(message.length);

let userId = '19xvajay';
//console.log(userId.charAt(7))
//console.log(userId.charAt(0))

let ABC = "prime number";
let LMN = "irrational number";
//console.log(ABC + LMN)

let variable1 = 'x';
let variable2 = 'y';
//console.log( variable1 + variable2);

let oddNumber = "17";
let evenNumber = "2";
//console.log(oddNumber + evenNumber)
//console.log(oddNumber.concat(evenNumber))

const statement = "I am A Noob!";
//console.log(statement.indexOf("!"))
//console.log(statement.startsWith("am"))
//console.log(statement.includes("Noob!"))
//console.log(statement.endsWith("Noob!"))

let statement2 = "I love working hard!"
//console.log(statement2.slice(1,2))
//console.log(statement2.slice(-5))

let random = "      WE Ball!      ";
//console.log(random.trim())
//console.log(random.trimEnd());

let mistake = "ooohh No mistake mistake!";
//console.log(mistake.replace("mistake", "right"))
//console.log(mistake.replaceAll("mistake", "perfect"))

let planets = "Earth,Mars,Venus";
//console.log(planets.split(","))
//console.log(planets.split(""))

let brothers = "Uday,Ajay,Ranjan";
let unity = brothers.split(",")
//console.log(brothers.split("',"))
//console.log(unity.join("-"))

 /* let kid = 5;
let age = ` rohit is ${5} year older than than his
brother. his mama is ${5*4} year old.` ;
console.log(age); */

 /* let greet = "She said \"heyy\" " ;
console.log(greet)
console.log(typeof greet) */

/*
let customerAge = 18
console.log(customerAge)
console.log(typeof customerAge)

customerAge = "25"
console.log(customerAge)
console.log(typeof customerAge) */

/* let y = 17
console.log(y)
console.log(typeof y)


y = "Seventeen"
console.log(y)
console.log(typeof y)

y = false
console.log(y)
console.log(typeof y) */

// above one is example of dynamic typing i.e. without assigning variable type again and again we're changing types of the same variable.

/* let positiveInteger = 9
let integerString = "19"
let result = positiveInteger + integerString
console.log(result) */

/* function multiply(x,y) {
return(x*y)
}
multiply(2,3)
multiply("Hi",3)
console.log(multiply(2,3)) */
// console.log(multiply("Hi",3)) Grok's Mistake

let sem = 1
//console.log(sem)
//console.log(typeof sem)
let myDebt = -1000
//console.log(myDebt)
//console.log(typeof myDebt)
let myAge = 18.95
let myBrotherAge = 12.83
//console.log(myAge)
//console.log(typeof myAge)
//console.log(myBrotherAge)
//console.log(typeof myBrotherAge)
let keyboardNum = 20/104
let keyboardAlpha = 26/104
//console.log(keyboardNum)
//console.log(keyboardAlpha)
//console.log(typeof keyboardNum)
//console.log(typeof keyboardAlpha)

// let irrationalNum = √(2) 
// above line is wrong because of syntax. correct way to write irrational number is Math.sqrt(2)
// console.log(irrationalNum)

let irrationalNum = Math.sqrt(2)
//console.log(irrationalNum)
//console.log(typeof irrationalNum)

let irrationalNum2 = Math.sqrt(3)
//console.log(irrationalNum2)
//console.log(typeof irrationalNum2)

let powerNum = Math.pow(2,3)
//console.log(powerNum)
//console.log(typeof powerNum)
let powerNum2 = Math.pow(5,4)
//console.log(powerNum2)
//console.log(typeof powerNum)
let powerNum3 = Math.pow(2,-3)
//console.log(powerNum3)
let powerNum4 = Math.pow(-7,4)
//console.log(powerNum4)

let cubeRoot = Math.cbrt(27)
//console.log(cubeRoot)
let cubeRoot2nd = Math.cbrt(2.7)
//console.log(cubeRoot2nd)
let cubeRoot3rd = Math.cbrt(64)
//console.log(cubeRoot3rd)
let magicNum = Math.PI
//console.log(magicNum)
let absoluteNum = Math.abs(-7)
//console.log(absoluteNum)
let absoluteNum2 = Math.abs(66)
//console.log(absoluteNum2)
let absoluteNum3 = Math.abs(0)
//console.log(absoluteNum3)
let roundNum = Math.round(99.99)
//console.log(roundNum)
let roundNum2 = Math.round(49.5)
//console.log(roundNum2)

let customerId = "Anshu77"
//console.log(customerId)
//console.log(typeof customerId)

let firstName = "Elon"
let lastName = "Musk"
let fullName = `${firstName} ${lastName}`
//console.log(fullName)
//console.log(typeof fullName)

let proLang1 = "Java"
let proLang2 = "Script"
let Language = `${proLang1} ${proLang2}`
//console.log(Language)

let type1 = `Jezer Crater
Occupy Mars
Elon Musk 
NASA`
//console.log(type1)
//console.log(typeof type1)
//console.log(type1.length)
let strA1 = "Earth"
//console.log(strA1.length)
let strA2 = "Planet Earth"
//console.log(strA2.length)
let strI = "Electricity"
//console.log(strI[0])
//console.log(strI[6])
//console.log(strI.charAt(6))
//console.log(strI.at(-11))
let strII = "Computer"
//console.log(strII.toUpperCase())
let strIII = "CPU"
//console.log(strIII.toLowerCase())
let isActive = true
let isLegal = false
//console.log(isActive)
//console.log(typeof isActive)
let truthyValue  = Boolean(5)
//console.log(truthyValue)
let truthyValue1 = Boolean([])
//console.log(truthyValue1)
let truthyValue2 = Boolean({})
//console.log(truthyValue2)
let truthyValue3 = Boolean("Dopamine")
//console.log(truthyValue3)
let falsyValue = Boolean(0)
//console.log(falsyValue)
let falsyValue1 = Boolean(-0)
//console.log(falsyValue1)
let falsyValue2 = Boolean(NaN)
//console.log(falsyValue2)
let falsyValue3 = Boolean(null)
//console.log(falsyValue3)
let x = 10
let y = 17
//console.log(x>y)
//console.log(y>x)
let numberNot = "Five" * 5
//console.log(numberNot)
let magic = 3.14/0
//console.log(magic)
//console.log(typeof magic)
let bigNumber = 141431490876312332n
//console.log(bigNumber)
//console.log(typeof bigNumber)
let anotherUserId 
//console.log(anotherUserId)
//console.log(typeof anotherUserId)
let game 
//console.log(game)
//console.log(typeof game)
let buyNumber = null;
//console.log(buyNumber)
//console.log(typeof buyNumber)
let A = 18 ; 
//console.log(A)
let AA = 18
//console.log(AA)

/*
let name1 = "Ajay"
let age = 18.8
let college = "sem1"
let isAvailable = true
let nothing = null
let love 
let favBigNum = 82354377777772006n
let uniqueId = Symbol('id')
console.log(name1)
console.log(typeof name1)
console.log(age)
console.log(typeof age)
console.log(college)
console.log(typeof college)
console.log(isAvailable)
console.log(typeof isAvailable)
console.log(nothing)
console.log(typeof nothing)
console.log(love)
console.log(typeof love)
console.log(favBigNum)
console.log(typeof favBigNum)
*/
/*
let house = {furniture: "table" , color:"blue"}
house.furniture="chair"
house.color="White"
console.log(house.color)
console.log(house.furniture)
console.log(house)
console.log(typeof house)
*/

let strX = "Namaste"
let strY = strX
//console.log(strX)
//console.log(strY)
let arr1 = [1,2,3];
let arr2 = arr1
//console.log(arr2)
//console.log(typeof arr2)
arr1.push(4)
//console.log(arr2)

let machines = ["Calculator", "Computer", "Camera"]
//console.log(machines)
//console.log(typeof machines)
let equipment = machines
//equipment.push("Rocket")
//console.log(equipment)
let myLuckyNumber = 17
let yourLuckyNumber = myLuckyNumber
yourLuckyNumber = 19
console.log(yourLuckyNumber)
console.log(myLuckyNumber)
//Object Datatype
/* let man = {
firstName : "Ajay",
lastName : "Yadav",
university : "NSU",
semester : 1,
isStudent : true,
timeOnEarth : 18.8,
isEmployed : false
}
console.log(man)
console.log(typeof man)
console.log(man.university)
console.log(typeof man.isStudent) */

let Z = [("Natural Number") , ("Negative Number") , ("Zero")]
//console.log(Z)
//console.log(typeof Z)
let purchaseNumber = null
//console.log(typeof purchaseNumber)
let Array1 = ["Clouds" , "Mountains", "Forests"]
console.log(Array1)
console.log(typeof Array1)
Array1.push("Animals")
console.log(Array1)
let number  = new Array(-4 , -5, 9, 0);
console.log(number)
let Array2 = ["Lightning" , "Electricity", "Sunlight", "Magnet"]
console.log(Array2)
Array2.pop("Lightning")
console.log(Array2)

function wave(Shikha) {
return "Hello" + Shikha + "!"
}
console.log(wave("Shikha"))

function male(Shekhar) {
    return "Hello" + 
}


































