// get a reference to the sms or call radio buttons
const radioBtnForSettings = document.querySelectorAll(".billItemTypeWithSettings");

// get refences to all the settings fields
const smsCostSetting = document.querySelector(".smsCostSetting");
const callCostSetting = document.querySelector(".callCostSetting");
const warningLevelSetting = document.querySelector(".warningLevelSetting");
const criticalLevelSetting = document.querySelector(".criticalLevelSetting");

//get a reference to the add button
const radioAddBtnSetting = document.querySelector(".radioAddBtnSetting");

//get a reference to the 'Update settings' button
const updateSettings = document.querySelector(".updateSettings");

// instancce of my factory function
const settingsBill = BillSettings();

// create update template function for radio bill widget
const settingsBillTemplate = () => {
    // get a reference to the template script tag
    var templateSource = document.querySelector(".settingsTemplate").innerHTML;

    // compile the template
    var userTemplate = Handlebars.compile(templateSource);

    // get a reference to tableBody where the totals is to be displayed
    var userDataElem = document.querySelector(".settingsData");

    // use the compiled the template
    var userDataHTML = userTemplate({
        callCost: settingsBill.getCallCostTotal().toFixed(2),
        smsCost: settingsBill.getSmsCostTotal().toFixed(2),
        settingsTotalCost: settingsBill.getTotalCost().toFixed(2)
    });
    userDataElem.innerHTML = userDataHTML;
}

settingsBillTemplate()

//add an event listener for when the 'Update settings' button is pressed
updateSettings.addEventListener("click", () => {
    settingsBill.setCallCost(callCostSetting.value-"");
    settingsBill.setSmsCost(smsCostSetting.value-"");
    settingsBill.setWarningLevel(warningLevelSetting.value-"");
    settingsBill.setCriticalLevel(criticalLevelSetting.value-"");
    // change the colours
    billMargin3(settingsBill.getTotalCost());
});

//add an event listener for when the add button is pressed
radioAddBtnSetting.addEventListener("click", () => {
    radioBtnForSettings.forEach(btn => {
        if(btn.checked){
            // calculations
            if(btn.value.toLowerCase().trim() === "call") settingsBill.makeCall();
            if(btn.value.toLowerCase().trim() === "sms") settingsBill.makeSms();

            // display to user
            settingsBillTemplate()

            // change the colours
            billMargin3();
        }
    })
});

const billMargin3 = () => {
    const totalSetttings = document.querySelector(".totalSettings");
    totalSetttings.classList.remove("warning");
    totalSetttings.classList.remove("danger");
    totalSetttings.classList.add(settingsBill.classTotal()); 
};