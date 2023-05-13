var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
     loginArea.style.display = "none";
     const transarea = document.getElementById('transactions-area');
     transarea.style.display = "block";
})

const depositBtn = document.getElementById("depositbutton");
depositBtn.addEventListener('click', function(){
    const depositMoney = document.getElementById('depositInput').value;
    const depositAmount = parseFloat(depositMoney);
    const currentDeposit = document.getElementById('depositAmount').innerText;
    const newDeposit = parseFloat(currentDeposit);
    const totalDeposit = depositAmount + newDeposit;

    document.getElementById('depositAmount').innerText = totalDeposit;


    const currentBalance = document.getElementById('balanceAmount').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositAmount + currentBalanceNumber;  
    document.getElementById('balanceAmount').innerText = totalBalance;

    document.getElementById('depositInput').value = "";
})

const withdrawBtn = document.getElementById('withdrawbutton');
withdrawBtn.addEventListener('click', function(){
    const withdrawMoney = document.getElementById('withdrawInput').value;
    const withdrawAmount = parseFloat(withdrawMoney);
    const newWithdraw = document.getElementById('withdrawAmount').innerText;
    const newWthd = parseFloat(newWithdraw);
    const totalWithdraw = withdrawAmount + newWthd;
    document.getElementById('withdrawAmount').innerText = totalWithdraw;

    const currentBalance = document.getElementById('balanceAmount').innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber - totalWithdraw;  
    document.getElementById('balanceAmount').innerText = totalBalance;
    document.getElementById('withdrawInput').innerText = "";


})