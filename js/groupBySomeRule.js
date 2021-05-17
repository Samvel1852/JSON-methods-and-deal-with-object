// Write function that will group by some rule

function groupBy(array, fn) {
  let resObject = {};

  //by reduce

  // let resArr = array.map((item) => fn(item));
  let resObj = array.reduce((acc, item, index) => {
    let key = fn(item);
    // console.log(key, item, "first");
    if (acc.hasOwnProperty(key)) {
      acc[key].push(item);
    } else {
      acc[key] = [item];
      //   console.log(acc[key], "second");
    }
    return acc;
  }, {});

  // by forEach

  //   array.forEach((element, index) => {
  //     if (resObject.hasOwnProperty(fn(element))) {
  //       resObject[fn(element)].push(element);
  //     } else {
  //       resObject[fn(element)] = [element];
  //     }
  //   });
  return resObj;
}

console.log(groupBy(["one", "two", "three", "below", "ten"], (i) => i.length));
// console.log();
