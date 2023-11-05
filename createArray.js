function createArray(n) {
    let arr = [];

    for (i = 0; i <= n; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }

    return arr;
}

module.exports = createArray;