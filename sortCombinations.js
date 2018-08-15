const optimiseSequence = require('./optimiseSequence');
const getScore = require('./getScore');

module.exports = function(a,b) {
    if (optimiseSequence(a.colors).length === optimiseSequence(b.colors).length) {
        return getScore(a.colors) - getScore(b.colors);
    } else {
        return a.colors.length - b.colors.length;
    }
}