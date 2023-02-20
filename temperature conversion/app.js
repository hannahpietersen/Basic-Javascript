//invoking function to convert temp and submit
document.getElementById("submitBtn").onclick = function(){
  let temp;

  //checking if celcius button was clicked
  if(document.getElementById("cBtn").checked) {
     temp = document.getElementById("textBox").value 
     temp = Number(temp);
     temp = toCelcius(temp);
     document.getElementById("tempLabel").innerHTML = temp + " C";
    //checking if fahrenheit button was clicked
  } else if(document.getElementById("fBtn")) {
    temp = document.getElementById("textBox").value 
     temp = Number(temp);
     temp = toFahrenheit(temp);
     document.getElementById("tempLabel").innerHTML = temp + " F";
  } else {
    document.getElementById("tempLabel").innerHTML = "Select a unit";
  }


}


function toCelcius(temp){
   return (temp-32)*(5/9);
}

function toFahrenheit(temp) {
   return temp * 9/5 + 32;
}