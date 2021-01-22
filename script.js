function compute()
{
var AmountElement = document.getElementById("Amount");
var amount = document.getElementById("Amount").value;
if( amount=='' || amount <= 0){
    window.alert("Enter a positive number");
    AmountElement.focus();
    AmountElement.value = '' ;
    return false ;
       }
var rate = document.getElementById("Interest Rate").value;
var years = document.getElementById("No. of Years").value;
var realinterest = parseInt((amount * years * (rate / 100)));  
var currentdate = new Date();
var y = parseInt(currentdate.getFullYear()) + parseInt(years)   ; 
document.getElementById("result").innerHTML = 
  '<p>If you deposit '+amount+'<br/>'+'at an interest rate of '+rate+'%<br/>'+'You will receive an amount of '+realinterest+'<br/>'+'in the year '+y+'<br/></p>' ; 
}

function onsliderchange(){
    var rate = document.getElementById("Interest Rate").value;
    document.getElementById("slidder").innerHTML = rate + '%' ;

}