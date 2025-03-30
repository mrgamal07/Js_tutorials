function myfunctionn(){
    document.getElementById('day1').innerHTML="gamal!!";
}
 document.getElementById('six').onclick=function(){
    document.getElementById('six').innerHTML="6";
 }
    var x;
    x=5;
    var y=5;
    var z=x+y;
    document.getElementById('add').innerHTML="the value of z is:"+z;
    
    const price1=5;
    const price2=10;
    let total=price1+price2;
    document.getElementById("six").innerHTML="the total is:"+total;

    const pi=3.14;
    let person="arun gamal";
    let answer="yes i am";
    document.getElementById('var').innerHTML= "the pi is:" + pi+"<br>" + person +"<br>" +answer;


    let Name="arun"+ " " + "shrestha";
     elm=document.getElementById('concatenated');
     elm.innerHTML= "the name was:"+Name;


     const cars=["abc", "bca", "def"];
     cars.push("bmw");
     document.getElementById('const').innerHTML="the array is:"+cars;

     const car={
      type:"Big",
      model:"BMW",
      year:2018,
      color:"red",
     }
     car.color="blue";
     car.owner="arun";
     document.getElementById('array').innerHTML="car owner is:"+car.owner + car.year+car.color+car.model+car.type;
     "use strict"
     let arun=3.33;