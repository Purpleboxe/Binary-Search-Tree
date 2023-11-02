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

    insert (data, root = this.root) {
        if (root === null) {
            return new Node(data);
        }

        if (data < root.data) {
            root.left = this.insert(data, root.left);
        } else {
            root.right = this.insert(data, root.right);
        }

        return root;
    }

    delete (data, root = this.root) {
        if (root === null) {
            return root;
        }
        
        if (data < root.data) {
            root.left = this.delete(data, root.left);
        } else if (data > root.data) {
            root.right = this.delete(data, root.right);
        } else {
            
            if (root.left === null) {
                return root.right;
            } else if (root.right === null) {
                return root.left;
            } else {
                const minData = (root) => {
                    let min = root.data;
                    let current = root;
                    
                    while (current.left !== null) {
                        min = root.left.data;
                        current = root.left;
                    }

                    return min;
                }

                root.data = minData(root.right);
                root.right = this.delete(root.data, root.right);
            }
        }

        return root;
    }

    find (value, root = this.root) {
        if (root.data === value) {
            return root;
        }

        if (value < root.data) {
            return this.find(value, root.left);
        } else if (value > root.data) {
            return this.find(value, root.right);
        }
    }

    levelOrder (result = [], arr = [], root = this.root) {
        if (root === null) {
            return null;
        }

        result.push(root.data);
        arr.push(root.left);
        arr.push(root.right);

        while (arr.length) {
            const current = arr[0];
            arr.shift();
            this.levelOrder(result, arr, current);
        }

        return result;
    }

    inOrder (result = [], root = this.root) {
        if (root === null) {
            return null;
        }

        if (root.left) {
            this.inOrder(result, root.left);
        }

        result.push(root.data);

        if (root.right) {
            this.inOrder(result, root.right);
        }

        return result;
    }

    preOrder (result = [], root = this.root) {
        if (root === null) {
            return null;
        }

        result.push(root.data);

        if (root.left) {
            this.preOrder(result, root.left);
        }

        if (root.right) {
            this.preOrder(result, root.right);
        }

        return result;
    }

    postOrder (result = [], root = this.root) {
        if (root === null) {
            return null;
        }

        if (root.left) {
            this.postOrder(result, root.left);
        }

        if (root.right) {
            this.postOrder(result, root.right);
        }

        result.push(root.data);

        return result;
    }
}

module.exports = Tree;