const Node = require('./Node');

class Tree {
    constructor (array) {
        this.root = this.buildTree(array);
    }

    buildTree (array) {
        let newArray = [...new Set(array)].sort((a, b) => a - b);
        if (newArray.length === 0) {
            return null;
        }
        const mid = parseInt(newArray.length / 2);
        const root = new Node(newArray[mid], this.buildTree(newArray.slice(0, mid)), this.buildTree(newArray.slice(mid + 1)));

        return root;
    }
}

module.exports = Tree;