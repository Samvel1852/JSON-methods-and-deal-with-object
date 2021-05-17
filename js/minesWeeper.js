// Mines Weeper

function makeGameDesk(size) {
  let resArray = [];
  let tempArr = [];
  for (let i = 0; i < size; i += 1) {
    for (let j = 0; j < size; j += 1) {
      tempArr.push(0);
      //   console.log(tempArr, "temp");
    }
    resArray.push(tempArr);
    tempArr = [];
    // console.log(resArray, "res");
  }
  return resArray;
}

// console.log(makeGameDesk(10));

function addRandomBombs(desk, bombCount) {
  for (let i = 0; i < bombCount; i += 1) {
    let randX = Math.floor(Math.random() * desk.length);
    let randY = Math.floor(Math.random() * desk.length);
    desk[randX][randY] = "*";
  }
  return desk;
}

// console.log(addRandomBombs(makeGameDesk(6), 6));

function addNumbersInDesk(desk) {
  let number = 0;
  let resDesk = desk;
  for (let row = 0; row < resDesk.length; row += 1) {
    for (let item = 0; item < resDesk.length; item += 1) {
      if (row === 0 && item === 0 && desk[row][item] !== "*") {
        if (desk[row][item + 1] === "*") {
          number += 1;
        }
        if (desk[row + 1][item + 1] === "*") {
          number += 1;
        }
        if (desk[row + 1][item] === "*") {
          number += 1;
        }
        desk[row][item] = number;
        number = 0;
      } else if (
        row === 0 &&
        item === resDesk.length - 1 &&
        desk[row][item] !== "*"
      ) {
        if (desk[row][item - 1] === "*") {
          number += 1;
        }
        if (desk[row + 1][item - 1] === "*") {
          number += 1;
        }
        if (desk[row + 1][item] === "*") {
          number += 1;
        }
        desk[row][item] = number;
        number = 0;
      } else if (
        row === resDesk.length - 1 &&
        item === 0 &&
        resDesk[row][item] !== "*"
      ) {
        if (desk[row - 1][item] === "*") {
          number += 1;
        }
        if (desk[row - 1][item + 1] === "*") {
          number += 1;
        }
        if (desk[row][item + 1] === "*") {
          number += 1;
        }
        desk[row][item] = number;
        number = 0;
      } else if (
        row === resDesk.length - 1 &&
        item === resDesk.length - 1 &&
        resDesk[row][item] !== "*"
      ) {
        if (desk[row - 1][item] === "*") {
          number += 1;
        }
        if (desk[row - 1][item - 1] === "*") {
          number += 1;
        }
        if (desk[row][item - 1] === "*") {
          number += 1;
        }
        desk[row][item] = number;
        number = 0;
      } else if (
        row === 0 &&
        item !== 0 &&
        item !== resDesk.length - 1 &&
        resDesk[row][item] !== "*"
      ) {
        if (resDesk[row][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row][item + 1] === "*") {
          number += 1;
        }
        resDesk[row][item] = number;
        number = 0;
      } else if (
        row === resDesk.length - 1 &&
        item !== 0 &&
        item !== resDesk.length - 1 &&
        resDesk[row][item] !== "*"
      ) {
        if (resDesk[row][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row][item + 1] === "*") {
          number += 1;
        }
        resDesk[row][item] = number;
        number = 0;
      } else if (
        item === 0 &&
        row !== 0 &&
        row !== resDesk.length - 1 &&
        resDesk[row][item] !== "*"
      ) {
        if (resDesk[row - 1][item] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item] === "*") {
          number += 1;
        }
        resDesk[row][item] = number;
        number = 0;
      } else if (
        item === resDesk.length - 1 &&
        row !== 0 &&
        row !== resDesk.length - 1 &&
        resDesk[row][item] !== "*"
      ) {
        if (resDesk[row - 1][item] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item] === "*") {
          number += 1;
        }
        resDesk[row][item] = number;
        number = 0;
      } else if (
        row !== 0 &&
        item !== 0 &&
        row !== resDesk.length - 1 &&
        item !== resDesk.length - 1 &&
        resDesk[row][item] !== "*"
      ) {
        if (resDesk[row - 1][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item] === "*") {
          number += 1;
        }
        if (resDesk[row - 1][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item + 1] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item] === "*") {
          number += 1;
        }
        if (resDesk[row + 1][item - 1] === "*") {
          number += 1;
        }
        if (resDesk[row][item - 1] === "*") {
          number += 1;
        }
        resDesk[row][item] = number;
        number = 0;
      }
    }
  }
  return resDesk;
}

// addNumbersInDesk(addRandomBombs(makeGameDesk(5), 5));

console.log(addNumbersInDesk(addRandomBombs(makeGameDesk(6), 3)));

function runMinesWeeper(desk, rowIndex, colIndex) {
  let row = rowIndex;
  let item = colIndex;
  let resDesk = desk;
  if (resDesk[row][item] === 0 && row === 0 && item === 0) {
    resDesk[row][item] === "ok";
    for (let i = 0; i < resDesk.length; i += 1) {
      if (resDesk[row + 1 + i][item] === 0) {
        resDesk[row + 1 + i][item] === "ok";
      }
    }
  }
}
