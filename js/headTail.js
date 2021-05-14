// Write functions that will return head and tail of Array

let dates = [1, 2, 3, 4, 5];

function returnHeadAndTail(array) {
  let [head, ...tail] = array;
  //   console.log(head);
  return head;
}

function getHead(array) {
  let [head, ...tail] = array;
  return head;
}

function getTail(array) {
  let [head, ...tail] = array;
  return tail;
}

console.log(returnHeadAndTail(dates));
console.log(getHead(dates));
console.log(getTail(dates));
