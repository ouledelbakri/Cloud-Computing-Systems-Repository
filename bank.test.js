const bank = require("./bank");
const bankDAO = require("./bankDAO");
const bankTransfer = require("./bankTransfer");


test("Solde bien retourner", () => {
    const spy = jest.spyOn(bankDAO, "retrieveBalance");
    const accountId = 123456789;
    const expectedBalance = 100;
    spy.mockReturnValueOnce(expectedBalance);
    
    const balance = bank.getBalance(accountId);

    expect(spy).toHaveBeenCalledWith(accountId);
    expect(balance).toBe(expectedBalance);


    spy.mockRestore(); // Restore the original function.

});

test("Transfert bien effectuer", async() => {
    const spy = jest.spyOn(bankTransfer, "transfer").mockResolvedValue(null);
    const spy2 = jest.spyOn(bankDAO, "debitAccount").mockReturnValue(null);
    const accountId = 123;
    const amount = 1000;
    
    await bank.transferMoney(accountId, amount);

    expect(spy).toHaveBeenCalledWith(accountId, amount);
    expect(spy2).toHaveBeenCalledWith(accountId, amount);

    // Restore the original function.
    spy.mockRestore(); 
    spy2.mockRestore(); 
});

test("Transfer is executed", async() => {

    jest.spyOn(bankDAO, "debitAccount").mockReturnValue(null);
    jest.spyOn(bankTransfer, "transfer").mockRejectedValue(new Error("Transfer failed"));
    
    const accountId = 123;
    const amount = 1000;
    
    await bank.transferMoney(accountId, amount);

    expect(bankDAO.debitAccount).not.toHaveBeenCalled();
    expect(bankTransfer.transfer).toHaveBeenCalled();

    bankDAO.debitAccount.mockRestore();
    bankTransfer.transfer.mockRestore();
});

// test("Sold should be returned", () => {
//     const spy = jest.spyOn(bank,"getBalance");

//     bank.getBalance(123456789);
//     expect(spy).toHaveReturned();
//     spy.mockRestore();

// });