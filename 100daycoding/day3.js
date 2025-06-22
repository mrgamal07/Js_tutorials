function multiply(intx,inty){
    return intx*inty;
}
let result=multiply(7,7);
document.getElementById('demo').innerHTML="the result was:"+result;


let x= multiply(4,5);
document.getElementById('mul').onclick=function(){
    this.innerHTML="the result was:"+x;

}

function toCelsius(f){
    return(5/9) *(f-32);
}
let value = "the temperature is"+ toCelsius(77) +"celsius.";
document.getElementById('tofahrenheit').innerHTML= "the fahrenheit to celsius is:" +value;

// global variables =  let carName="bmw"; 


// local variables
let text="outside:" + " " +typeof carName;
document.getElementById('local1').innerHTML="the local 1 is:" +text;

function myfunction(){
    let carName="bmw";
    let text="inside:" + " "+ typeof carName +" " +carName;
    document.getElementById('local2').innerHTML="the locar 2 is:" +text;
}


const car={type:"fiat",model:"500",color:"black"};
document.getElementById('global1').innerHTML="the car type is:"
+ car.type + " " + car.model;

let person = { firstName:"arun",lastName:"gamal",age:"20"};
document.getElementById('global2').innerHTML="the person name is:" + person.firstName + " " + person.lastName  + " "+"is" + " " + person.age+ " " +"year old";


const information={
    firstName:"arun",lastName:"gamal",age:"20"
};
console.log(information["firstName"]);
console.log(information["firstName"] + " " + information["lastName"] + " is " + information["age"] + " years old.");
console.log(information.age)

const me= {
    firstName: "John",
    lastName: "Doe",
    age: 30
};

// Show output in a pop-up alert box
alert("First Name: " + me.firstName + "\n" +
      "Last Name: " + me.lastName + "\n" +
      "Age: " + me.age);

const people={
    firstName:"rohan",lastName:"maharjan",id:1000,
    fullName: function(){
        return this.firstName +" " + this.lastName;
    }
};
document.getElementById('full').innerHTML=people.fullName();



const profile={
    userName:"arun gamal",
    isfollow:false,
    following:100,
    bio:"i am arun",
};
console.log(profile);
   

let age=20;
age>=18 ? "arun":"gamal";
console.log(age);


let agee=22;
 let resultt= agee>=18 ? "arunmmm":"gamal";
console.log(resultt);