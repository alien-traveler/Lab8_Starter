// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// isPhoneNumber
test('Test isPhoneNumber() 1', () => {
    expect(functions.isPhoneNumber('(123)-456-7890')).toBe(true);
});
test('Test isPhoneNumber() 2', () => {
    expect(functions.isPhoneNumber('999-999-9999')).toBe(true);
});
test('Test isPhoneNumber() 3', () => {
    expect(functions.isPhoneNumber('123123123123123')).toBe(false);
});
test('Test isPhoneNumber() 4', () => {
    expect(functions.isPhoneNumber('10101')).toBe(false);
});

// isEmail
test('Test isEmail() 1', () => {
    expect(functions.isEmail('123456@ucsd.edu')).toBe(true);
});
test('Test isEmail() 2', () => {
    expect(functions.isEmail('luojiwen@gmail.com')).toBe(true);
});
test('Test isEmail() 3', () => {
    expect(functions.isEmail('123456')).toBe(false);
});
test('Test isEmail() 4', () => {
    expect(functions.isEmail('@gmail.com')).toBe(false);
});

// isStrongPassword
test('Test isStrongPassword() 1', () => {
    expect(functions.isStrongPassword('I103lwaei058_')).toBe(true);
});
test('Test isStrongPassword() 2', () => {
    expect(functions.isStrongPassword('a1030pqiPDEi')).toBe(true);
});
test('Test isStrongPassword() 3', () => {
    expect(functions.isStrongPassword('3iqwer320_')).toBe(false);
});
test('Test isStrongPassword() 4', () => {
    expect(functions.isStrongPassword('WLLPQ1234567890987654321')).toBe(false);
});

// isDate
test('Test isDate() 1', () => {
    expect(functions.isDate('01/01/2000')).toBe(true);
});
test('Test isDate() 2', () => {
    expect(functions.isDate('3/2/2004')).toBe(true);
});
test('Test isDate() 3', () => {
    expect(functions.isDate('02/931/2022')).toBe(false);
});
test('Test isDate() 4', () => {
    expect(functions.isDate('11/3/77')).toBe(false);
});

// isHexColor
test('Test isHexColor() 1', () => {
    expect(functions.isHexColor('#32b9f5')).toBe(true);
});
test('Test isHexColor() 2', () => {
    expect(functions.isHexColor('#FC0')).toBe(true);
});
test('Test isHexColor() 3', () => {
    expect(functions.isHexColor('#zzzzzz')).toBe(false);
});
test('Test isHexColor() 4', () => {
    expect(functions.isHexColor('#d9b5')).toBe(false);
});