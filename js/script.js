
// const myArr = [1,2,3,4,5,6,7]

// const spliceArr = myArr.splice(3,4)

// console.log(spliceArr)

// console.log(myArr)

// let sum = 0 ;
// for (let i = 1; i <= 10; i++) {
//     sum++
//     for (let j = 1; j <= 10  ; j++) {
//       console.log(sum + " X " + j + " = " + sum * j);
//     }
// }
// let myArr = [1,2,3,4,5,6,7,8,9,10]

// for (let i = 0; i < myArr.length ; i++){
//         console.log(myArr[i]);
//     }
    
    // for (let i = 1; i <= 10; i++) {
    //     for (let j = 1; j <= 10; j++) {
    //     console.log(i + " x " + j + " = " + i * j);
    //     }
    //     console.log("");
    // }



// let MyCar = {
//     // key = value
//     name : "Tata",
//     Model : "F8",
//     color : "black",
// }


// for (initililzation/Declaration, condition , increment/decrement){
//     // code to be executed
// }



// const numbers =  [1,2,3,4,5,6,7,]


// for(let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]);
// }


// for (var i = 1; i <= 10 ; i++){
//     for(let j = 1 ; j <= 10 ; j++){
//         console.log(`${i} X ${j} = ${i*j}`);
//     }
//     console.log("");
    
// }


// let text = "";
// let i = 0;
// while (i <= 10) {
//   text += "<br>The number is " + i;
//   i++;
// }
// document.getElementById("demo").innerHTML = text;



// console.log("my car is " + car.type + "  model " + car.model +  "  color  " + car.color);


// let age = [10,11,12,15,20,25,30,40,50,70,80,100]


// let newAge = age.filter((item)=>{
//     return item < 20
// })
// console.log(newAge);



const ages = [3, 10, 18, 20];

let newAges = ages.find(checkAge);

function checkAge(age) {
  return age > 18;
}
console.log(newAges);