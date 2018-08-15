module.exports = function(a,b) {
    let colorArray = ["white","blue","black","red","green"];
    let indexOfA = colorArray.indexOf(a);

    if (indexOfA > 0) {
        for (var i = 0; i < indexOfA; i++) {
            colorArray.push(colorArray.shift());
        }
    }

    if (colorArray.indexOf(b) <= 2) {
        return -1;
    }

    if (colorArray.indexOf(b) >= 3) {
        return 1;
    }

    return 0;
}