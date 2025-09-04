const month =  new Date();
let aa = month.toLocaleDateString("ne-NP",{Month:"long"});
// let a = month.getDate(2025);
console.log(aa);



var a = 5;
var b = 6;
var c = "arun";
console.log(a+b);
console.log(c);
console.log(typeof a,typeof b,typeof c);

const a1 = 22;
// var 55a = "arun";
// a1 = a1+1;
// not allowed becaused a1 is const

{
    let a = 12;
    console.log(a);
    // let was block based 
}

let x = "arun gamal";
let y = 22;
let z= 4.55;
const p = true;
let pt = true;
let i = undefined;
let r = null;
console.log(x,y,z,p,pt,i,r);
console.log(typeof x,typeof y,typeof z,typeof p,typeof pt,typeof i,typeof r);


let o = {
    name:"arun",
    age:22,
    roll:20,
    sub:"js"
}
console.log(o)
o.salary = "1000crores"
console.log(o)