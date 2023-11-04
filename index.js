const Tree = require('./Tree');

const prettyPrint = (node, prefix = "", isLeft = true) => {
    if (node === null) {
      return;
    }
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
    }
    console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
    }
};

let array = [2, 3, 6, 1, 5, 8, 9, 54, 21, 532, 34, 643, 69, 2034, 42, 235, 346, 457, 568];

const tree = new Tree(array);

prettyPrint(tree.root);
console.log(tree.depth(tree.find(2)));
console.log(tree.isBalanced());