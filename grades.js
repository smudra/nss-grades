/*
const scores = [82, 71, 62, 95, 90, 98, 69, 72, 63, 84, 64, 58, 87, 60];
const grades = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    F: 0
};

for (let i = 0; i < scores.length; i++) {
    if (scores[i] > 90) {
        //a = scores[i];
        //console.log("Number of A grade is: ", a);
        grades.A += 1;
        
   }else if (scores[i] > 80 && scores[i] < 91) {
       grades.B += 1;
   
   }else if (scores[i] > 70 && scores[i] < 81) {
    grades.C += 1;
   }else if (scores[i] > 60 && scores[i] < 71) {
    grades.D += 1;
   }else if (scores[i] < 61 ) {
    grades.F += 1;
   }
}
console.log("Number of A grade is: ", grades.A);
console.log("Number of B grade is: ", grades.B);
console.log("Number of C grade is: ", grades.C);
console.log("Number of D grade is: ", grades.D);
console.log("Number of F grade is: ", grades.F);


// Finding the highest & lowest grade in the array
var scoresSort = scores.sort();

for (let x = 0; x < scoresSort.length; x++) {
   
    var scoresHighest = scoresSort[x];
    var scoresLowest = scoresSort[0];
}
    console.log("Sorting the grades in ascending order: ", scoresSort);
    console.log("Showing the lowest grade: ", scoresLowest);
    console.log("The highest score is: ", scoresHighest);


    // find the highest and lowest grades.
var gradeArray = [grades.A, grades.B, grades.C, grades.D, grades.F];

console.log("Num of students getting A: ", gradeArray); 

    // find the highest grades
    var mostNumGrades = 0;
    mostNumGrades = gradeArray.sort(function(a, b){return b-a});

    console.log("Most numb of grades: ", mostNumGrades[0]);

// find the lowest grades
    var leastNumGrades = 0;
    leastNumGrades = gradeArray.sort(function(a, b){return a-b});

    console.log("Most numb of grades: ", leastNumGrades[0]);
*/

    // Another way of doing the first part using switch statement

    const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];
    const grades = { A: 0, B: 0, C: 0, D: 0, F: 0};

    for (let i = 0; i < scores.length; i++) { 
        switch(true) {
            case (scores[i] >= 91 && scores[i] < 101):
                grades.A += 1;
                console.log("in for", scores[i]);
                break;

            case (scores[i] >= 81 && scores[i] < 91):
                grades.B += 1;
                console.log("in for", scores[i]);
                break;

            case (scores[i] >= 71 && scores[i] < 81):
                grades.C += 1;
                console.log("in for", scores[i]);
                break;

            case (scores[i] >= 61 && scores[i] < 71):
                grades.D += 1;
                console.log("in for", scores[i]);
                break;

            default:
                grades.F += 1;
                console.log("in for", scores[i]);
        }
   
    } 
    
    var lowHigh = scores.sort(function(a, b){
            console.log(a, b)
            return a - b});
        console.log(lowHigh[0]);
        console.log("highest: ", lowHigh[lowHigh.length - 1])

        var currentGradeCount = 0;
        var mostFrequent = [];
        
        var newGradeCount = 100;
        var leastFrequent = [];

        // find most grades
        for (var a in grades) {
            if (grades[a] > currentGradeCount){
                mostFrequent = [a];
                currentGradeCount = grades[a];
                
            } 
            
            else if (grades[a] === currentGradeCount) {
                mostFrequent.push(a);
            }

            // find the least grades
            if (grades[a] < newGradeCount) {
                leastFrequent = [a];
                newGradeCount = grades[a];
            } else if (grades[a] === newGradeCount) {
                leastFrequent.push(a);
            }

            
        }

        console.log("Least Frequent grades is : ", leastFrequent);

        console.log("Most Frequent grades is : ", mostFrequent);
        console.log(lowHigh);

        console.log(grades);