function calculateLove() {

let yourName=document.getElementById("yourName").value.trim();

let crushName=document.getElementById("crushName").value.trim();

if(yourName===""||crushName===""){
alert("Please enter both names ❤️");
return;
}

document.getElementById("loading").style.display="block";
document.getElementById("result").innerHTML="";
document.getElementById("funny").innerHTML="";

setTimeout(function(){

document.getElementById("loading").style.display="none";

let love=Math.floor(Math.random()*100)+1;

let message="";

if(love>=90){
message="💍 Wedding loading... 😂";
}else if(love>=70){
message="😍 You two look perfect together!";
}else if(love>=50){
message="😊 There is hope. Don't give up!";
}else if(love>=30){
message="😂 Better stay friends!";
}else{
message="💀 Even your Wi-Fi has a stronger connection.";
}

document.getElementById("result").innerHTML="❤️ "+love+"% ❤️";

document.getElementById("funny").innerHTML=message;

alert("😂 GOTCHA! This friend-group game shares your result with K-EPHRAIM.");

},3000);

  }
