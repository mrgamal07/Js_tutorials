const fruits = ["banana","orange","lemon","apple","mango"];
const citrus = fruits.slice(1,3);
const abc = fruits.slice(-3,-1);
const fruits2 = fruits.toSpliced(2,0,"lemon","kiwi");
fruits.push("arun");
console.log(citrus); 
console.log(abc);
console.log(fruits2)
console.log(fruits);


let ages = [1,4,12];
function checkAdult(age){
    return age>18;
}
 console.log (ages.some(checkAdult));

 const months = ["janaury","february","mar","april"];
 const myMonths = months.with(2,"march");
 console.log(myMonths);


 function Person(name,age,eye){
    this.name = name;
    this.age = age;
    this.eye = eye;
 }
 const father = new Person("arun",20,"red");
 const mother= new Person("safal",22,"green");
 Person.prototype.nationality = "nepali";
 console.log("my father is" + father.nationality);
 console.log("my mother is" + mother.nationality);
 console.log(father.name +" " + father.age + " " + father.eye);
