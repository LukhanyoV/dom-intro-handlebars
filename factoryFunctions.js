const textBillFactory = () => {
    let callCost = 2.75
    let callTotal = 0
    let smsCost = 0.75
    let smsTotal = 0
    let warningLevel = 30
    let criticalLevel = 50

    // make call function
    const makeCall = () => callTotal += callCost

    // send sms function
    const sendSms = () => smsTotal += smsCost

    // get all total 
    const getTotal = () => callTotal + smsTotal

    // get call total
    const getCallTotal = () => callTotal

    // get the sms total
    const getSmsTotal = () => smsTotal

    // get warning level
    const getWarningLevel = () => warningLevel

    // get the critical level
    const getCriticalLevel = () => criticalLevel

    // which class should I use
    const classTotal = () => {
        if(getTotal() >= getCriticalLevel()) return "danger"
        if(getTotal() >= getWarningLevel()) return "warning"
    }

    return {
        classTotal,
        makeCall,
        sendSms,
        getCallTotal,
        getSmsTotal,
        getTotal
    }
}

const radioBillFactory = () => {
    let callCost = 2.75
    let callTotal = 0
    let smsCost = 0.75
    let smsTotal = 0
    let warningLevel = 30
    let criticalLevel = 50

    // make call function
    const makeCall = () => callTotal += callCost

    // send sms function
    const sendSms = () => smsTotal += smsCost

    // get all total 
    const getTotal = () => callTotal + smsTotal

    // get call total
    const getCallTotal = () => callTotal

    // get the sms total
    const getSmsTotal = () => smsTotal

    // get warning level
    const getWarningLevel = () => warningLevel

    // get the critical level
    const getCriticalLevel = () => criticalLevel

    // which class should I use
    const classTotal = () => {
        if(getTotal() >= getCriticalLevel()) return "danger"
        if(getTotal() >= getWarningLevel()) return "warning"
    }

    return {
        classTotal,
        makeCall,
        sendSms,
        getCallTotal,
        getSmsTotal,
        getTotal
    }
}

const BillSettings = () => {
    
    // initialize me
    let callCost = 0;
    let smsCost = 0;
    let warningLevel = 0;
    let criticalLevel = 0;

    // intialize totals
    let callCostTotal = 0;
    let smsCostTotal = 0;
    let totalCost = 0;

    // set me
    const setCallCost = (cost) => callCost = cost;
    const setSmsCost = (cost) => smsCost = cost;
    const setWarningLevel = (level) => warningLevel = level;
    const setCriticalLevel = (level) => criticalLevel = level;

    // get me
    const getCallCost = () => callCost;
    const getSmsCost = () => smsCost;
    const getWarningLevel = () => warningLevel;
    const getCriticalLevel = () => criticalLevel;

    // use me
    const makeCall = () => getCriticalLevel() > getTotalCost() ? callCostTotal += getCallCost() : callCostTotal += 0;
    const makeSms = () => getCriticalLevel() > getTotalCost() ? smsCostTotal += getSmsCost() : smsCostTotal += 0;

    // show me
    const getCallCostTotal = () => callCostTotal;
    const getSmsCostTotal = () => smsCostTotal;
    const getTotalCost = () => totalCost = getSmsCostTotal() + getCallCostTotal();

    // color me
    const classTotal = () => getTotalCost() >= getCriticalLevel() ? "critical" : getTotalCost() >= getWarningLevel() && "warning";

    return {
        setCallCost,
        setSmsCost,
        setWarningLevel,
        setCriticalLevel,

        getCallCost,
        getSmsCost,
        getWarningLevel,
        getCriticalLevel,

        makeCall,
        makeSms,

        getCallCostTotal,
        getSmsCostTotal,
        getTotalCost,

        classTotal
    }
}