

// hosting in js.........................

console.log(a);
grret();
function grret(){
    console.log("Hy Vishal");
}

var a = 9;   // Declaration hosting on the top but initialization  is not
console.log(a);


// scope in js............................

// block scope.


{
    let x = 8;          // let is { } scope hota he.... 
}
console.log(x);
{
    var y = 8;         // var is not.... so its run
}
console.log(y);

//function scope.

function vishal (){
    let z = 9 ; 
    //console.log(z);            // let is { } scope hota he.... 
}
console.log(z);

function vishal (){
    var z = 9 ; 
                             // its run..
}
console.log(z);


// global scops.

var p = 9;

function vish(){
    console.log(p);
}

console.log(p);

// This keyWord..............................

const person = {
    firstName:"John",
    lastName: "Doe",
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }

  let vishal ={
    name: "Vishal",
    age : 33,
    lastNAme:"babar",
    fullname: function(){
        return this.firstName+ " "+this.lastNAme;
    }
  }

  let babar ={
    name :"Vishal",
    age : 22,
    city :"Khanepuri",
    lastName:"Babar",
    fullName : function(){
        return this.name + '' + this.lastName;
    }
  }

// Closures .......................................

const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();
  
  add();
  add();
  add();


  // map,filter,reduce...........................

  //map => creat a new arr.
  let arr = [22,33,44];

  let a =  arr.map((value,index,arr)=>{
    console.log(value,index,arr)
    return value + 1;
   })

  console.log(a);

  // filter..

  let arr2 = [22,33,44,5,6,7,80];
   let a2 = arr2.filter((a)=>{
    return a<10;
   })

   console.log(a2);

   // reduce.

   let arr3 = [22,33,44,5,6,7,8,0,9];
  let z = arr3.reduce((h1,h2)=>{
           return h1+h2;
   })
   console.log(z);