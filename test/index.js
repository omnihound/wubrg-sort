var test = require('tape');
const sortSequence = require('../sortSequence');
const optimiseSequence = require('../optimiseSequence');
const sortCombinations = require('../sortCombinations');

let azorius = optimiseSequence(['blue','white']);
let dimir = optimiseSequence(['black','blue']);
let rakdos = optimiseSequence(['red','black']);
let gruul = optimiseSequence(['green','red']);
let selesnya = optimiseSequence(['white','green']);

let orzhov = optimiseSequence(['black','white']);
let izzet = optimiseSequence(['red','blue']);
let golgari = optimiseSequence(['green','black']);
let boros = optimiseSequence(['white','red']);
let simic =optimiseSequence(['blue','green']);

let bant = optimiseSequence(['green','blue','white']);
let esper = optimiseSequence(['black','blue','white']);
let grixis = optimiseSequence(['blue','red','black']);
let jund = optimiseSequence(['black','green','red']);
let naya = optimiseSequence(['red','white','green']);

let mardu = optimiseSequence(['red','white','black']);
let temur = optimiseSequence(['red','blue','green']);
let abzan = optimiseSequence(['white','green','black']);
let jeskai = optimiseSequence(['blue','white','red']);
let sultai = optimiseSequence(['black','blue','green']);


test('sort out of order wubrg sequence', function(t){
    t.plan(2);
    var array = ['blue','black','white','green','red'].sort(sortSequence);
    t.equal(array[0], 'white', 'first element is white');
    t.equal(array[4], 'green', 'last element is green');
});

test('test sorting guild sequences', function(t){
    t.plan(10);

    t.equal(JSON.stringify(azorius), JSON.stringify(['white','blue']));
    t.equal(JSON.stringify(dimir), JSON.stringify(['blue','black']));
    t.equal(JSON.stringify(rakdos), JSON.stringify(['black','red']));
    t.equal(JSON.stringify(gruul), JSON.stringify(['red','green']));
    t.equal(JSON.stringify(selesnya), JSON.stringify(['green','white']));

    t.equal(JSON.stringify(orzhov), JSON.stringify(['white','black']));
    t.equal(JSON.stringify(izzet), JSON.stringify(['blue','red']));
    t.equal(JSON.stringify(golgari), JSON.stringify(['black','green']));
    t.equal(JSON.stringify(boros), JSON.stringify(['red','white']));
    t.equal(JSON.stringify(simic), JSON.stringify(['green','blue']));
});

test('test sorting shard/wedge sequences', function(t){
    t.plan(10);

    t.equal(JSON.stringify(esper), JSON.stringify(['white','blue','black']));
    t.equal(JSON.stringify(grixis), JSON.stringify(['blue','black','red']));
    t.equal(JSON.stringify(jund), JSON.stringify(['black','red','green']));
    t.equal(JSON.stringify(naya), JSON.stringify(['red','green','white']));
    t.equal(JSON.stringify(bant), JSON.stringify(['green','white','blue']));

    t.equal(JSON.stringify(mardu), JSON.stringify(['red','white','black']));
    t.equal(JSON.stringify(temur), JSON.stringify(['green','blue','red']));
    t.equal(JSON.stringify(abzan), JSON.stringify(['white','black','green']));
    t.equal(JSON.stringify(jeskai), JSON.stringify(['blue','red','white']));
    t.equal(JSON.stringify(sultai), JSON.stringify(['black','green','blue']));
});

test('all guilds, shards and wedges will sort correctly in their implicit order', function(t){
    t.plan(20);

    let testArray = [
        {colors: sultai}, {colors: naya},{colors: simic},{colors: selesnya},
        {colors: jund}, {colors: jeskai},{colors: boros},{colors: gruul},
        {colors: esper},{colors: abzan},{colors: golgari},{colors: rakdos}, 
        {colors: temur}, {colors: grixis},{colors: izzet},{colors: dimir},
        {colors: mardu}, {colors: bant},{colors: orzhov},{colors: azorius}].sort(sortCombinations);

    t.equal(JSON.stringify(testArray[0].colors), JSON.stringify(azorius));
    t.equal(JSON.stringify(testArray[1].colors), JSON.stringify(dimir));
    t.equal(JSON.stringify(testArray[2].colors), JSON.stringify(rakdos));
    t.equal(JSON.stringify(testArray[3].colors), JSON.stringify(gruul));
    t.equal(JSON.stringify(testArray[4].colors), JSON.stringify(selesnya));
    t.equal(JSON.stringify(testArray[5].colors), JSON.stringify(orzhov));
    t.equal(JSON.stringify(testArray[6].colors), JSON.stringify(izzet));
    t.equal(JSON.stringify(testArray[7].colors), JSON.stringify(golgari));
    t.equal(JSON.stringify(testArray[8].colors), JSON.stringify(boros));
    t.equal(JSON.stringify(testArray[9].colors), JSON.stringify(simic));
    t.equal(JSON.stringify(testArray[10].colors), JSON.stringify(esper));
    t.equal(JSON.stringify(testArray[11].colors), JSON.stringify(grixis));
    t.equal(JSON.stringify(testArray[12].colors), JSON.stringify(jund));
    t.equal(JSON.stringify(testArray[13].colors), JSON.stringify(naya));
    t.equal(JSON.stringify(testArray[14].colors), JSON.stringify(bant));
    t.equal(JSON.stringify(testArray[15].colors), JSON.stringify(abzan));
    t.equal(JSON.stringify(testArray[16].colors), JSON.stringify(jeskai));
    t.equal(JSON.stringify(testArray[17].colors), JSON.stringify(sultai));
    t.equal(JSON.stringify(testArray[18].colors), JSON.stringify(mardu));
    t.equal(JSON.stringify(testArray[19].colors), JSON.stringify(temur));
});

test('can understand titlecased/uppercase colours okay', function (t){
    t.plan(3);

    let testSequence1 = optimiseSequence(['Blue','WHITE']);
    t.equal(JSON.stringify(testSequence1), JSON.stringify(['WHITE','Blue']));

    let testSequence2 = optimiseSequence(['Black','bLUE','grEen']);

    let testArray = [
        {colors: testSequence1}, {colors: testSequence2}
    ];

    t.equal(JSON.stringify(testArray[0].colors), JSON.stringify(testSequence1));
    t.equal(JSON.stringify(testArray[1].colors), JSON.stringify(testSequence2));
});