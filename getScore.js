module.exports = function(colors) {
    let colorArray = ["white","blue","black","red","green"];
    let score = 0;

    let indexOfA = colorArray.indexOf(colors[0]);
    if (indexOfA > 0) {
        for (let i = 0; i < indexOfA; i++) {
            colorArray.push(colorArray.shift());
            score++;
        }
    }

    score += colors.reduce((total, color) => {
        let thisIndex = colorArray.indexOf(color);
        let timesShifted = 0;
        if (thisIndex > 0) {
            for (var j = 0; j < thisIndex; j++) {
                colorArray.push(colorArray.shift());
                timesShifted++;
                total++;
            }
        }

        if (timesShifted > 1) {
            total += 5;
        }

        return total;
    },  0);

    return score;
}