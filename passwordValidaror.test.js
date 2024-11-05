const isValidPassword = require('./passwordValidatorV1');

test('Password is valid length', () => {
    const password = "azertyuiop";
    const isValid = isValidPassword(password);
    expect(isValid).toBe(true);
});
