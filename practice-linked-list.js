'use strict';

const Node = require('./node.js');

class List {

  constructor() {
    this.head = null;
  }

  append(val) {
    let node = new Node(val);
    if (!this.head) {
      this.head = node;
      return this;
    }
    let current = this.head;
    
    while(current.next) {
      current = current.next;
    }
    current.next = node;
    return this;
  }
  prepend(val){
    let holdThis = this.head;
    let node = new Node(val);
    this.head = node;
    this.head.next = holdThis;
    return this;
  }
  insertAfter(val, newVal){
    if(!val){
      let node = new Node(newVal);
      this.head = node;
      return this;
    }
    let current = this.head;
    while(current.next && current.value != val){
      current = current.next;
    }
    //  jlm can i modularize the following with prepend()?
    let holdThis = current.next;
    let node = new Node(newVal);
    current.next = node;
    current.next.next = holdThis;
    return this;
  }
  insertBefore(val, newVal){
    let node = new Node(newVal);
    if(!this.head){
      this.head = node;
      return this;
    }
    let current = this.head;
    while(current.next !== null && current.next.value != val){
      current = current.next;
      if(current !== val){
        return 'Exception';
      }
    }
    let holdThis = current.next;
    current.next = node;
    current.next.next = holdThis;
    return this;
  }
}

module.exports = List;