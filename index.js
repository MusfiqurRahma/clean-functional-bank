function getInputValue(inputId) {
    const depositeField = document.getElementById(inputId);
    const depositeFieldText = depositeField.value;
    const depositeFieldAmount = parseFloat(depositeFieldText);
    depositeField.value = '';
    return depositeFieldAmount;
};
function getInnerValue(inputId) {
    const inputValue = document.getElementById(inputId);
    const balanceInText = inputValue.innerText;
    const balanceInTotal = parseFloat(balanceInText);
    return balanceInTotal;
};
function getTotal(inputId, amount) {
    // const deposite = document.getElementById(inputId);
    // const depositeTotalText = deposite.innerText;
    // const depositeTotal = parseFloat(depositeTotalText);
    const depositeTotal = getInnerValue(inputId);
    const depositeTotalAmount = depositeTotal + amount;
    document.getElementById(inputId).innerText = depositeTotalAmount;
}
// totalBalance
function getTotalUpdate(depositeAmount,isAdding) {
   /*  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const balanceInTotal = parseFloat(balanceTotalText); */
    const balanceInTotal =  getInnerValue('balance-total');

    let newBalance;
    if (isAdding == true) {
         newBalance = balanceInTotal + depositeAmount;
    } else {
        newBalance = balanceInTotal - depositeAmount;
    }
    document.getElementById('balance-total').innerText = newBalance;
}

// depositeAmount
document.getElementById('deposite-btn').addEventListener('click', function () {
    const depositeAmount = getInputValue('deposite-input');
    if (depositeAmount > 0) {
        getTotal('deposite-total', depositeAmount);
        getTotalUpdate(depositeAmount,true);
    }
})
// withdraw amount
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const depositeAmount = getInputValue('withdraw-input');
    const balanceTotal = getInnerValue('balance-total');
    if (depositeAmount > 0 & depositeAmount <=balanceTotal) {
        getTotal('withdraw-total', depositeAmount);
        getTotalUpdate(depositeAmount,false);
    }
})