// Write function that will do reverse operation for Object.entries

let fromPairs = [
  ["a", 1],
  ["b", 2],
];

function reverseFn(array) {
  let reversedObj = {};
  for (let item in array) {
    reversedObj[array[item][0]] = array[item][1];
  }
  return reversedObj;
}

console.log(reverseFn(fromPairs));
