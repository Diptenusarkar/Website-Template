// Using methods to grab the HTML elements
// By Vaibhav Yadav
let person_increase = document.getElementById('btnincrease')
let person_decrease = document.getElementById('btndecrease')
let showdata = document.getElementById('paisa')
let showpeople = document.getElementById('noofpeople')

// Taking noofpeople listed on the DOM
let noofpeople = Number(showpeople.innerHTML); 
// Creating Increase funtions to increase the number of people, update the number of people to DOM, and call calculatetip() funtions
const increase = () => {
     noofpeople++;
     showpeople.innerHTML = noofpeople;
     calculatetip();
}
// Creating decrease funtions to increase the number of people, update the number of people to DOM, and call calculatetip() funtions
// also check wheather the number should not be less than equal to 1, if it is return the value as it is only
const decrease = () => {
    if(noofpeople<=1){
        return
    }
    else{
        noofpeople--;
        showpeople.innerHTML = noofpeople;
        calculatetip();
    }
}
// Finally calculatetip functions to calculate the tiptotal and reflect back to DOM
function calculatetip(){
    let amounts = Number(document.getElementById('amount').value)
    let tip = Number(document.getElementById('tippercent').value)
    let tipamount = amounts * tip/100;
    let tiptotal = tipamount + amounts;
    tiptotal = tiptotal/noofpeople;
    showdata.innerHTML = "₹ " + tiptotal.toFixed(2)
}