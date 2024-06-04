exports.square = function(value) {
    if(isNaN(value)) {
        throw Error(value + ' is not a number');
    } else {
        return value*value
    }
}