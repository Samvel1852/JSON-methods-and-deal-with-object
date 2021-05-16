let shuffledObject = {
  name: "Armen",
  surname: "Karapetyan",
  age: 25,
  email1: "hgfkjjihg@gmail.com",
  email2: "jhgsdygfy@mail.ru",
  address1: "Leningradyan 20",
  address2: "Abovyan 24",
  email3: "hgsfdfetydftyf@ua.fm",
  address3: "Hanrapetutyan 14",
  address12: "Khorenatsi 4",
  email13: "uhgdfryugeyug@mail.ru",
};

function optimazeObject(inpObj) {
  let tempArr = Object.entries(inpObj);
  //   console.log(tempArr);
  let resultObj = tempArr.reduce((acc, item, index) => {
    let key = item[0];
    let value = item[1];
    // console.log(typeof key, key, -1);
    if (
      key[key.length - 1] === "1" ||
      key[key.length - 1] === "2" ||
      key[key.length - 1] === "3" ||
      key[key.length - 1] === "4" ||
      key[key.length - 1] === "5" ||
      key[key.length - 1] === "6" ||
      key[key.length - 1] === "7" ||
      key[key.length - 1] === "8" ||
      key[key.length - 1] === "9"
    ) {
      let digitsCount = key.split(/[A-Z a-z]/).join("").length;
      // console.log(digitsCount);
      if (key[key.length - digitsCount - 1] === "s") {
        key = key.slice(0, key.length - digitsCount) + "es";
        // console.log(typeof key, key, 0);
      } else {
        key = key.slice(0, key.length - digitsCount) + "s";
      }
      if (acc.hasOwnProperty(key)) {
        // console.log(key, 1);
        acc[key].push(value);
      } else {
        // console.log(key, 2);
        acc[key] = [value];
      }
    } else {
      //   console.log(typeof key, key, 4);
      acc[key] = [value];
    }
    // console.log(acc, "acc");
    return acc;
  }, {});
  return resultObj;
}

console.log(optimazeObject(shuffledObject));
