const axios = require("axios");

exports.getCocktail = async function(id) {
    try {
        const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
        return response.data; 
    } catch (error) {
        console.log(error);
        throw Error('error');
    }
}