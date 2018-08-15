const sortSequence = require('./sortSequence');
const getScore = require('./getScore');

module.exports = function(array) {
    let colorArray = ["white","blue","black","red","green"];
    //mutative?
    array.sort(sortSequence);
    if (array.length < 3) {
        return array;
    }

    if (array.length === 3){
        var max = false;
        var min = false;
        for (let i = 0; i < colorArray.length; i++) {
            if ([0,1,2].includes(colorArray.indexOf(array[0].toLowerCase())) && [0,1,2].includes(colorArray.indexOf(array[1].toLowerCase())) &&  [0,1,2].includes(colorArray.indexOf(array[2].toLowerCase()))) {
                //if they are [0,1,2], break out of the loop, make it min
                min = true;
                break;
            }
            
            if ([0,2,4].includes(colorArray.indexOf(array[0].toLowerCase())) && [0,2,4].includes(colorArray.indexOf(array[1].toLowerCase())) &&  [0,2,4].includes(colorArray.indexOf(array[2].toLowerCase()))) {
                //if they are [0,2,4], break out of the loop, make it max
                max = true;
                break;
            }

            colorArray.push(colorArray.shift());
        }

        if (min) {
            return array;
        }

        if (max) {
            let scoreArray = [];
            for (let i=0; i < array.length; i++) {
                array.push(array.shift());
                scoreArray.push(getScore(array));
            }

            var indexOfMaxValue = scoreArray.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0);

            for (let i=0; i <= indexOfMaxValue; i++) {
                array.push(array.shift());
            }

            return array;
        }

        return array;
    }
}