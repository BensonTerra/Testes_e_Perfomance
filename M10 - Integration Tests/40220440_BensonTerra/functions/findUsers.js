let users = require("../models/user.model");

function findNationalityUSers(nationality) {
    // Filtra os usuários com a nacionalidade especificada
    const usersWithNationality = users.filter(user => user.nationality === nationality);

    // Resultado esperado
    const expected = usersWithNationality.length;

    // Resultado obtido
    const received = expected === 0 ? "Nenhum usuário encontrado" : usersWithNationality.length;

    // Console.log do resultado esperado e do resultado obtido
    console.log("Resultado esperado: " + expected + " | " + "Resultado obtido: " + received);

    // Retorna o número de usuários encontrados
    return usersWithNationality.length;
}

module.exports = findNationalityUSers;