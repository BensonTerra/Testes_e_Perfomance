let users = require("../models/user.model");

function findUserByEmail(email) {
    return users.find(user => user.email === email);
}

module.exports = findUserByEmail;