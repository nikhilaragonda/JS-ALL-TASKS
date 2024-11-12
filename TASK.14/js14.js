                // FUNCTION IN JAVASCRIPT
                // ***** PROBLEMS *****

// 1. Write a function to check weather input number is EVEN or ODD:

function num(x){

    if (x.length%2==0){
        console.log("Even Number")
    }
    else if(x >= "a" && x <= "z"){
        console.log("Invalid Number")
    }
    else{
        console.log("Odd Number")
    }
    
}
num([2,3,45])
num([2,4,6,8])



// 2. Write a function check wheather input string is PALINDROME or NOT:

var str1 = "";
function string(x){
    for(i=x.length-1;i>=0;i--){
        str1+=x[i];
       
    }
    if (str1 == x){
        console.log("PALINDROME")
    }
    else{
        console.log("Not a Palindrome")
    }
}
string("mom")


// 3. Write a function check LARGEST NUMBER among three Numbers:

function num(x){
    if(x[0]>x[1] && x[0]>x[2]){
        console.log(x[0])
    }
     else if (x[0]<x[1] && x[1]>x[2]){
         console.log(x[1])
     }
     else if (x[0]<x[2] && x[1]<x[2]){
         console.log(x[2])
     }
    else if((x[0]>="a" && x[0]<="z") || (x[1]>="a" && x[1]<="z") || (x[2]>="a" && x[2]<="z")){
        console.log("Invalid Number")
    }
}
num(["d",1234,234])



   


