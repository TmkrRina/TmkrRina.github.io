let accButton = document.getElementById("createBtn");
accountInfoList = [];
let accEventHandler = (function() {
    'use strict'
    return {
        createAccount: function(name, amount) {
            let accName = name;
            let balance = amount;
            accountInfoList.push({ name: accName, balance: balance });
            return accountInfoList;
        }
    }
})();
accButton.addEventListener("click", function() {
    let accName = document.getElementById("name").value;
    let amount = document.getElementById("amount").value;
    accEventHandler.createAccount(accName, amount);
    document.getElementById("myTextArea").value = '';
    accountInfoList.forEach(account => {
        document.getElementById("myTextArea").value += `Account name: ${account.name}, Balance: ${account.balance} \n`;
    });
});