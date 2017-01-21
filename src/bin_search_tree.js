// Implement a binary search tree data structure.
var BinSearchTree = function (initialValue) {
  initialValue = initialValue || null;
  this.Node = function (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  };
  this.root = new this.Node(initialValue);
};

BinSearchTree.prototype.insert = function (value) {
  if (!value) throw new Error('TypeError: A value must be set');
  var currentNode = this.root;
  var tempNode = new this.Node(value);
  var searching = true;
  while (searching) {
    if (!currentNode.value) {
      searching = false;
      currentNode.value = value;
    } else {
      if (value === currentNode.value) {
        searching = false;
        return currentNode;
      }
      if (value < currentNode.value) {
        if (currentNode.left === null) {
          searching = false;
          currentNode.left = tempNode;
        } else {
          currentNode = currentNode.left;
        }
      } else if (value > currentNode.value) {
        if (currentNode.right === null) {
          searching = false;
          currentNode.right = tempNode;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
};

BinSearchTree.prototype.search = function (value) {
  var currentNode = this.root;
  while (currentNode) {
    if (currentNode.value === value) return currentNode;
    currentNode = value < currentNode.value ? currentNode.left : currentNode.right;
  }
  return false;
};

BinSearchTree.prototype.remove = function remove (value) {
  var temp;
  var currentNode;
  var node = this.search(value);
  if (!node.left && !node.right) node.value = null;
  else if (!node.left || !node.right) {
    if (node.left) {
      temp = node.left;
      remove(node.left.value);
      node.value = temp.value;
      node.right = temp.right;
      node.left = temp.left;
    } else if (node.right) {
      temp = node.right;
      node.right = null;
      node.value = temp.value;
      node.left = temp.left;
      node.right = temp.right;
    }
  } else {
    currentNode = node.right;
    while (currentNode.left) {
      currentNode = currentNode.left;
    }
    node.value = currentNode.value;
    // remove(currentNode.value);
    currentNode = null;
  }
};

BinSearchTree.prototype.inorder = function inorder (node) {
  node = node || this.root;
  // dive left
  if (node.left) {
    inorder(node.left);
  }
  console.log(node.value);
  // dive right
  if (node.right) {
    inorder(node.right);
  }
};

BinSearchTree.prototype.preorder = function preorder (node) {
  node = node || this.root;
  console.log(node.value);
  // dive left
  if (node.left) {
    preorder(node.left);
  }
  // dive right
  if (node.right) {
    preorder(node.right);
  }
};

BinSearchTree.prototype.postorder = function postorder (node) {
  node = node || this.root;
  // dive left
  if (node.left) {
    postorder(node.left);
  }
  // dive right
  if (node.right) {
    postorder(node.right);
  }
  console.log(node.value);
};

module.exports = BinSearchTree;
