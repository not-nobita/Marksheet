let english = parseFloat(prompt("Enter Your English Marks"));
let sindhi = parseFloat(prompt("Enter Your Sindhi Marks"));
let urdu = parseFloat(prompt("Enter Your Urdu Marks"));
let islamiyat = parseFloat(prompt("Enter Your Islamiyat Marks"));
let pakstudies = parseFloat(prompt("Enter Your Pakistan Studies Marks"));
let physics = parseFloat(prompt("Enter Your Physics Marks"));
let chemistry = parseFloat(prompt("Enter Your Chemistry Marks"));
let biology = parseFloat(prompt("Enter Your Biology Marks"));
let electivemath = parseFloat(prompt("Enter Your Elective Mathematics Marks"));
let totalmarks = 850;
let obt = english + sindhi + urdu + islamiyat + pakstudies + physics + chemistry + biology + electivemath;
console.log("My Total Marks Is " + obt + " From 850");
let per = (obt / totalmarks) * 100
console.log("My Percentage is " + per)
if (per >= 50) {
    console.log("RESULT: PASS")
    document.getElementById('result').innerHTML = "RESULT: PASS"
}
else {
    console.log("RESULT: FAIL")
    document.getElementById('result').innerHTML = "RESULT: FAIL"
}
document.getElementById('obt1').innerHTML = english
document.getElementById('obt2').innerHTML = sindhi
document.getElementById('obt3').innerHTML = urdu
document.getElementById('obt4').innerHTML = islamiyat
document.getElementById('obt5').innerHTML = pakstudies
document.getElementById('obt6').innerHTML = physics
document.getElementById('obt7').innerHTML = chemistry
document.getElementById('obt8').innerHTML = biology
document.getElementById('obt9').innerHTML = electivemath
document.getElementById('totalmarks').innerHTML = "850"
document.getElementById('obtainedmarks').innerHTML = obt
document.getElementById('percentage').innerHTML = "PERCENTAGE: " + per + " % "
if (per >= 90 && per <= 100) {
    console.log("Grade: A")
    document.getElementById('grade').innerHTML = "Grade: A";
}
else if (per >= 80 && per < 90) {
    console.log("Grade: B")
    document.getElementById('grade').innerHTML = "Grade: B";
}
else if (per >= 70 && per < 80) {
    console.log("Grade: C")
    document.getElementById('grade').innerHTML = "Grade: C";
}
else if (per >= 60 && per < 70) {
    console.log("Grade: D")
    document.getElementById('grade').innerHTML = "Grade: D";
}
else if (per >= 10 && per < 50) {
    console.log("Grade: F")
    document.getElementById('grade').innerHTML = "Grade: F";
}

