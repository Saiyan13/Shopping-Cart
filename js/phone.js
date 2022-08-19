document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phopneNumberField = document.getElementById("phone-number-field");
    const phopneNumberFieldSting = phopneNumberField.value;
    const previousTotalPhoneNumber = parseInt(phopneNumberFieldSting);

    const newTotalPhoneNumber = previousTotalPhoneNumber+1;

    phopneNumberField.value = newTotalPhoneNumber;

    const totalPhoneNumber = document.getElementById('phone-total')

    const newtotalPhone = newTotalPhoneNumber * 1219;
    totalPhoneNumber.innerText=newtotalPhone;

    
 //    --------------------------------------For Subtotal---------------------------

    const phoneTotalElement = document.getElementById('phone-total');
    const currentPhonTotalSting = phoneTotalElement.innerText;
    const currentPhonTotal = parseInt(currentPhonTotalSting)

     const caseTotalElement = document.getElementById('case-total')
     const caseTotalElementSring = caseTotalElement.innerText;
     const caseNumberFielddddd = parseInt(caseTotalElementSring);

     const currentSubTotal = currentPhonTotal + caseNumberFielddddd;
     const subTotalElement = document.getElementById('sub-total');
     subTotalElement.innerText=currentSubTotal;

    //  calculate Tax
    const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString)
    const taxTotalAmount = document.getElementById('tax-amount')
     taxTotalAmount.innerText = taxAmount;
})


document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phopneNumberField = document.getElementById("phone-number-field");
    const phopneNumberFieldSting = phopneNumberField.value;
    const previousTotalPhoneNumber = parseInt(phopneNumberFieldSting);

    const newTotalPhoneNumber = previousTotalPhoneNumber-1;

    phopneNumberField.value = newTotalPhoneNumber;

    const totalPhoneNumber = document.getElementById('phone-total')

    const newtotalPhone = newTotalPhoneNumber * 1219;
    totalPhoneNumber.innerText=newtotalPhone;
//    --------------------------------------For Subtotal---------------------------
    const phoneTotalElement = document.getElementById('phone-total');
    const currentPhonTotalSting = phoneTotalElement.innerText;
    const currentPhonTotal = parseInt(currentPhonTotalSting)

     const caseTotalElement = document.getElementById('case-total')
     const caseTotalElementSring = caseTotalElement.innerText;
     const caseNumberFielddddd = parseInt(caseTotalElementSring);

     const currentSubTotal = currentPhonTotal + caseNumberFielddddd;
     const subTotalElement = document.getElementById('sub-total');
     subTotalElement.innerText=currentSubTotal;

     const taxAmountString = (currentSubTotal * 0.1).toFixed(2);
     const taxAmount = parseFloat(taxAmountString)
     const taxTotalAmount = document.getElementById('tax-amount')
      taxTotalAmount.innerText = taxAmount;
})