const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");

function getBalance(accountId) {
    console.log(`getting balance from bank ${accountId}`);
    return bankDAO.retrieveBalance(accountId);
    //console.log(`Balance is ${Solde}`);
}

async function transferMoney(accountId, amount) {
    bankTransfer.transfer(accountId, amount)
    .then(() => {
        bankDAO.debitAccount(accountId, amount);
        console.log(`Transferring ${amount} to account ${accountId}`);
    })
    .catch((err) => {
        console.error(err);
    });
    
}


const bank = {
    getBalance,
    transferMoney,
};



module.exports = bank;
