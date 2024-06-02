let users = require("../models/user.model");

function findBrazilUser(nationality) {
    console.log("findRandomUser");
    if (users.some(user => user.nationality === nationality)) {
        return users.filter(user => user.nationality == nationality).length
    }
    else {
        return users.filter(user => user.nationality != nationality).length
    }
}
module.exports = findBrazilUser;