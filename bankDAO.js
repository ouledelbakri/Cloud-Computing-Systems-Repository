function retrieveBalance(accountId){
    //const Solde = Math.floor(Math.random() * 1000);
    console.log(`Retrieving balance from bank ${accountId}`);
    //return Solde; 
}

const bankDAO = {
    retrieveBalance
};

module.exports = bankDAO