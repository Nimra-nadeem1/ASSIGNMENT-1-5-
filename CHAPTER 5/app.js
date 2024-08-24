document.write("<h1>CHAPTER 5</h1>");
document.write("<h2>QUESTION # 1:</h2>");
var num1 = 3;
var num2 = 5;
var sum = num1 + num2;
document.write("Sum of " + num1 + " and " + num2 + " is " + sum);


// document.write("<h2>QUESTION # 2:</h2>");
// var num1 = 10;
// var num2 = 5;
// var sum = num1 - num2;
// document.write("Difference of " + num1 + " and " + num2 + " is " + sum);


document.write("<h2>QUESTION # 2:</h2>");
document.write("<h3>PART (I):</h3>");
var num1 = 10;
var num2 = 5;
var diff = num1 - num2;
document.write("Difference of " + num1 + " and " + num2 + " is " + diff);


document.write("<h3>PART (II):</h3>");
var num1 = 3;
var num2 = 5;
var result = num1 * num2;
document.write("Multiplication of " + num1 + " and " + num2 + " is " + result);


document.write("<h3>PART (III):</h3>");
var num1 = 10;
var num2 = 2;
var result = num1 / num2;
document.write("Division of " + num1 + " and " + num2 + " is " + result);


document.write("<h3>PART (IV):</h3>");
var num1 = 15;
var num2 = 4;
var result = num1 % num2;
document.write("Module of " + num1 + " and " + num2 + " is " + result);


document.write("<h2>QUESTION # 3:</h2>");
var number ;
document.write("Value after variable declaration is " + number + "<br>");
number = 8;
document.write("Initial value: " + number + "<br>");
number += 1;
document.write("Value after increment is: " + number + "<br>");
number = number + 7;
document.write("Value after addition is: " + number + "<br>");
number -= 1;
document.write("Value after decrement is: " + number + "<br>");
number = number % 3;
document.write("The remainder is: " + number);



document.write("<h2>QUESTION # 4:</h2>");
var ticketPrice = 600;
var buy5Tickets = 600*5;
document.write("Total cost to but 5 tickets to a movie is " + buy5Tickets + "PKR");


document.write("<h2>QUESTION # 5:</h2>");
var num = 4;
document.write("Table of 4:" + "<br><br>" + num + "*1=" + num*1 + "<br>" + num + "*2=" + num*2 + "<br>" + num + "*3=" + num*3 + "<br>" + num + "*4=" + num*4 + "<br>" + num + "*5=" + num*5 + "<br>" + num + "*6=" + num*6 + "<br>" + num + "*7=" + num*7 + "<br>" + num + "*8=" + num*8 + "<br>" + num + "*9=" + num*9 + "<br>" + num + "*10=" + num*10 );



document.write("<h2>QUESTION # 6:</h2>");
var tempCalcius = 25;
var tempFarhen = 70;
var calciusTOfarhen = (tempCalcius * (9/5) ) + 32;
var farhenTOcalcius = (tempFarhen - 32) * (5/9);
document.write(tempCalcius + "C is " + calciusTOfarhen + "F" + "<br>" + tempFarhen + "F is " + farhenTOcalcius + "C");


document.write("<h2>QUESTION # 7:</h2>");
var priceofitem1 = 650;
var priceofitem2 = 100;
var quanofitem1 = 3;
var quanofitem2 = 7;
var shippingcahrges = 100;
var totalofitem1 = 650*3;
var totalofitem2 = 100*7;
var total = totalofitem1 + totalofitem2 + shippingcahrges;
document.write("<h1>Shopping Cart</h1>" + "<br><br>" + "Price of item 1 is " + priceofitem1 + "<br>" + "Quantity of item 1 is " + quanofitem1 +  "<br>" + "Price of item 2 is " + priceofitem2 + "<br>" + "Quantity of item 2 is " + quanofitem2 + "<br>" + "Shipping charges " + shippingcahrges + "<br><br>" + "Total cost of your order is " + total);



document.write("<h2>QUESTION # 8:</h2>");
var totalmarks = 980;
var obtainedmarks = 804;
var percentage = (obtainedmarks/totalmarks)*100;
document.write("<h1>Marks Sheet</h1>" + "<br>" + "Total Marks: " + totalmarks + "<br>" + "Obtained Marks: " + obtainedmarks + "<br>" + "Percentage: " + percentage + "%");


document.write("<h2>QUESTION # 9:</h2>");
var dollars = 10;
var riyals = 25;
var currencyINPKR = (10*104.80) + (25*28);
document.write("Total Currency in PKR is: " + currencyINPKR);


document.write("<h2>QUESTION # 10:</h2>");
var num = 2;
var result = ((2+5)*10)/2;
document.write(result);


document.write("<h2>QUESTION #11:</h2>");
var currentyear = 2024;
var birthyear = 2002;
var age = currentyear - birthyear;
document.write("<h1>Age Calculator</h1>" + "<br>" + "Current year = " + currentyear + "<br>" + "Birth year = " + birthyear + "<br>" + "Your age is: " + age);



document.write("<h2>QUESTION # 12:</h2>");
var radius = 20;
var circum = 2*(3.142)*radius;
var area = (3.142)*radius*radius;
document.write("The Geometrizer" + "<br>" + "Radius of a circle = " + radius + "<br>" + "The circumference is = " + circum + "<br>" + "The area is = " + area);



document.write("<h2>QUESTION # 13:</h2>");
var favsnack = "choclate chip";
var age = 22;
var maxage = 65;
var snackperday = 3;
var agediff = 65-22;
var totalsnack = agediff * snackperday;
document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>" + "Favourit snack: " + favsnack + "<br>" +"Current age:" + age + "<br>" + "Estimated maximum age: " + maxage + "<br>" + "Amount of snacks per day: " + snackperday + "<br>" + "You will need " + totalsnack + " choclate chip to last you until the ripe old age of " + maxage);


document.write("<br><br><br>");