// let num = 456;
// console.log(num);
// console.log(typeof 456);


// const value = 10.8;
// console.log(value);
// console.log(typeof 10.8);

// datatype conversion now (implicit) :

/* Addition of string and number below */

 /* console.log("99" + 9);
console.log(typeof ("99"+9));

console.log (17+7);
console.log(typeof (17+7));

console.log ("11" + "11");
console.log(typeof ("11" + "11")); */

 /* console.log ("18"+"17");
console.log ("18" - "17");
console.log (typeof ("18" - "17"));
console.log (typeof ("18" + "17" )); */

// NOTE : addition of string isn't like adding two integers. It is like ("77" + "9") = 779 
// NOTE : subtraction of string is like integer. i.e. ( "29"- "9") = 20 
// NOTE : in addition of string the type of we get is string but in subtraction of two string we get typeof is number

// subtraction of "string" and number below :

/* console.log (17-7);
console.log (typeof (17-7));

console.log (65 + (-11));
console.log (typeof (65 + (-11)));

console.log (-99 + 19);
console.log (typeof (-99 + 19));

console.log ("25" - "10");
console.log (typeof ("25" - "10"));

console.log ( "31" - "20");
console.log (typeof ("31" - "20"));

console.log ( "41" - 33);
console.log ( typeof ("41" - 33)); */

// NOTE: when we subtract number from number we get number like operation in integers. 
// when we subtract string from string operation works same like integers.
// number - number = number => typeof is also number
// string - string = number ( operation like integers)
// string - number + number ( operation like integers)


// We will do multiplication now with number and string

/*
console.log (5*5);
console.log (typeof (5*5));

console.log ( 7*(-7) );
console.log (typeof (7*(-7)));

console.log ( "15" * 7);
console.log (typeof ("15" * 7));

console.log ("13" * "17");
console.log (typeof ("13" * "17"));

console.log ("-21" * "-17");
console.log (typeof ("-21" * "-17")); 
*/

// NOTE: Multiplication of number and number , number and string , string and string work same like integers.
// and typeof of multiplication of number and  number , number and string and string and string give number type.

// Now we wil do divison in number and string 

/* 
console.log ( 65/19 );
console.log (typeof 65/19);
console.log (75/7.5);
console.log (typeof 75/7.5);
*/

// NOTE: Divison operation works same like integer. and typeof always give number type.

// Below we will learn about operation in boolean.

 /* 
console.log ( 7 + true);
console.log (typeof ( 7 + true ));
console.log ( true + false);
console.log (typeof ( true + false ));
console.log ( true + true );
console.log ( false + false );
*/

/*
let x = 17;
console.log(typeof x); 

x = "Irrational No.";
console.log(typeof x);

x = "true";
console.log(typeof x);

x = false;
console.log(typeof x);
*/


// From Here We Will Start Learning Datatype Conversion:
// Converting any value to number()

/*
let str = "257";
let num = Number(str);
console.log(num);
console.log(typeof num);

let numb = 798;
let stri = String(numb);
console.log(stri);
console.log(typeof stri);

let age = 19;
let userAgeString = String(age);
console.log(userAgeString);
console.log(typeof userAgeString);

let userName = ("909");
let digit = String(userName);
console.log(digit);
console.log(typeof digit);
*/

// NOTE: Above We've done conversion from number to string and string to number.

/*
let invalid = ("Heyyy");
let word = Number(invalid);
console.log(word);
console.log(typeof word);
*/

/*
let bool = Number(false);
console.log(bool);
console.log(typeof bool);
*/

/*
let userBlocked = (true);
let userDead = Number(userBlocked);
console.log(userDead);
console.log(typeof userDead);
*/

/*
let naturalNumberStart = (1);
let numberToBoolean = Boolean(naturalNumberStart);
console.log(numberToBoolean);
*/

/*
let naturalNumberBegin = (0);
let numberToBoolean = Boolean(naturalNumberBegin);
console.log(numberToBoolean);
*/

// Above We've done conversion of value like String, Boolean to Number()

/*
let str = "3.14159";
let int = parseInt(str);
console.log(int);

let rationalNumber = "1.5";
let integer = parseInt(rationalNumber);
console.log(integer);

let userId = "1170934";
let number = parseInt(userId);
console.log(number);

let userIsBot = ("true")
let one = (parseInt(userIsBot));
console.log(one);
console.log(typeof one);

let userName = ("shekhar");
let num = (parseInt ("userName"));
console.log(num);
*/

//NOTE: Above we've done conversion of string to parseInt.
//NOTE: This conversion means we get value in integer of string.

/*
let str = "3.14159";
let float = parseFloat(str);
console.log(float);
console.log(typeof float);

let str2 = "0.000001010";
let float2 = parseFloat(str2);
console.log(float2);
console.log(typeof float2);

let string = "6.78qrs";
let decimalNumber = parseFloat(string);
console.log(decimalNumber);


let invalid = "rehan";
let notNumber = parseFloat(invalid);
console.log(notNumber);

let invalid2 = "ajey";
console.log(parseFloat(invalid2));
*/

/*
let userAge = "19.8";
console.log(parseFloat(userAge));
console.log(parseInt(19.8));

let userPassword = "1827125";
console.log(parseFloat(userPassword));
console.log(parseInt(userPassword));

let userId = "134.134";
console.log(parseFloat(userId));
console.log(parseInt(userId));
*/

//NOTE: Above we've done the conversion of string to parseInt( ) and parseFloat( ).
// and it is like parseInt( ) gives the integer value and parseFloat( ) gives decimal value.

/*
let str = "33";
let num = +str;
console.log(num);

let birthYear = "2006";
let number = +birthYear;
console.log(number);

let address = "Jamshedpur";
let num2 = +address;
console.log(num2);

let invalid = +"hello";
console.log(invalid);

let bool = +true;
console.log(bool);
*/
//NOTE: Above we've done conversion of string and boolean to number by +unary plus operator method.
// in this method we assign the value of string, boolean and during putting value we add +
// before the name of variable we add the sign +.

/*
let digit = 689;
let str = String(digit);
console.log(str);
console.log(typeof str);

let year = String(2025);
console.log(year);
console.log(typeof year);

let correct = String(true);
console.log(correct);
console.log(typeof correct);
*/
//NOTE: Above is conversion of number,boolean to string.

/*
let num = 359;
let str = num.toString();
console.log(str);
console.log(typeof str);

let num2 = 2525;
let str2 = num2.toString();
console.log(str2);
console.log(typeof str2);

let userIsAdult = true;
let string = userIsAdult.toString();
console.log(string);
console.log(typeof string);
*/

/*
let str = "ajay";
let valid = Boolean(str);
console.log(valid);
console.log(typeof valid);

let value = "";
console.log(Boolean(value));
console.log (typeof value);

let bool = 0;
console.log(Boolean(bool));
console.log(typeof (bool));

let bool2 = "hey";
console.log(!!bool2);
console.log(typeof(!!bool2));
*/
//NOTE: Above we've done Doublr NOT Operator (!!)
// it is a shorthand way to convert a value to a boolean

/*
let num = 675;
let numObj = Object(num);
console.log(numObj);
console.log(typeof numObj);

let year = 2005;
let yearObj = Object(year);
console.log(yearObj);
console.log(typeof yearObj);

let minutes = Object(60);
console.log(minutes);
console.log(typeof minutes);

let sem = Object(1);
console.log(sem);
console.log(typeof sem);

let userName = "Ajay";
let user = Object(userName);
console.log(user);
console.log(typeof user)

let uid = "sam165";
let uidObject = Object(uid);
console.log(uidObject);
*/
//Note: Above we've done the conversion of number to Number object and string to String object.
/*
let str = "sweety";
let arr = [...str];
console.log(arr);
console.log(typeof arr)

let str2 = "welcome";
let arr2 = [...str2];
console.log(arr2);
console.log(typeof arr2);
*/
//note: we've done conversion of string to array.

//from here we'll do some practise of real world examples.
let userInput = "50.75";
let price = parseFloat(userInput);
let tax = price * 0.1 ;
console.log(tax);

let score = 95;
let message = "Your score is:" + String(score);
console.log(message);















