//get a reference to the add button
const radioAddBtn = document.querySelector(".radioBillAddBtn");

// create instance of my factory function
const radioBill = radioBillFactory()

// create update template function
const radioBillTemplate = () => {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".radioTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where users is to be displayed
    var userDataElem = document.querySelector(".radioData");

    // use the compiled the template
    var userDataHTML = userTemplate({
        callCost: radioBill.getCallTotal().toFixed(2),
        smsCost: radioBill.getSmsTotal().toFixed(2),
        radioTotalCost: radioBill.getTotal().toFixed(2)
    });
    userDataElem.innerHTML = userDataHTML;
}

radioBillTemplate()

//add an event listener for when the add button is pressed
radioAddBtn.addEventListener("click", () => radioCalcBill());

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
const radioCalcBill = () => {
    // get a reference to the sms or call radio buttons
    const btn = document.querySelector(".billItemTypeRadio:checked");
    
    if(btn.checked){
        if(btn.value.toLowerCase().trim() === "sms") radioBill.sendSms();
        if(btn.value.toLowerCase().trim() === "call") radioBill.makeCall();
        radioBillTemplate()
        // change the color
        radioBillMargin();
    };
};

const radioBillMargin = bill => {
    const totalTwo = document.querySelector(".totalTwo");
    totalTwo.classList.remove("warning");
    totalTwo.classList.remove("danger");
    totalTwo.classList.add(radioBill.classTotal()); 
}