            // SWITCH STATEMENT LOGICAL OPERATORS

// 1. Voting Eligibility
    
    var age = 20;
    var citizenship = true;

    if (age >= 18 && citizenship){
        console.log("Canvote")
    }

    else{
        console.log("Can not Vote ")
    }

//2. Admission to a Club

    var age = 21;
    var invitation = !true;

    if (age >= 21 || invitation){
        console.log("canEnterClub")
    }

    else{
        console.log("canNotEnterClub")
    }

// 3. Discount Eligibility

    var ismember = !true;
    var age = 60;

    if (ismember || age>= 65){
        console.log('is Eligible For Discount')
    }
    else{
        console.log('is Not Eligible For Discount')
    }


// 4. Scholoarship Eligibility

    var gpa = 3.0;
    var extracurriculars = true;
    var recommendation  = !true;

    if ((gpa >= 3.5 && extracurriculars) || recommendation){
        console.log("Is Eligible For Scholarship")
    }

    else{
        console.log("Is Not Eligible For Scholarship")
    }

