                    // TERINARY OPERATORS IN FOR LOOPS
                                
//PROBLEM 1

// Given a variable 'score'/ use a ternary operator to determine the performance level;
// - "DISTINCTION " if score is 90 or above,
// - "FIRST CLASS" if score is between 75 to 89,
// - "SECOND CLASS" if score is between 60 to 74,
// - "THIRD CLASS" if score is between 35 to 59,
// - "FAIL" if score is below 35

//ANSWER.
    var marks = 58;

    if (marks>=90){
        console.log("DISTINCTION WITH",marks)
    }

    else if (marks>=75){
        console.log("FIRST CLASS WITH",marks)
    }

    else if (marks>=60){
        console.log("SECOND CLASS WITH",marks)
    }

    else if (marks>35){
        console.log("THIRD CLASS WITH",marks)
    }

    else{
        console.log("FAIL WITH",marks)
    }



//PROBLEM 2

// Given a variable "day", use a terinary operator to check if it's aweekend:
// - "Weekend" if "day" is "Saturday" or "Sunday";
// - "Weekday" for any other day.

    var day = "sunday";
    
    if (day== "saturday","sunday"){
        console.log("Weekend")
    }

    else{
        console.log("Weekday")
    }


//PROBLEM 3

// Given a string 'inputString' use the ternary operator to check if it is a palindrome. A string is considered a palindrome if it reads the same forwards and backwards.
// - **Output:** "Palindrome" if the string i a palindrome,
// - "Not a Palindrome" otherwise. 

    var inputString = "madam";
    var str = "";
    for (i=inputString.length-1;i>=0;i--){
        str+=inputString[i];
    }
    inputString==str?console.log("Palindrome"):console.log("Non Palindrome")


// PROBLEM 4

    var str = "HELLO";
    var op = "";
    for (i = 0; i <= str.length-1; i ++ ){
        op += str[i]
        console.log(op)
    }


