//get a reference to the calculate button
const calculateBtn = document.querySelector(".calculateBtn");

//get a reference to the billTotal element
const billTotal = document.querySelector(".billTotal");

//get a reference to the billString
const billString = document.querySelector(".billString");

const calculateBtnClicked = () => {
    var billType = billString.value;    
    let bills = billType.toLowerCase().replace(/\s/g, '').split(',');
    let total = bills.map(bill => bill === "call" ? 2.75 : bill === "sms" ? 0.75 : 0).reduce((sum, c) => sum + c,0);
    let roundedTotal = total.toFixed(2); 
    billTotal.innerText = roundedTotal;
    // decide the color on submit
    billMargin(roundedTotal);
};

//link the function to a click event on the calculate button
calculateBtn.addEventListener("click", () => calculateBtnClicked());

// change the color based on the value of the bill
const billMargin = bill => {
    bill >= 30 && billTotal.classList.add("danger"); 
    bill >= 20 && billTotal.classList.add("warning");
    bill < 20 && billTotal.classList.remove("warning");
    bill < 30 && billTotal.classList.remove("danger");
};