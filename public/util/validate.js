const{ pickBy, isUndefined } = require('lodash');

module.exports.removeUndefined = (object) => {
    return pickBy(object, property => !isUndefined(property) );
}