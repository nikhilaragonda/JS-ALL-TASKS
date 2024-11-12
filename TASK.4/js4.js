// 1. write a JavaScript code to add  an element to the end of an array using the push method.

// Example: [1, 2, 3] -> [1, 2, 3, 4]

var arr = [1,2,3];
 arr.push(4);
 console.log(arr);    //output-- [ 1, 2, 3, 4 ]

 // 2. write a JavaScript code to remove  the last element from an array using the pop method.

// Example: [1, 2, 3, 4] -> [1, 2, 3]

var arr1 = [1, 2, 3, 4];
arr1.pop();
console.log(arr1);   //output-- [ 1, 2, 3 ]

// 3. write a JavaScript code to add  an element to the beginning of an array using the unshift.

// Example: [2, 3, 4] -> [1, 2, 3, 4]

var arr2 =[2, 3, 4];
arr2.unshift(1);
console.log(arr2);      //output-- [ 1, 2, 3, 4]


// 4. write a JavaScript code to remove  the first element from an array using the shift method.

// Example: [1, 2, 3, 4] -> [2, 3, 4]

var arr3 = [1, 2, 3, 4];
arr3.shift();
console.log(arr3);      //output-- [2, 3, 4]

// 5. write a JavaScript code to convert an array into string the join method.

// Example: [1, 2, 3, 4] -> "1234"

var arr4 = [1, 2, 3, 4];
let x = arr4.join('');
console.log(x);     //output-- 1234



// 1. what will be the output of [1, 2, 3, 4].pop() ?      //Answer -- B

A) [1, 2, 3, 4]
B) [1, 2, 3]
C) [2, 3, 4]
D) Error

var ar1=[1,2,3,4]; //Here we are declaring the variable with an array
ar1.pop();         //Here we are using pop method to remove the last element in the array
console.log(ar1); //output-- [ 1, 2, 3 ]  -- after pop method called array we log the variable to get output



// 2. what will be the output of [1, 2, 3].push(4) ?        //Answer -- A

A) [1, 2, 3, 4]
B) [1, 2, 3]
C) [2, 3, 4]
D) Error

var arr1 = [1, 2, 3, 4];     //Here we are declaring the variable with an array
 arr1.push(4);               //Here we are using push method to add the last element in the array
 console.log(arr); //output-- [ 1, 2, 3, 4 ]  -- after push method called array we log the variable to get output



// 3. what will be the output of [1, 2, 3, 4].shift() ?        //Answer -- C

A) [1, 2, 3, 4]
B) [1, 2, 3]
C) [2, 3, 4]
D) Error


var arr3 = [1, 2, 3, 4];      //Here we are declaring the variable with an array
arr3.shift();                 //Here we are using shift method to remove the first element in the array
console.log(arr3);  //output-- [2, 3, 4] //-- after shift method called array we log the variable to get output

// 4. what will be the output of [2, 3, 4].unshift(1) ?        //Answer -- B

A) [2, 3, 4]
B) [1, 2, 3, 4]
C) [1, 3, 4]
D) Error


var arr2 =[2, 3, 4];             //Here we are declaring the variable with an array
arr2.unshift(1);                //Here we are using unshift method to add the element in first  in the array
console.log(arr2); 

// 1. what will be the output of [1, 2, 3].join('') ?      //Answer -- A

A) 123
B) [1, 2, 3]
C) [2, 3, 4]
D) Error


var arr4 = [1, 2, 3, 4];         //Here we are declaring the variable with an array
let x1 = arr4.join('');          // we are calling arry by the join method. The Join method concatenates all elements of the array into a single string.
                                //By passing an empty string "" as the argument to join, it indicates that there should be no characters placed between the elements when they are combined.
console.log(x1);                //when we log x1 variable it gives concated elements of array inform of single string 





