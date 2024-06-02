let users = require("../models/user.model");

function findUserNamesByNationality(nationality) {
    return users.filter(user => user.nationality === nationality).map(user => user.name);
}

module.exports = findUserNamesByNationality;