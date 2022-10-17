const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');


function removeKFromList(node, value) {
  if (!value) {
    return node
  }
  if (!node) {
    return null
  }
  let mas = [];
  while (node) {
    mas.push(node.value);
    node = node.next;
  }
  mas = mas.filter((elem) => elem !== value);
  return mas.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }
    return new ListNode(cur);
  }, null);

}

module.exports = {
  removeKFromList
};
