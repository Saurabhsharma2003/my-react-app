 // console.log("welcome js i am saurabh");
// console.log("how are you js ");
// name="tony stark";
// age=24
// price=150.
// x=null;
// y=undefined;
// console.log( );
// let name="tony stark";
// console.log(name)

// let age=23;

// age=34;

// age=32;
// console.log(age)

    // console.log(document)
    // console.log(document.body)
   
    // const product = {
    //   title:"ball pen",
    //   rating:4,
    //   offer: 5,
    //   dealoftheday:"true",
    //   price:270,
    // };
    // console.log(product);

    //this is just practice of js

    /*const profile ={
        username: "shraddha khapra",
        isfollow:"follow",
        mess:"message",
        posts:195,
      followers:569,
      following:4,
      name:"shardha khapra",
      article:"@shradhakhapra",
      type:"enterprenure",
      bio:"Apna college | Ex-microsoft|DRDO to educate someone is the highest privilege"
     
    };
    profile["isfollow"]=false;

    console.log(typeof("username"));*/

    // profile ["isfollow"]=false; this is the way to update const value in java ;

    /*operators used to perform some operation on data
    artimetic operators= +,-,*,/  */
    
    //artimetic operators

  /*   let a=5;
    let b=2;

    console.log("a =",a," & b =",b);
    console.log("a + b =",a+b);
    console.log("a - b =",a-b);
    console.log("a * b =",a*b);
    console.log("a / b =",a/b);
 */
    // //modulus operators takes remainder

    // console.log("a % b =",a%b);

    // // exponentation
    // console.log("a ** b =", a**b);
    // unary operators
/* // let num=prompt("enter a number");
// if(num % 5 ===0){
//   console.log( "is multiple of 5")
// }else{
//   console.log("is not a multiple of 5")
// } */

// switch case use my apna college
 

/* let score = prompt("enter your score (0-100):");   ;
let grade;
if(score>=80 && score<=100){
  grade="A";
}else if(score>=70 && score<=89) {
  grade ="B";
}else if(score>=60 && score<=69) {
  grade ="C";
}else if(score >=50&& score<=59) {
  grade ="D";
}else if(score>=0&& score<=49) {
  grade ="F";
} */


// console.log("according to your score,your grade was : ",grade);

/* for- of loop
let str = "saurabh";



let size = 0;
for(let val of str){
       console.log("val=", val);
       size++;
}
console.log("string size =",size) */

// for in loop

/* let student={
  name:"saurabh",
  age:20,
  cgpa:7.5,
  ispass:true

};

for(let key in student){
  console.log("key=", key,"value=",student[key]);
} */


  // printing even number

 /*  for(let num=0;num<=100;num++){
    if(num%2===0){
        console.log("num=",num);
    }
    
  } */

    // for printing odd number

   /*   for(let num=0;num<=100;num++){
    if(num%   2!==0){
        console.log("num=",num);
    }
    
  } */

    // practice question  guessing game

    /* let gameNum= 24;

    let userNum=prompt("guess the game number :");

  while(userNum != gameNum){
        userNum = prompt("you entered wrong number. guess again : ");
  }
  console.log("congratulation ,you have guess the right number💥💥"); */

  // strings in j.s

  // string creation||string length||string indices;
/* 
  let str="saurabh";
  let str1="aman";
  console.log(str[0]); */

  // template literals
 /*  let obj = {
    item:"pen",
    price: 10
  }
  let output = `the cost of ${obj.item} is ${obj.price} rupees`;
  console.log(output); */

  // escape carracter  \t \n

  // console.log("saurabh \tsharma")

  // string methods in js ||str.touppercase||str.tolowercase||str.trim()
  // let str="SAURABH";
//  str=str.toUpperCase();
//  console.log(str)

/* let str="SAURABH";
str=str.toLowerCase();
console.log(str) */

 /* let str="                  SAURABH is a good boy   ";
 console.log(str.trim()); */

//  str.slice

/*  let str="SAURABH";
 str=str.slice(2,6);
 console.log(str);
 */

//  str.concate

/* let str="SAURABH";
let str2="aman";
console.log(str.concat(str2)); */

// str.replace ||it replace only one search value  || replace all will replace every match condition
/* 
let str = "hellolololo";
console.log(str.replaceAll("lo" , "p"));
 */

// str.charat(to find index of the string)
/* let str="saurabh";
console.log(str.charAt(0)) */

// practice with shraddha mam

/* let fullname=prompt("enter your fullname");

let userName ="@" + fullname + fullname.length;
console.log(userName)
 */

//                             Arrays in js

// create arrays ||arrays indices
/* let marks=[23,43,54,53,64];
// console.log(marks);
console.log(marks[3]) */

// looping over an array

/* let heroes=["saurabh", "ironman","hulk","thor","superman","spiderman"];

for(let i=0;i<heroes.length;i++){
  console.log(heroes[i]);
}
 */

// practice question
       /* let marks=[85,97,44,37,76,60]
let sum=0;
for(let val of marks){
  sum += val;
}
let avg = sum / marks.length;
console.log(`average marks of the class is ${avg}`); */

// Q2
// let items=[250,645,300,900,50];
// let i=0;
// for(let val of items){
//   console.log(`value at index ${i} = ${val}`);
//   let offer = val / 10;
//   items[i]=items[i]-offer;
//   console.log(`value after offer =${items[i]}`);
//   i++;
// }

// array method

// let foodItems=["potato","chips","licchi"];

// console.log("start")
// setTimeout (() => {
// console.log("saurabh travels");
// },3000);

console.log("end");
 
