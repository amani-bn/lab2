'use strict'

var score = 0;

var yes='y';
var Y='yes';
var no='n';
var N='no';
var username=prompt('Please enter Your Name "');
alert('WELCOM  !!! '+username+' !!! To My WebSite');
var myGender='female';
var gender=prompt('Do You Think Im a Female ?');
while  (gender===null||gender===''){
    alert('Please  insert a value');
    gender=prompt('Do You Think Im a Female ? ');


}
while (gender.toLowerCase()!==yes &&gender.toLowerCase()!==Y&&gender.toLowerCase()!==no&&gender.toLowerCase()!==N){
    alert(' You must Answer Yes or No Question ? !');
    gender=prompt('Do You Think Im a Female ? ');


}
if (gender.toLowerCase()===yes||gender.toLowerCase()===Y) {
    console.log(gender);
    alert('Correct !!! Im a Female ');
score++;

}
else {
    console.log(gender);
    alert('NOO !!! its wrong ');


}
 var myFavColor='black';
 var guessFavcolor=prompt('Do You Think My Favorite Color Is Black ?');
 while (guessFavcolor===null||guessFavcolor===''){
    alert('Please insert a value');
    guessFavcolor=prompt('Do You Think My Favorite Color Is Black ?');
 }
 while (guessFavcolor.toLowerCase()!==yes&&guessFavcolor.toLowerCase()!==Y&&guessFavcolor.toLowerCase()!==no&&guessFavcolor.toLowerCase()!==N){

alert(' You Must Answer yes or no Question !');
guessFavcolor=prompt('Do You Think My Favorite Color Is Black ? ');

 }
 if (guessFavcolor.toLowerCase()===yes||guessFavcolor.toLowerCase()===Y){
    console.log(guessFavcolor);
    alert('Great !!! black its my favorite color  '); 
score++;

 }
 else {
    console.log(guessFavcolor);
    alert('NOO !!! its not my favorite color '); 

 }
 var myName='Amani';
 var guessMyName=prompt('Do You Think My Name is Amani ?');
 while (guessMyName===null||guessMyName===''){
    alert('Please insert a value');
    guessMyName=prompt('Do You Think My Name Is Amani ?');
 }
 while (guessMyName.toLowerCase()!==yes&&guessMyName.toLowerCase()!==Y&&guessMyName.toLowerCase()!==no&&guessMyName.toLowerCase()!==N){

alert(' You Must Answer yes or no Question !');
guessMyName=prompt('Do You Think My Name Is Amani ? ');

 }
 if (guessMyName.toLowerCase()===yes||guessMyName.toLowerCase()===Y){
    console.log(guessMyName);
    alert('Amazing !!! Amani its my name  '); 
    score++;

 }
 else {
    console.log(guessMyName);
    alert('NOO !!! its not my name '); 


 }

var myNationality='Jordaian';
 var guessMyNat=prompt('Do You Think i have jordaian nationality ?');
 while (guessMyNat===null||guessMyNat===''){
    alert('Please insert a value');
    guessMyNat=prompt('Do You Think i have jordaian nationality ?');
 }
 while (guessMyNat.toLowerCase()!==yes&&guessMyNat.toLowerCase()!==Y&&guessMyNat.toLowerCase()!==no&&guessMyNat.toLowerCase()!==N){

alert(' You Must Answer yes or no Question !');
guessMyNat=prompt('Do You Think i have jordaian nationality ? ');

 }
 if (guessMyNat.toLowerCase()===yes||guessMyNat.toLowerCase()===Y){
    console.log(guessMyNat);
    alert('Amazing !!! IM Jordaian  '); 
    score++;


 }
 else {
    console.log(guessMyNat); 
    alert('NOO !!! its wrong ');


 }
 var myFavDrink='Coffe';
 var guessFavDrink=prompt('Do You Think My Favorite Drink is Cofeffe ?');
 while (guessFavDrink===null||guessFavDrink===''){
    alert('Please insert a value');
    guessFavDrink=prompt('Do You Think My Favorite Drink is Cofeffe ?');
 }
 while (guessFavDrink.toLowerCase()!==yes&&guessFavDrink.toLowerCase()!==Y&&guessFavDrink.toLowerCase()!==no&&guessFavDrink.toLowerCase()!==N){

alert(' You Must Answer yes or no Question !');
guessFavDrink=prompt('Do You Think My Favorite Drink is Cofeffe ? ');

 }
 if (guessFavDrink.toLowerCase()===yes||guessFavDrink.toLowerCase()===Y){
    console.log(guessFavDrink);
    alert('GOOD JOB !!!! My Favorite Drink Is Coffe  ');
    score++;

 }
 else {
    console.log(guessFavDrink);
    alert('NOO !!! its not My Fanorite Drink'); 


 }

for(var i =1;i<=4;i++){
var guessNumber=parseInt(prompt('Lets Play !!!  Guess a Number ^_^'));
console.log("guessNumber>>>>",guessNumber);
var myNumber=11;
if (guessNumber===myNumber){
   console.log(guessNumber);
   alert('Congratss !! You Guessed it '+i+' attempt');
   score++;
   break;
}
else if (guessNumber>myNumber){
   console.log(guessNumber);
   alert('Too High');
}
else if (guessNumber<myNumber) {
   console.log(guessNumber);
   alert('Too Low');
}
if (i==4) {
   alert('All Your Attempts Have Been Finished & this is My Number' +myNumber);
}
}



var cars = ['BMW', 'Ford', 'Merceds', 'Jeep', 'Mazda'];
for (var guess = 0; guess < 6; guess++) {

   var guessCar = prompt('Please Guess My Favorite Car');
      var guessToLower = guessCar.toUpperCase();
   for (var i = 0; i < cars.length; i++) {
      if (guessToLower === cars[i]) {
         console.log('guessToLower>>> inside if ', guessToLower );
         alert('YES !!! Its My Favorite Car');
         score++;
          guess = 6;
         break;
      }
   }
   console.log("gues >>>> ", guess );
   if (guess !== 6) {
      alert('Sorry ,,,,, Try Again ');
   }
   console.log(guess);
}



alert('All Your Attempts Have Been Finished & this is  My Favorite cars BMW ,honda,Jeep,Mazda');
alert('Thank You , We Got Fun !! Your score is  ' + score + ' of 7 ');







