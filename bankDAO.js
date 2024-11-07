function retrieveBalance(accountId){
    //const Solde = Math.floor(Math.random() * 1000);
    console.log(`Retrieving balance from bank ${accountId}`);
    //return Solde; 
}

function debitAccount(accountId, amount){
    console.log(`Debiting account ${accountId} with amount ${amount}`);

}

const bankDAO = {
    retrieveBalance,
    debitAccount,
};

module.exports = bankDAO