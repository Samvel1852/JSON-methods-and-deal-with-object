// Write function that will zip arrays into object

function zipArraysToObject(keys, values) {
  let zippedObj = {};
  keys.forEach((element, index) => {
    if (!values[index]) {
      zippedObj[element] = null;
    } else {
      zippedObj[element] = values[index];
    }
  });
  return zippedObj;
  //   keys.reduce((acc, item){},  {});
}

console.log(zipArraysToObject(["a", "b", "c"], [1, 2]));
