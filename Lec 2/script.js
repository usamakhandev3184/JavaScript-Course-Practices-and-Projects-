//Arithmatic Operator 
// let a = 7;
// let b = 5;
//  console.log("a =", a, "& b =", b);

// console.log("a + b =", a + b);
// console.log("a - b", a - b);
// console.log("a * b", a * b);
// console.log("a / b", a / b);
// console.log("a % b", a % b);
// console.log("a ** b", a ** b);

// unary Operators
// Increments and Decrements

// console.log("a =", a, "& b =", b);

// a++; (This is also Correct way)
// Post Increments Operator

// console.log("a++ =", a++);
// console.log("a++ =", a++);

// Pre Increments Operator
// console.log("++a =", ++a);

// Decrements Operator

// a--;(This is also correct way)
// Post Decrements Operator

// console.log("a-- =", a--);
// console.log("a-- =", a--);

// Pre Decrements Operator

// console.log("--a =", --a);

// Assignment Operators
// 1- Equal to '=', 2- +=, 3- -=, 4- *=, 5- /=, 6- %=, 7- **=

// 1- Equal "="

// let a = 7;
// let b = 9;

// console.log("a = ", a, " & b =", b);

// 2- +=

// a += 7; //a += 7 => a + 7 = 14
// console.log("a +=", a);//14

//3- -=

// a -= 3;//a -= 3 => a - 3 = 4
// console.log("a -= ", a);//4

//4- *=

// a *= 4;//a *= 4 => a * 4 = 28
// console.log("a *= ", a);//28

//5- /=

// b /= 5;//b /= 5 => b /5 = 1.8
// console.log("b /=", b);//1.8

//6- %=

// b %= 3; //b &= 3 => b % 3 = 0
// console.log("b %=", b);//0

//7- **=

// a **= 3;// a **= 3 => a ** 3 = 343
// console.log("a **=", a);//343

//Comparison Operator (// give me the boolean result -> true or false )
//1- ==, 2= !=, 3- ===, 4- !==, 5- >=, 6- <=

// let a = 7;
// let b = 9;
// let c = "4";

// console.log("a = ", a, " & b =", b);

// console.log("a == b", a == b);// false 
// console.log("a != b", a != b);// true
// console.log("a === c", a === c);// false (Check this if the opeartor is string or not if this is string so that give me false)
// console.log("a !== c", a !== c);// true
// console.log("a >= b", a >= b);// false
// console.log("a <= b", a <= b);// true

//Logical Operators

let a = 7;
let b = 9;
let c = "4";

console.log("a = ", a, " & b =", b);

console.log("a > b && a < b", a > b && a < b);// false (&& operator if both is true in the 2 conditions then the final result is also true else false)
console.log("a == 7 && a < b", a == 7 && a< b);// true

console.log("a > b || a == 7", a > b || a ==7);// true (OR "||" Operator. If one or both is true in both conditions then the final result is true else false)
console.log("a < c || c == 5", a < c || c == 5);// false

console.log("!(a == 7)", !(a == 7));// false (Not "!"" Opperator. if the condition is true they give him false or if the condition is false they give him true)
console.log("!(b == a)", !(b == a));// true