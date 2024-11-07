const bankDAO = require("./bankDAO");

function getBalance(accountId) {
    console.log(`getting balance from bank ${accountId}`);
    return bankDAO.retrieveBalance(accountId);
    //console.log(`Balance is ${Solde}`);
}

const bank = {
    getBalance,
};

module.exports = bank;