
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