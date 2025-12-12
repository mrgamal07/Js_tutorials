console.log("hello I am condtional statements");

let age = 18;
let grace = 5;
// age +=grace;
// console.log("your age is " + age);
if(age >18){
    console.log("you can drive car");
}
else if(age==18){
    console.log("you are eligible for driving license");
}
else{
    console.log("you cannot drive car");
}

let a =10;
let b = 20;
let c = (a>b) ? (a-b):(b-a);
console.log(c);