const { NotImplementedError } = require('../extensions/index.js');

class Stack {
  _arr = []

  push(element) {
    this._arr = this._arr.concat(element)
  }

  pop() {
    if(this._arr.length == 0) return undefined
    let res = this._arr[this._arr.length - 1]
    this._arr = this._arr.slice(0, this._arr.length - 1)
    return res
  }

  peek() {
    if(this._arr.length == 0) return undefined
    return this._arr[this._arr.length - 1]
  }
}

module.exports = {
  Stack
};
