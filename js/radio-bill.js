// get a reference to the sms or call radio buttons
const radioBtn = document.querySelectorAll(".billItemTypeRadio");

//get a reference to the add button
const radioAddBtn = document.querySelector(".radioBillAddBtn");

// where to display
const callTotalTwo = document.querySelector(".callTotalTwo");
const smsTotalTwo = document.querySelector(".smsTotalTwo");
const totalTwo = document.querySelector(".totalTwo");

//create a variable that will keep track of the total bill
let [radioTotal, radioSmsTotal, radioCallTotal] = [0, 0, 0];

// reset the state of the fields
callTotalTwo.innerHTML = radioCallTotal.toFixed(2);
smsTotalTwo.innerHTML = radioSmsTotal.toFixed(2);
totalTwo.innerHTML = radioTotal.toFixed(2);

//add an event listener for when the add button is pressed
radioAddBtn.addEventListener("click", () => radioCalcBill());

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const radioCalcBill = () => {
    radioBtn.forEach(btn => {
        if(btn.checked){
            if(btn.value.toLowerCase().trim() === "sms") radioSmsTotal += 0.75;
            if(btn.value.toLowerCase().trim() === "call") radioCallTotal += 2.75;
            radioTotal = radioSmsTotal + radioCallTotal;
            callTotalTwo.innerHTML = radioCallTotal.toFixed(2);
            smsTotalTwo.innerHTML = radioSmsTotal.toFixed(2);
            totalTwo.innerHTML = radioTotal.toFixed(2);

            // change the color
            radioBillMargin(radioTotal);
        };
    });
};

const radioBillMargin = bill => {
    bill >= 50 && totalTwo.classList.add("danger"); 
    bill >= 30 && totalTwo.classList.add("warning");
    bill < 30 && totalTwo.classList.remove("warning");
    bill < 30 && totalTwo.classList.remove("danger");
}