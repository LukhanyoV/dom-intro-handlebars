// get reference to the input
const billTypeText = document.querySelector(".billTypeText");

//get a reference to the add button
const addToBillBtn = document.querySelector(".addToBillBtn");

// make instance of my text bill factory function
const textBill = textBillFactory()

//create a variable that will keep track of the total bill
let [total, callTotal, smsTotal] = [textBill.getTotal(), textBill.getCallTotal(), textBill.getSmsTotal()];

// create update template function
const textBillTemplate = () => {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".userTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".userData");

    // use the compiled the template
    var userDataHTML = userTemplate({
        callCost: textBill.getCallTotal().toFixed(2),
        smsCost: textBill.getSmsTotal().toFixed(2),
        textTotalCost: textBill.getTotal().toFixed(2)
    });
    userDataElem.innerHTML = userDataHTML;
}

textBillTemplate()

addToBillBtn.addEventListener("click", () => {
    // increase the values
    if(billTypeText.value.toLowerCase().trim() === "sms") textBill.sendSms();
    if(billTypeText.value.toLowerCase().trim() === "call") textBill.makeCall();
    textBillTemplate()
    textBillMargin()
});

// change the color based on the value of the bill
const textBillMargin = () => {
    const totalOne = document.querySelector(".totalOne");
    totalOne.classList.remove("warning");
    totalOne.classList.remove("danger");
    totalOne.classList.add(textBill.classTotal()); 
};