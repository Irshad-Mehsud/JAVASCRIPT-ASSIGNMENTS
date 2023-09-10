//==============================================Q7==========================
// 7. Write a program to implement checkout process of a 
// shopping cart system for an e-commerce website. Store 
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.
var item1price=650;
var item1quantity=3;
var item2price=100;
var item2quantity=7;
var shippingcharges=100;
var total=(item1price*item1quantity) + (item2price*item2quantity) +shippingcharges
document.write("<br/>Price of item 1 is "+item1price)
document.write("<br/> Quantity of item 1 is "+item1quantity)
document.write("<br/>Price of item 2 is "+item2price)
document.write("<br/> Quantity of item 2 is "+item2quantity)
document.write("<br/>Shipping Charges "+shippingcharges)
document.write("<br/><br/>Total Cost of your order is "+total)
document.write("<br/><br/>============================Mark Sheet====================================")
//==========================================Q8======================================
// 8. Store total marks & marks obtained by a student in 2 
// variables. Compute the percentage & show the result in 
// your browser
var obtainedmarks=954;
var totalmarks=1100;
var percentage=obtainedmarks/totalmarks*100;
document.write("<br/>Total Marks : "+totalmarks)
document.write("<br/>Obtained Marks : "+obtainedmarks)
document.write("<br/>Percentage : "+percentage)
//========================================Q9==========================================
// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a 
// script to convert the total currency to Pakistani Rupees. 
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee 
// and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<br/>====================================CURRENCY IN PKR====================================")
var $=10;
var riyal=25;
var totalcurrency=($ *104.80) + ( riyal *28);
document.write("<br/>Total Currency in PKR : "+totalcurrency)
//===========================================Q10=======================================
// 10. Write a program to initialize a variable with some 
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
document.write("<br/>=====================Q10=========================")
var num=45;
var result= (num +5*10)/2;
document.write("<br/> The result is :"+result)
document.write("<br/><br/>=====================Q11=========================")
// 11. The Age Calculator: Forgot how old someone is? 
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored 
// values.
// Output them to the screen like so: “They are either NN or NN
// years old”.
var currentage=2023;
var birthage=2003;
var myage=currentage-birthage;
document.write("<br/>Current Year : "+currentage)
document.write("<br/>Birth year : "+birthage)
document.write("<br/>your age is : "+myage)
document.write("<br/><br/>=====================Q12=========================")
// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The 
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
var radius=20;
var pi=3.142;
var Circumference=2*pi*radius;
var area=pi*radius*radius;
document.write("<br/>Radius of a circle : "+radius)
document.write("<br/>The Circomference is : "+Circumference)
document.write("<br/>The Area is : "+area)
document.write("<br/><br/>=====================Q13=========================")
// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is? 
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need 
// NNNN to last you until the ripe old age of NN”.
