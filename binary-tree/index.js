class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  add(node) {
    // Implement me!
    if (this.value > node.value) {
      if (!this.left) {
        this.left = node;
        return;
      } else {
        this.left.add(node);
      }
    } else if (this.value < node.value) {
      if (!this.right) {
        this.right = node;
        return;
      } else {
        this.right.add(node);
      }
    }
  }
}

const B = new BinaryTreeNode('B');
const A = new BinaryTreeNode('A');
const C = new BinaryTreeNode('C');
const D = new BinaryTreeNode('D');

// B will be the root of the tree:
B.add(A);
console.log(B);

B.add(D);
console.log(B);
B.add(C);
console.log(B);
