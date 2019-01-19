'use strict';

const List = require('./practice-linked-list.js');

console.log('creating new list');

let bill = new List;
bill.append(1);
bill.append(2);
bill.append(3);
bill.append(4);
bill.append(5);

console.log('new list: ');
console.log(bill);

console.log('Iterating through linked list values: ');
let current = bill.head;
while(current.next){
  console.log(current.value)
  current = current.next;
};
console.log(current.value);



