// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a=10;
document.write("Result :")
document.write("<br/>The Value of a is :"+a)
document.write("<br/><br/>==================================")
++a;
document.write("<br/>The Value of ++a is : "+a)
document.write("<br/>Now the Value of a is : "+a)
document.write("<br/><br/>The Value of ++a is : "+a)
++a;
document.write("<br/>Now the Value of a is : "+a)
--a;
document.write("<br/><br/>The Value of --a is : "+a)
document.write("<br/>Now the Value of a is : "+a)
document.write("<br/><br/>The Value of --a is : "+a)
document.write("<br/><br/>The Value of --a is : "+a)
--a;
document.write("<br/>The Value of --a is : "+a)
document.write("<br/>============================Q2=================")
// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
var a=2,b=1;
var result=--a - --b + ++b + b--;
document.write("<br/> a is "+a)
document.write("<br/> b is "+b)
document.write("<br/> result is "+result)
document.write("<br/> ===================================")
 --a;
 document.write("<br/> a is "+a)
document.write("<br/> b is "+b)
document.write("<br/> result is "+result)
document.write("<br/> ====================================")
  --a - --b;
document.write("<br/> a is "+a)
document.write("<br/> b is "+b)
document.write("<br/> result is "+result)
document.write("<br/> =====================================")
  --a - --b + ++b;
document.write("<br/> a is "+a)
document.write("<br/> b is "+b)
document.write("<br/> result is "+result)
document.write("<br/> =====================================")
 --a - --b + ++b + b--;
document.write("<br/> a is "+a)
document.write("<br/> b is "+b)
document.write("<br/> result is "+result)

var greet="Welcome";
var name=prompt("Enter your Name ")
alert( name+" "+greet+" to Pakistan.")

