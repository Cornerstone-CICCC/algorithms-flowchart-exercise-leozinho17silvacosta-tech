let marks = 30
let grade;

if (marks >= 80) {
    grade = "A";
}   else if (marks >= 60) {
    grade = "B";
}   else if (marks >= 40) {
    grade = "C";
}   else {
    grade = "No Grade";
}

console.log(`The Marks grade is: ${grade}`);
console.log("Grade: " + grade);
