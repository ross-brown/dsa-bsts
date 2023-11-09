"use strict";

class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }

  /** findRecursively(val): Search from the invoking node for a node with value val.
  * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    if (val === this.val) return this;

    if (val < this.val && this.left) {
      return this.left.findRecursively(val);
    }
    if (val > this.val && this.right) {
      return this.right.findRecursively(val);
    }
  }

  /** insertRecursively(val): Starting at the invoking node, insert a new node
   * into the BST with value val. Returns the inserted node. Uses recursion. */

  insertRecursively(val) {
    if (!this.right && val > this.val) {
      this.right = new Node(val);
      return this.right;
    }

    if (!this.left && val < this.val) {
      this.left = new Node(val);
      return this.left;
    }

    if (val > this.val) return this.right.insertRecursively(val);
    if (val < this.val) return this.left.insertRecursively(val);
  }

  /** dfsPreOrder(): Traverse from the invoking node using pre-order DFS.
  * Returns an array of visited nodes. */

  dfsPreOrder() {
    let traversedNodes = [];

    traversedNodes.push(this.val);

    if (this.left) {
      traversedNodes.push(...this.left.dfsPreOrder());
    }
    if (this.right) {
      traversedNodes.push(...this.right.dfsPreOrder());
    }
    return traversedNodes;
  }

  /** dfsInOrder(): Traverse from the invoking node using in-order DFS.
  * Returns an array of visited nodes. */

  dfsInOrder() {
    let traversedNodes = [];

    if (this.left) {
      traversedNodes.push(...this.left.dfsInOrder());
    }

    traversedNodes.push(this.val);

    if (this.right) {
      traversedNodes.push(...this.right.dfsInOrder());
    }
    return traversedNodes;
  }

  /** dfsPostOrder(): Traverse from the invoking node using post-order DFS.
  * Returns an array of visited nodes. */

  dfsPostOrder() {
    let traversedNodes = [];

    if (this.left) {
      traversedNodes.push(...this.left.dfsPostOrder());
    }

    if (this.right) {
      traversedNodes.push(...this.right.dfsPostOrder());
    }

    traversedNodes.push(this.val);
    return traversedNodes;
  }

}


class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;
    while (current) {
      if (val > current.val) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }

    current = newNode;

    return this;
  }

  /** insertRecursively(val): Insert a new node into the BST with value val.
   * Returns the tree instance. Uses recursion. */

  insertRecursively(val) {
    const newNode = new Node(val);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    return this.root.insertRecursively(val);
  }

  /** find(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current = this.root;
    while (current) {
      if (current.val === val) {
        return current;
      }
      current = (val < current.val)
        ? current.left
        : current.right;
    }
  }

  /** findRecursively(val): Search the BST for a node with value val.
   * Returns the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    return this.root.findRecursively(val);
  }

  /** dfsPreOrder(): Traverse the BST using pre-order DFS.
   * Returns an array of visited nodes. */

  dfsPreOrder() {
    if (!this.root) return [];
    return this.root.dfsPreOrder();
  }

  /** dfsInOrder(): Traverse the BST using in-order DFS.
   * Returns an array of visited nodes. */

  dfsInOrder() {
    if (!this.root) return [];
    return this.root.dfsInOrder();
  }

  /** dfsPostOrder(): Traverse the BST using post-order DFS.
   * Returns an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];
    return this.root.dfsPostOrder();
  }

  /** bfs(): Traverse the BST using BFS.
   * Returns an array of visited nodes. */

  bfs() {
    if (!this.root) return [];
    let output = [];
    let toVisitQueue = [this.root];

    while (toVisitQueue.length) {
      let current = toVisitQueue.shift();

      output.push(current.val);

      if (current.left) toVisitQueue.push(current.left);
      if (current.right) toVisitQueue.push(current.right);
    }

    return output;
  }

  /** findSuccessorNode(node): Find and return node with next largest value.
   * Returns undefined if no successor. */

  findSuccessorNode(node) {

  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {
    
  }

  dfsPostOrderWithHelper() {
    if (!this.root) return [];
    let traversedNodes = [];

    function _helper(node) {
      if (node.left) {
        _helper(node.left);
      }

      if (node.right) {
        _helper(node.right);
      }

      traversedNodes.push(node.val);
    }
    _helper(this.root);
    return traversedNodes;
  }

  dfsInOrderWithHelper() {
    if (!this.root) return [];
    let traversedNodes = [];

    function _helper(node) {
      if (node.left) {
        _helper(node.left);
      }

      traversedNodes.push(node.val);

      if (node.right) {
        _helper(node.right);
      }

    }
    _helper(this.root);
    return traversedNodes;
  }

}


module.exports = {
  BinarySearchTree,
  Node,
};
