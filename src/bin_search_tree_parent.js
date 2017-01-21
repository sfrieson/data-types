var BinSearchTree = function (init) {
  this.root = null;
  if (init) this.root = new this.Node(init);
};

BinSearchTree.prototype.Node = function (init, parent) {
  this.value = init || null;
  this.left = null;
  this.right = null;
  this.parent = parent || null;
};

BinSearchTree.prototype.traverse = function (val) {
  var current = this.root;
  var parent = null;
  var side = '';
  while (current) {
    if (val === current.value) break;
    else if (val < current.value) {
      parent = current;
      current = current.left;
      side = 'left';
    } else if (val > current.value) {
      parent = current;
      current = current.right;
      side = 'right';
    }
  }
  return {current: current, parent: parent, side: side};
};

BinSearchTree.prototype.search = function (searchVal) {
  var response = this.traverse(searchVal);
  if (response.current && response.current.value === searchVal) {
    return response.current;
  } else return false;
};

BinSearchTree.prototype.insert = function (insVal) {
  var response = this.traverse(insVal);
  if (response.current) {
    if (response.current.value === insVal) {
      return response.current;
    }
  } else {
    if (!response.parent) {
      this.root = new this.Node(insVal);
      return this.root;
    }
    response.parent[response.side] = new this.Node(insVal, response.parent);
    return response.parent[response.side];
  }
};

BinSearchTree.prototype.remove = function (deleteVal) {
  var response = this.traverse(deleteVal);
  if (response.current.left && response.current.right) {
    var parent = response.current;
    var current = response.current.right;
    while (current) {
      parent = current;
      current = current.left;
    }
    this.remove(parent.value);
    response.parent[response.side] = parent;
  } else if (response.current.left || response.current.right) {
    var swapSide = response.current.left ? 'left' : 'right';
    response.parent[response.side] = response.current[swapSide];
  } else response.parent[response.side] = null;
};

module.exports = BinSearchTree;
