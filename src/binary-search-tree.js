const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.currentNode = null;
  }

  root() {
    return this.currentNode;
  }

  add(data) {
    let newNode = new Node(data);
    this.currentNode ? this.insert(this.currentNode, newNode) : this.currentNode = newNode;

  }

  insert(node, newNode) {
    if (node.data > newNode.data) {
      if(node.left === null) node.left = newNode;
      else this.insert(node.left, newNode);
    }

    else {
      if(node.right === null)
        node.right = newNode;
      else this.insert(node.right,newNode);
    }
  }

  has(data) {
    return this.find(data) ? true : false;
  }

  find(data, node = this.currentNode){    
    if(node === null) return null;

    if (node.data > data) return this.find(data, node.left);
    else if (node.data < data) return this.find(data, node.right);
    else return node;
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!this.has(data)) return false;
  }

  min(node = this.currentNode, min = null) {

    if (node.left === null) return min;

    min = node.left.data;
    return this.min(node.left, min);
  }

  max(node = this.currentNode, max = null) {  
    
    if (node.right === null) return max;

    max = node.right.data;
    return this.max(node.right, max);
  }
}

module.exports = {
  BinarySearchTree
};