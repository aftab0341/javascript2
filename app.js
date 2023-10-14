var city = prompt("please enter your city")

if (city == "karachi"){
    alert("Welcome city of lights")
}else{
    alert("city not found")
}



var gender = prompt("please enter your gender (male/female) ");

if (gender == "male") {
alert ("Good Morning Sir.")
}

else if (gender == "female") {
alert ("Good Morning Maam")
}

else {
alert("invalid input");
}


// var colour = prompt("please enter your traffic signal colour ");

// if (colour == "red") {
// alert ("Must stop.")
// }

// else if (colour == "yellow") {
// alert ("ready to move")
// }

// else if (colour == "green") {
//     alert ("move now")
//     }

// else {
// alert("invalid colour");
// }


// var fuel =Number(prompt("enter remaning fuel"))
// if (fuel  < 0.25){
//     alert("please refill fuel")
// }else{
//     alert("you have enough fuel")
// }


// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// alert will display

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Alert will not display because increment will be after if condition


// var c = 12;
// if (c++ === 13){
// alert("condition 1 is False");
// }

// if (c === 13){
// alert("condition 2 is true");
// }

// if (++c < 14){
// alert("condition 3 is False");
// }

// if(c === 14){
// alert("condition 4 is true");
// }


// var materialCost = 20000;
// var laborCost = 2000;

// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost){
// alert("The cost equals,and alert will display");
// }

// if (true){
//     alert("True, will display");
//     }
//     if (false){
//     alert("False,  will not display");
//     }


// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }


// var eng =Number(prompt("Enter English marks"))

// var urdu =Number(prompt("Enter Urdu marks"))

// var math =Number(prompt("Enter Math marks"))

// var totalMarks = 300;

// var ObtMarks = eng + urdu + math;

// var percent = (Obtmarks / totalMarks) * 100;

// document.write("<h1>Marks Sheet <h1/> <br><br><br>") 
// document.write("Total Marks" + "<b>" + totalmarks + "<b/><br>") 
// document.write("Marks obtained" + obtMarks + "<br>") 
// document.write("Percentage:" + Percent+ "%"+ "<br>")

// if(percent >=80){
//     document.write("Grade: A-one" + "<br>")
//     document.write("Remarks: Excellent" + "<br>")
// }


// else if(percent <=79 && percent >=70){
//     document.write("Grade: A" + "<br>")
//     document.write("Remarks: Good" + "<br>")
// }


// else if(percent <=69 && percent >=60){
//     document.write("Grade: B" + "<br>")
//     document.write("Remarks: You need to improve" + "<br>")}


// else if(percent <=60){
//     document.write("Grade: Fail" + "<br>")
//     document.write("Remarks: Sorry.. Work Hard" + "<br>")}

  
//     (7 guess game)
//     var secret = 5
//     var guess = Number(prompt("Guess any number between 1 to 10"))

//     if (guess === secret){
//         alert("Bingo! Correct Answer.")
//     }else if(guess ===  4 || guess === 6){
//         alert("Close enough to correct number")
//     }else{
//         alert("Wrong Answer")
//     }

//     var num =Number(prompt("enter number"))
//     if (num % 3 == 0){
//         alert("this number can be divide by three")
//     }else{
//         alert("not divide by 3")
//     }

//     var num =Number(prompt("enter number"))
//     if (num % 2 == 0){
//         alert("even number")
//     }else{
//         alert("this is odd number")
//     }

//     var a = Number(prompt("Enter first Number"))
// var b = Number(prompt("Enter second Number"))
// var operator = prompt("Enetr operator Number")

// if (operator === "+") {
//     alert(a + b)
// }
// if (operator === "-") {
//     alert(a - b)
// }
// if (operator === "*") {
//     alert(a * b)
// }
// if (operator === "/") {
//     alert(a / b)
// }

// var temperature =Number(prompt("Enter temperature"))
// if (temperature > 40) {
//     alert ("It is too hot outside.");
// } else if (temperature > 30) {
//     alert ("The Weather today is Normal.");
// } else if (temperature > 20) {
//     alert ("Today’s Weather is cool.");
// } else if (temperature > 10) {
//     alert ("OMG! Today’s weather is so Cool.");
// } else {
//     alert ("It is freezing outside!");
// }
