function getInput(inputId) {
    const itemsInput = document.getElementById(inputId);
    const itemsInputText = itemsInput.value;
    const itemsInputAmount = parseFloat(itemsInputText); 
    // clear input field
    itemsInput.value  = '';
    return itemsInputAmount;
}
document.getElementById('calculate').addEventListener('click',function () {
    let foodInputAmount = getInput('food-input')
    let rentInputAmount = getInput('rent-input')
    let clothInputAmount = getInput('cloth-input')

    if (isNaN(foodInputAmount)) {
        foodInputAmount = 0;
    }if(isNaN(rentInputAmount)){
        rentInputAmount = 0;
    }if(isNaN(clothInputAmount)){
        clothInputAmount = 0;
    }
    const totalAmount = foodInputAmount + rentInputAmount + clothInputAmount;
     //total Expenses
    const totalexpenses = document.getElementById('total-expenses')
    //Balance calculation
    const incomeInput = document.getElementById('income-input');
    const incomeInputText = incomeInput.value;
    const incomeInputAmount = parseFloat(incomeInputText);
    incomeInput.value = '';

    let totalBalance = incomeInputAmount - totalAmount;
    if (isNaN(totalBalance)) {
        totalBalance = 0
    }
    const totalBalanceAmount =  document.getElementById('balance');
    // throw errors
    if ( incomeInputAmount < 0 ||  totalAmount < 0) {
        const errorshow = document.getElementById('d-error')
        errorshow.style.display = 'block'
    }else if(foodInputAmount > incomeInputAmount || rentInputAmount > incomeInputAmount || clothInputAmount > incomeInputAmount || incomeInputAmount < totalBalance){
        const errorshow = document.getElementById('d-error')
        errorshow.style.display = 'none'
        const errorshow2 = document.getElementById('d-error2')
        errorshow2.style.display = 'block'
    }
    else{
        totalexpenses.innerText = totalAmount; 
        totalBalanceAmount.innerText = totalBalance;

        const errorshow = document.getElementById('d-error')
        errorshow.style.display = 'none'
        const errorshow2 = document.getElementById('d-error2')
        errorshow2.style.display = 'none'
    }
})

document.getElementById('Savings').addEventListener('click',function() {
    const savignsInput = document.getElementById('savigns-input');
    const savingsInputText = savignsInput.value;
    let savingsInputAmount = parseFloat(savingsInputText);
    //Saved Amount
    const existingBalance = document.getElementById('balance');
    const existingBalanceAmount = parseFloat(existingBalance.innerText);
    // NaN remover
    if (isNaN(savingsInputAmount)) {
        savingsInputAmount = 0;
    }
    const savedAmount = document.getElementById('saved-amount');
    let savedBalance = (existingBalanceAmount / 100) * savingsInputAmount;
    savedAmount.innerText = savedBalance;
    // NaN remover
    if(isNaN(savedBalance)){
        savedBalance = 0;
    }
    //remaining balance
    const getremainBalance = document.getElementById('Remaining-amount');
    const remainingBalance = existingBalanceAmount - savedBalance;
    getremainBalance.innerText = remainingBalance;

    
})
