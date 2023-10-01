// index.js
const balanceElement = document.getElementById("balance");
const depositButton = document.getElementById("depositBtn");
const withdrawButton = document.getElementById("withdrawBtn");
const transferButton = document.getElementById("transferBtn");
const transactionList = document.getElementById("transactionList");

let balance = 1000;
let transactions = [];

function updateBalance() {
    balanceElement.textContent = balance;
}

function updateTransactionList() {
    transactionList.innerHTML = "";
    for (const transaction of transactions) {
        const listItem = document.createElement("li");
        listItem.textContent = transaction;
        transactionList.appendChild(listItem);
    }
}

depositButton.addEventListener("click", function () {
    const depositAmount = parseFloat(prompt("Enter the deposit amount:"));
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        transactions.push(`+ $${depositAmount.toFixed(2)} (Deposit)`);
        updateBalance();
        updateTransactionList();
    } else {
        alert("Please enter a valid deposit amount.");
    }
});

withdrawButton.addEventListener("click", function () {
    const withdrawAmount = parseFloat(prompt("Enter the withdrawal amount:"));
    if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            transactions.push(`- $${withdrawAmount.toFixed(2)} (Withdrawal)`);
            updateBalance();
            updateTransactionList();
        } else {
            alert("Insufficient funds.");
        }
    } else {
        alert("Please enter a valid withdrawal amount.");
    }
});

transferButton.addEventListener("click", function () {
    const transferAmount = parseFloat(prompt("Enter the transfer amount:"));
    if (!isNaN(transferAmount) && transferAmount > 0) {
        if (transferAmount <= balance) {
            const targetAccount = prompt("Enter the recipient's account number:");
            if (targetAccount !== null && targetAccount.trim() !== "") {
                balance -= transferAmount;
                transactions.push(`- $${transferAmount.toFixed(2)} (Transfer to Account ${targetAccount})`);
                updateBalance();
                updateTransactionList();
                alert(`$${transferAmount.toFixed(2)} has been transferred to Account ${targetAccount}.`);
            } else {
                alert("Please enter a valid recipient's account number.");
            }
        } else {
            alert("Insufficient funds.");
        }
    } else {
        alert("Please enter a valid transfer amount.");
    }
});

updateBalance();
updateTransactionList();
