// 1. feladat
console.log('---1. feladat---');
// Létrehoztam a tömböt és feltöltöm értékekkel

const nums = [3, 4, 9, 6, 2];

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 === 0) { // igaz ág
    console.log(nums[i] + ': oszthato');
  } else { // hamis ág
    console.log(nums[i] + ': nem oszthato');
  }
}


// 2. feladat
console.log('---2. feladat---');

const players = ['Peter', 'Kate', 'John'];
// for ciklus
// az indexhez hozzá kell adni 1-et, mert az első elem indexe 0, és így lesz olyan a kiíratás, mint a feladatban megadva
for (let i = 0; i < players.length; i++) {
  console.log(i + 1 + '. ' + players[i]);
}


// 3. feladat
console.log('---3. feladat---');

// A bemeneti érték tömb

function typeCheck(inputArray) {
  const a = [];
  for (let i = 0; i < inputArray.length; i++) {
    a.push(typeof (inputArray[i]));
  }
  return a; // visszatérünk az új tömbbel
}

const x = ['', 4, true];
// meghívom a typeCheck függvényt az x bemeneti tömbbel
// a console.log visszatér az összes elem kigyűjtött típusaival
console.log(typeCheck(x));