const cocktail = require('./cocktails').getCocktail

let recipe = cocktail(11007).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
})