let myLeads = []
const inputEl = document.getElementById("input-el") //input value
const inputBtn = document.getElementById("input-btn") //input button
const ulEl = document.getElementById("ul-el")  //list creation
const deleteBtn = document.getElementById("delete-btn") //delete button
const tabBtn = document.getElementById("tab-btn") //save tab to save values
 //converting the myLeads from string to array
let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
/*myLeads = JSON.parse(myLeads)
myLeads.push("www.epicleads.com")
myLeads = JSON.stringify(myLeads)
console.log(typeof myLeads) */


if(leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
} 



tabBtn.addEventListener("click", function(){
    // Save the url instead of logging it out
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
         //since one tab should be active, and in the current window at once
         // return variable should have one entry
         myLeads.push(tabs[0].url)
         localStorage.setItem("myLeads", JSON.stringify(myLeads))
         render(myLeads)
    })

})

function render(leads) {
    let listItems =[]
    //loop to take in input and print the same
    for(let i=0; i<leads.length; i++) {
    //rendering elements within javascript instead of html
        listItems += "<li><a href='#' target='_blank'>" + leads[i] + "</a></li>"
        console.log(listItems)
        
    }
    ulEl.innerHTML = listItems
    }
    
//deleting the contents of the sites saved in local storage
deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})
/*localStorage.setItem("myName", "Hannah Kongara")
let name = localStorage.getItem("myName")
console.log(name)
localStorage.clear() */

//pushing value after clicking the button
inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
//setting the value of myleads from array to string
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
//logging out the myLeads to save in localStorage
    console.log( localStorage.getItem("myLeads"))

    
})







