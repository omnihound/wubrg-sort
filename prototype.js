const sortSequence = function(a,b) {
    let colorArray = ["white","blue","black","red","green"];
    let indexOfA = colorArray.indexOf(a);

    if (indexOfA > 0) {
        for (var i = 0; i < indexOfA; i++) {
            colorArray.push(colorArray.shift());
        }
    }

    if (colorArray.indexOf(b) === 1) {
        return 0;
    }

    if (colorArray.indexOf(b) === 4) {
        return 1;
    }

    return colorArray.indexOf(b) % 2;
}

const getScore = function(colors) {
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

const sortCombinations = function(a,b) {
    if (a.colors.sort(sortSequence).length === b.colors.sort(sortSequence).length) {
        return getScore(a.colors) - getScore(b.colors);
    } else {
        return a.colors.length - b.colors.length;
    }
}

const optimiseSequence = function(array) {
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
            if ([0,1,2].includes(colorArray.indexOf(array[0])) && [0,1,2].includes(colorArray.indexOf(array[1])) &&  [0,1,2].includes(colorArray.indexOf(array[2]))) {
                //if they are [0,1,2], break out of the loop, make it min
                min = true;
                break;
            }
            
            if ([0,2,4].includes(colorArray.indexOf(array[0])) && [0,2,4].includes(colorArray.indexOf(array[1])) &&  [0,2,4].includes(colorArray.indexOf(array[2]))) {
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

console.log(["black", "red", "blue"].sort(sortSequence));
console.log(["red", "black", "blue"].sort(sortSequence));
console.log(["blue", "black", "red"].sort(sortSequence));
console.log(["black", "blue", "red"].sort(sortSequence));
console.log(["red", "blue", "black"].sort(sortSequence));
console.log(["blue", "red", "black"].sort(sortSequence));

console.log(optimiseSequence(["black", "green", "blue"].sort(sortSequence)));
// console.log(optimiseSequence(["green", "black", "blue"].sort(sortSequence)));
// console.log(optimiseSequence(["blue", "black", "green"].sort(sortSequence)));
// console.log(optimiseSequence(["black", "blue", "green"].sort(sortSequence)));
// console.log(optimiseSequence(["green", "blue", "black"].sort(sortSequence)));
// console.log(optimiseSequence(["blue", "green", "black"].sort(sortSequence)));

console.log([{colors: ["black","white"]}, {colors: ["red", "green"]},{colors: ["green","red","blue"]},{colors: ["green","white","blue"]},{colors: ["blue","green","black"]}].sort(sortCombinations));