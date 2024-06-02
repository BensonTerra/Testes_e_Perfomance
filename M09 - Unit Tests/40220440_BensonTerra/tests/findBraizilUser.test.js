const findBrazilUSer = require('../functions/findBrazilUser');
let users = require("../models/user.model");

test('findBrazilUser', () => {
    expect(findBrazilUSer("Brazil")).toBe(1);
});

test('findNoBrazilUser', () => {
    expect(findBrazilUSer("Brazil")).not.toBe(3);
});

test('findNoBrazilUser', () => {
    expect(findBrazilUSer("Italy")).toBe(0);
});