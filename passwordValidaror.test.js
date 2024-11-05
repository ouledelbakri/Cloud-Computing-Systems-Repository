const isValidPassword = require('./passwordValidatorV1');

test('Password is valid length', () => {
    const password = "a2zertyue";
    const password2 = "azertyuiop";
    const isValid = isValidPassword(password);
    const isNotValid = isValidPassword(password2);
    expect(isValid).toBe(true);
    expect(isNotValid).toBe(false);
});

test('Password has at least one digit', () => {
    const password = "azertyuiop";
    const password2 = "azertyuiop1";
    const isNotValid = isValidPassword(password);
    const isValid = isValidPassword(password2);
    expect(isNotValid).toBe(false);
    expect(isValid).toBe(true);
});

test('Password has at least one letter', () => {
    const password = "123456789";
    const password2 = "azerty234";
    const isNotValid = isValidPassword(password);
    const isValid = isValidPassword(password2);
    expect(isNotValid).toBe(false);
    expect(isValid).toBe(true);
});
