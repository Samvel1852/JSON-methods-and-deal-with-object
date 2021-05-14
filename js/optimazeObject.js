let shuffledObject = {
  name: "Armen",
  surname: "Karapetyan",
  age: 25,
  email1: "jhsgbdjhg@gmail.com",
  email2: "jhgsdygfy@mail.ru",
  address1: "Nalbandyan 8",
  address2: "Abovyan 24",
  email3: "hgsfdfetydftyf@ua.fm",
  address3: "Hanrapetutyan 14",
};

function optimazeObject(inpObj) {
  let resObj = {};
  let tempArr = Object.entries(inpObj);
  console.log(tempArr);
  let resultObj = tempArr.reduce((acc, item, index) => {
    acc[item[0]] = item[1];
    return acc;
  }, {});
  return resultObj;
}

console.log(optimazeObject(shuffledObject));
