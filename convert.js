// Variable

let convertBtn = document.getElementById("convert-btn")
let enteredValue = document.getElementById("input-number")
let lengthVal = document.getElementById("length-val")
let volumeVal = document.getElementById("volume-val")
let massVal = document.getElementById("mass-val")

convertBtn.addEventListener("click", function(){

    // code for the length values
    let metres = enteredValue.value /3.281
    let feet = enteredValue.value * 3.281
    lengthVal.textContent = `${enteredValue.value} Metres = ${feet.toFixed(3)} Feet | ${enteredValue.value} Feet = ${metres.toFixed(3)} Metres`

    // code for the volume values

    let litres = enteredValue.value/ 3.785

    let gallons =  enteredValue.value *  3.785
    volumeVal.textContent = `${enteredValue.value} Litres = ${litres.toFixed(3)} Gallons | ${enteredValue.value} Gallons = ${gallons.toFixed(3)} Litres`

    // code for mass values

    let kilograms = enteredValue.value * 2.205;
    let pounds = enteredValue.value / 2.205

    massVal.textContent = `${enteredValue.value} Kilograms = ${kilograms.toFixed(3)} Pounds | ${enteredValue.value} Pounds = ${pounds.toFixed(3)} Kilograms`


})