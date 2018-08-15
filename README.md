# wubrg-sort

Sorting algorithm for Magic: the Gathering colours.  Sorts programatically: guilds and shards in perfect sequence and order every time. Uses first position sorting for wedges.  Was surprised to see this hadn't been done before, so I wanted to save someone the heartache of trying.

for example:

`wubrgSort.optimiseSequence(['blue','white'])` will return/mutate the correct `['white','blue']` sequence.

in cases where you have a collection of objects with the `colors` property on it (where it is an array of [colors]), you can sort them out:

`[
        {colors: sultai}, {colors: naya},{colors: simic},{colors: selesnya},
        {colors: jund}, {colors: jeskai},{colors: boros},{colors: gruul},
        {colors: esper},{colors: abzan},{colors: golgari},{colors: rakdos}, 
        {colors: temur}, {colors: grixis},{colors: izzet},{colors: dimir},
        {colors: mardu}, {colors: bant},{colors: orzhov},{colors: azorius}
].sort(wubrgSort.sortCombinations);`

would return azorius to selesyna, orzhov to simic, esper to bant and abzan to temur in predictable, logical order.