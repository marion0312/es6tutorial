const exampleSet = new Set([1,1,1,1,2,2,2,3,3,3]);

console.log(exampleSet.size); //DISPLAYS 3; DISREGARDS DUPLICATES

// ADDING A SET ITEM

exampleSet.add(4);

console.log(exampleSet.size); //DISPLAYS 4

exampleSet.add(5).add(6);

console.log(exampleSet.size); //DISPLAYS 6

// DELETING A SET ITEM

console.log(exampleSet.delete(5)); //RETURNS A BOOLEAN AS RESULT

// FINDING A SET ITEM

console.log(exampleSet.has(4)); //RETURNS A BOOLEAN AS RESULT

// CLEARING A SET ITEM

exampleSet.clear();

console.log(exampleSet.size); //DISPLAYS 0