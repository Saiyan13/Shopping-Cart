// Case Plus btn eventLiestener



function updateCaseNumber(isIncrese) {
    const caseNumberField = document.getElementById('case-number-field');
    const caseNumberString = caseNumberField.value;
    const previousCaseNumber = parseInt(caseNumberString);
    let newCaseNumber;
    if (isIncrese === true) {
        newCaseNumber = previousCaseNumber + 1;

    }
    else {
        newCaseNumber = previousCaseNumber - 1;

    }
    caseNumberField.value = newCaseNumber;
    return newCaseNumber;

}

function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice = newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total')

    caseTotalElement.innerText = caseTotalPrice;
}


document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(true);
    updateCaseTotalPrice(newCaseNumber);

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total')

    // caseTotalElement.innerText = caseTotalPrice;

    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberString);
    // const newCaseNumber = previousCaseNumber+1;
    // caseNumberField.value = newCaseNumber;

    // const caseTotalElement = document.getElementById('case-total')
    //            const caseTotalElementSring = caseTotalElement.innerText;
    //            const caseNumberFielddddd = parseInt(caseTotalElementSring);

    //            const totalPrice = 59*newCaseNumber;
    //            caseTotalElement.innerText = totalPrice;


})

// Case Minus btn eventLiestener

document.getElementById("btn-case-minus").addEventListener('click', function () {
    const newCaseNumber = updateCaseNumber(false);
    updateCaseTotalPrice(newCaseNumber);

    // const caseTotalPrice = newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total')

    // caseTotalElement.innerText = caseTotalPrice;


    // const caseNumberField = document.getElementById('case-number-field');
    // const caseNumberFieldString = caseNumberField.value;
    // const previousCaseNumber = parseInt(caseNumberFieldString);
    // const newCaseNumber = previousCaseNumber-1;
    // caseNumberField.value=newCaseNumber;
})

