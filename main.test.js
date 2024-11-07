const bank = require("./bank");

test("Retrieve function should be called but not executed", () => {
    const spy = jest.spyOn(bank, "getBalance");
    const accountId = 123456789;
    const expectedBalance = 100;

    spy.mockReturnValueOnce(expectedBalance);
    const balance = bank.getBalance(accountId);

    expect(spy).toHaveBeenCalledWith(accountId);
    expect(balance).toBe(expectedBalance);

    spy.mockRestore(); // Restore the original function.
});

// test("Sold should be returned", () => {
//     const spy = jest.spyOn(bank,"getBalance");

//     bank.getBalance(123456789);
//     expect(spy).toHaveReturned();
//     spy.mockRestore();

// });