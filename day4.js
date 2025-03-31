// let name = window.prompt("Enter the name:");
// console.log("You entered:", name);


let n = parseInt(prompt("Enter a number:")); // Get input from user
console.log(n);
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += i;
}

console.log("The sum of natural numbers up to", n, "is:", sum);


const time=new Date();
console.log(time.toLocaleString());
let hour=time.getHours();
let greeting;
if (hour<10){
   greeting="good morning"
}
else if(hour<20){
    greeting="good day"

}
else{
    greeting="good evening"
}
console.log(greeting);



for(let i=1; i<=5; i++){
    console.log("arun gamal");
}
console.log("loop has ended");


     const car=["bmw","hondai","ducati","lamborgine","arungamal"];
     let text="";
     for(let i=0; i<car.length; i++){
        text+=car[i]+" ";
     }
    document.getElementById('demo').innerHTML="the car types are :" + text;




    let student={
        name:"arun",
        age:20,
        rollno:1
    };
    for(let i in student){
        console.log("key=",i ,"value=",student[i]);
    }



    let gameNum=65;
    let userNum=prompt("guess the number:");
    while(userNum!=gameNum){
        userNum=prompt("wronge number please entered the correcr number:");
    }
    console.log("congralulation you entered the correct number:");

    let header = "arun gamal";
    let tags = ["template strings", "javascript", "es6"];
    let html = `<h2>${header}</h2>`;  
    
    for (const x of tags) {
        html += `${x}`;  // Use backticks to correctly append HTML content
    }
    
    console.log(html);
    
    

