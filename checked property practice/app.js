let userName = "hannah"
document.getElementById("myBtn").onclick = function() {

    const myCheckBox = document.getElementById("myCheckBox")
    const visaBtn = document.getElementById("visaBtn")
    const mastercardBtn = document.getElementById("masterCardBtn")
    const payPalBtn = document.getElementById("payPalBtn")
    
    if(myCheckBox.checked){
       console.log("you are susbscribed")
    }
    else{
      console.log("you're not susbscribed")
    }

    if(visaBtn.checked){
        console.log("You are paying with a visa")
    } else if(mastercardBtn.checked) {
        console.log("You are paying with a masterCard")
    } else if(payPalBtn.checked) {
        console.log("You are paying with payPal")
    } else {
        console.log("No radio button was selected")
    }
}

