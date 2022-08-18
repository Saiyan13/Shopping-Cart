document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const phopneNumberField = document.getElementById("phone-number-field");
    const phopneNumberFieldSting = phopneNumberField.value;
    const previousTotalPhoneNumber = parseInt(phopneNumberFieldSting);

    const newTotalPhoneNumber = previousTotalPhoneNumber+1;

    phopneNumberField.value = newTotalPhoneNumber;
})


document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const phopneNumberField = document.getElementById("phone-number-field");
    const phopneNumberFieldSting = phopneNumberField.value;
    const previousTotalPhoneNumber = parseInt(phopneNumberFieldSting);

    const newTotalPhoneNumber = previousTotalPhoneNumber-1;

    phopneNumberField.value = newTotalPhoneNumber;
})