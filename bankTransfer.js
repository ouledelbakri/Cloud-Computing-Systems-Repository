function transfer(accountId, amount){
    console.log(`Transferring ${amount} to account ${accountId}`);
}

const bankTransfer = {
    transfer
};

module.exports = bankTransfer;