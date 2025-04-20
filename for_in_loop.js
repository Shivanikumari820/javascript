
// for in loop =  used in object to access the key and value in js 
  
        let fruits = {
            name : "Shivani",
            age : 20,
            city : "bhopal"
        }

        for (let key in fruits ){
            // console.log(key)  //name age city
            // console.log(key+ " " + fruits[key]);   //name Shivaniage 20 city bhopal
        }

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------        

// For-of loop = Used in array and string  ----->>>
        let arr1 = ["hello", "shivani", 1 ]
        for (let key of arr1){
            // console.log(key);        //hello shivani 1
        }
   

// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// Map = map method is iterate each element in array and perform some operation on that element and return in form of new array 
// used only in array and their methods
// syntax ->
   let  num = [2, 3, 4, 5, 6]

//    let new_arr = num.map( (e) => {    // e ki jgh kuch bhi likh skte ho , e = event
//     return  e*2;                        //use retrun keyword for return anything in map function in js 

//    })
// or
   let new_arr = num.map( (e) => e*2)

   

//    console.log(new_arr)    //[ 4, 6, 8, 10, 12 ]


// Interview question  --------->>>>
//high order function  = jo function apne andr kisi call-back function ko leta h , eg. .map
//callback function  = A callback function in JavaScript is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action 
// filter = same as map ,but used in like agr hame particular koi condition k according answer chahiye, jese even no. , odd no. aese
//    example :-
let  num2 = [2, 3, 4, 5, 6]

   let new_arr2 = num.filter( (e) => {    // e ki jgh kuch bhi likh skte ho , e = event
    return  e%2==0;                        //use retrun keyword for return anything in map function in js 

   })
//    console.log(new_arr2)    //[ 2,4,5 ]

let  num3 = [2, 3, 4, 5, 6,7,8,9]

   let new_arr3 = num3.filter( (e) => {
    return  e > 6;   

   })
   console.log(new_arr3)    //[ 7,8,9 ]


//forEach fucntion = The forEach() method executes a provided function once for each element in an array  ,, In this example, forEach() is a higher-order function that takes a callback function
// work for both map and filter function and never return keyword is used directly we console in the block

let num4 = [2, 3, 4, 5, 6, 7, 8, 9];

num4.forEach((e) => {
  console.log(e * 2);   //return string never return array 
});

   

   