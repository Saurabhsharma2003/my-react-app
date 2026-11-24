let student={
    name:"saurabh",
    age:23,
    course:"jfd",

    laptop:{
        brand:"hp",
        price:234465,
        ram:"354gb",
    },
    laptop2:{
        brand:"dell",
        price:242322,
        ram:"364gb",

        start:function(){
            
            console.log("starting windows..........");
        }
    }
};
console.log(student.name);
student.laptop2.start();
console.log(Object.values(student))
console.log(Object.keys(student));
console.log(student.laptop.brand);
delete student.laptop.ram;
console.log(student.laptop);
// const student={
//     name:"saurabh",
//     age:23,
//     course:"jfd",

//     laptop:{
//         model:"dell",
//         ram:"256gb",
//         price:345653,
//         altitude:"E7450",
//     },
//         laptop2:{
//             model:"hp",
//             ram:"654gb",
//             price:65664,
//             latitude:"E74506",

//             start:function(){
//                 console.log("starting windows..............");
//             }
//         }
        
    

// }
// student.city="lucknow";
// console.log(student.laptop);
// delete student.laptop.ram
// student.laptop2.start();
// console.log(Object.keys(student));
// console.log(Object.values(student));





