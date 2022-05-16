// get a reference to the sms or call radio buttons
const radioBtnForSettings = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
const smsCostSetting = document.querySelector(".smsCostSetting");
const callCostSetting = document.querySelector(".callCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

// references to the totals
const callTotalSetttings = document.querySelector(".callTotalSettings");
const smsTotalSetttings = document.querySelector(".smsTotalSettings");
const totalSetttings = document.querySelector(".totalSettings");

//get a reference to the add button
const radioAddBtnSetting = document.querySelector(".radioAddBtnSetting");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// instancce of my factory function
const billy = BillSettings();

// reset the fields
callTotalSetttings.innerHTML = billy.getTotalCost().toFixed(2);
smsTotalSetttings.innerHTML = billy.getSmsCostTotal().toFixed(2);
totalSetttings.innerHTML  = billy.getCallCostTotal().toFixed(2);

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", () => {
    // check for less than 0
    let oops = false;
    [callCostSetting.value, smsCostSetting.value, warningLevelSetting.value, criticalLevelSetting.value].forEach(item => {
        if((item-"") < 0) oops = true;
    });

    if(oops === true){
        alert("Please make sure your inputs in settings are greater than 0 ");
    };
    
    if(criticalLevelSetting.value <= warningLevelSetting.value && (criticalLevelSetting.value + warningLevelSetting.value) > 0){
        alert("Notice: Your Critical Level is less/equal than Warning Level");
    };

    if(oops === false){
        billy.setCallCost(callCostSetting.value-"");
        billy.setSmsCost(smsCostSetting.value-"");
        billy.setWarningLevel(warningLevelSetting.value-"");
        billy.setCriticalLevel(criticalLevelSetting.value-"");
        // change the colours
        billMargin3(billy.getTotalCost());
    }
});

//add an event listener for when the add button is pressed
radioAddBtnSetting.addEventListener("click", () => {
    radioBtnForSettings.forEach(btn => {
        if(btn.checked){
            // calculations
            if(btn.value.toLowerCase().trim() === "call") billy.makeCall();
            if(btn.value.toLowerCase().trim() === "sms") billy.makeSms();

            // display to user
            callTotalSetttings.innerHTML = billy.getCallCostTotal().toFixed(2);
            smsTotalSetttings.innerHTML = billy.getSmsCostTotal().toFixed(2);
            totalSetttings.innerHTML  = billy.getTotalCost().toFixed(2);

            // change the colours
            billMargin3(billy.getTotalCost());
        }
    })
});

const billMargin3 = bill => {
    bill >= billy.getCriticalLevel() && totalSetttings.classList.add("danger"); 
    bill >= billy.getWarningLevel() && totalSetttings.classList.add("warning");
    bill < billy.getWarningLevel() && totalSetttings.classList.remove("warning");
    bill < billy.getWarningLevel() && totalSetttings.classList.remove("danger");
    bill < billy.getCriticalLevel() && totalSetttings.classList.remove("danger");
};


//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
