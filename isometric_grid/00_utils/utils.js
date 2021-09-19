function isometricCoordinates(d, height, width) {
    h = (Math.sqrt(3) / 2) * d;
    x = 10
    y = 10
    coordinateMatrix = []
    for (let row = 0; row < height / d; row++) {
        coordinateMatrix[row] = []
        for (let col = 0; col < width / h; col++) {

            // console.log(row, col, x, y, col % 2);
            // console.log(row, col, (col / h) % 2);
            if (col % 2) {
                // console.log(x + (0.5 * d), y);
                // point(x + (0.5 * d), y)
                coordinateMatrix[row][col] = [x + (0.5 * d), y]

            } else {
                // console.log(x, y);
                // point(x, y);
                coordinateMatrix[row][col] = [x, y]
            }
            y += h;
        } // end col loop
        y = 10;
        x += d;
    } // end row loop
    return coordinateMatrix
}

function rangeList(begin, end) {
    var range_list = [];
    for (var i = begin; i <= end - 1; i++) {
        range_list.push(i);
    }
    return range_list;
}

function pairList(l1, l2) {
    var pair_list = [];
    for (let row_index = 0; row_index < l1.length; row_index++) {
        row = l1[row_index];
        for (let col_index = 0; col_index < l2.length; col_index++) {
            col = l2[col_index];
            pair_list.push([row, col])
        }
    }
    return pair_list;
}

function removeItemOnce(arr, value) {
    var index = arr.indexOf(value);
    if (index > -1) {
        arr.splice(index, 1);
    }
    return arr;
}