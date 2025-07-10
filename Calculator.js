/*console.log("Hello World!", 4+6, "Another log");
document.write("This is a document write");
console.error("This is a warning");
console.warn("This is a warning");

//variable:-
//cotainers that stores data values, these containers are called  a variables

var number1 = 23;
var number2 = 69;
console.log(number1+number2);


//Data types in javascript

/*
string(premitive)
number(premitive)
objects(reference)
booleans(premitive)
Symbols (premetive)
arrays (reference)
Symbols(premitive)
*/
//obejects
/*var marks = {
    Riyaansh:99,
    Ravi : 12,
    Rajesh :33
}
console.log(marks);

var a  = true;
var b =  false;


//arrays

var arr=[1,2,3,4,5,6,7,8,9,0,"bablu"];


//operators
var c = 20;
var d = 30;
console.log("the value of c + d is" ,c+d);
console.log("the value of c - d is" ,c-d);
console.log("the value of c * d is" ,c*d);
console.log("the value of c / d is" ,c/d);



var c = e ;
 var e = 3;
 e += 2;
 e /= 4;

 console.log(e);


 var x =20;
 var y =  40;

 console.log(x > y);
 console.log(x==y);
 console.log(x+y ==60);
 console.log(x<y);


//logical operators
 console.log(true && true);
 console.log(false && false);

 console.log(true || false);
 console.log(false || false);
 console.log(false||true);

console.log(!true);
console.log(!false);

*/







//Functions
/*function avg(a , b ) {
    return (a+b)/2 ; 
}

c  = avg(4 , 6 );
c0 = avg (14 , 16);
console.log("This  is the average of the first number ",c);
console.log("This is the average of the second number ",c0);
console.log("This is the sum of both the averages " ,c + c0);
console.log(c ,',', c0);



function avg(a , b , c , d , e) {
    return ((a+b+c+d+e)/5);
}

avg_Riyaansh = avg(69 , 45 , 59 , 64 , 55);
console.log("This is the average marks of Riyaansh Jain of class X of the second preboard:-",avg_Riyaansh);


*/





//CONDITIONAL 
/*
var age = 12;
if (age => 18){
    console.log("you are not a kid");
}

else{
    console.log("You are a kid");
}


//question
if (age > 18) {
    console.log("you can now drink rasna water");
}

else{
    console.log("You are not allowed to drink the rasna water");
}


let arr = [1,2,3,4,5,6,7,8];
/*for (var i= 0; i<arr.length;i++){
    console.log(arr[i])
};

arr.forEach(function(rand){
    console.log(rand);
})

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}

let j = 0;
do{
    console.log(arr[j]);
    j++;
}while(j<arr.length)


let arr = [1,2,3,4,5,6,7,8];
for(var i=0;i<arr.length;i++){
    if (i==2){
        continue;
    }
    console.log(arr[i])
}


let myArr = ["Riyaansh" , "Tia" ,"Deputy Kishore", "Amit" , "Taruna" , true , Boolean];
console.log(myArr.length);
myArr.pop();
myArr.push("Sad");
//myArr.shift();
myArr.unshift("Deputy Kishore", "Amit", "Taruna");
console.log(myArr);





let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
let j = 0;
do {
    console.log(arr[j]);
    j++;
    
} while (j < arr.length);




//String Methods in javascript


let myllovelystring = "Tia a bad girl bad bad bad bad bad bad bad bad ";
console.log(myllovelystring.lastIndexOf("bad"));

console.log(myllovelystring.slice(0,16));
console.log(myllovelystring.replace("girl", "Boy"));

//DATE

let myDate = new Date();
console.log(myDate.getDate(), myDate.getMonth() ,myDate.getFullYear() , myDate.getMinutes());

*/

//DOM MANIPULATION

//jb  bhe hume kisi ek element ko target kare;;

document.getElementById("click").style.background = 'red';
v