const findUsersByNationality = require('../functions/findUsers');
const findUserByEmail = require('../functions/findUserByEmail');
const findUserNamesByNationality = require('../functions/findUserNamesByNationality');

// Testes de contagem por nacionalidade
test('Test-1', () => {
    expect(findUsersByNationality("Brazil")).toBe(2);
});

test('Test-2', () => {
    expect(findUsersByNationality("USA")).toBe(1);
});

test('Test-3', () => {
    expect(findUsersByNationality("Italy")).toBe(2);
});

test('Test-4', () => {
    expect(findUsersByNationality("Germany")).toBe(0);
});

// Testes de não contagem por nacionalidade
test('Test-5', () => {
    expect(findUsersByNationality("Italy")).not.toBe(5);
});

// Testes de email
test('Test-6', () => {
    expect(findUserByEmail("maria@email.com")).toEqual(
        {
            id: 2, 
            name: "Maria", 
            email: "maria@email.com", 
            password: "54321", 
            nationality: "Brazil"
        }
    );
});

test('Test-7', () => {
    expect(findUserByEmail("nonexistent@email.com")).toBeUndefined();
});

// Testes de nomes por nacionalidade
test('Test-8', () => {
    expect(findUserNamesByNationality("Italy")).toEqual(["Anna", "Mia"]);
});

test('Test-9', () => {
    expect(findUserNamesByNationality("Russia")).toEqual(["Igor"]);
});

test('Test-10', () => {
    expect(findUserNamesByNationality("Brazil")).toContain("Maria");
});

test('Test-11', () => {
    expect(findUserNamesByNationality("Brazil")).not.toContain("Carlos");
});