function setup() {
    createCanvas(500, 500, SVG);
    background(255);
    strokeJoin(BEVEL);
    noLoop();
    rectMode(CENTER);


    // stroke('rgba(0,0,0,0.1)');
}

function draw() {

    coordinateMatrix = isometricCoordinates(100, height, width);
    numRows = coordinateMatrix.length;
    numCols = coordinateMatrix[0].length;
    rowOptions = rangeList(0, numRows);
    colOptions = rangeList(0, numCols);

    rowColOptions = pairList(rowOptions, colOptions);
    rowColOptionIndexes = rangeList(0, rowColOptions.length);


    while (rowColOptionIndexes.length > 1) {
        stroke(random(255), random(255), random(255), 255);
        strokeWeight(random(1, 25));
        randPairIndex_1 = random(rowColOptionIndexes);
        randPair_1 = rowColOptions[randPairIndex_1];
        rowColOptionIndexes_1 = removeItemOnce(rowColOptionIndexes, randPairIndex_1);
        xy_1 = coordinateMatrix[randPair_1[0]][randPair_1[1]]
        x1 = xy_1[0]
        y1 = xy_1[1]
            // x1 = rowColOptions[randPair_1][0]
            // y1 = rowColOptions[randPair_1][1]

        randPairIndex_2 = random(rowColOptionIndexes);
        randPair_2 = rowColOptions[randPairIndex_2];
        rowColOptionIndexes_2 = removeItemOnce(rowColOptionIndexes, randPairIndex_2);
        xy_2 = coordinateMatrix[randPair_2[0]][randPair_2[1]]
        x2 = xy_2[0]
        y2 = xy_2[1]
            // x2 = rowColOptions[randPair_2][0]
            // y2 = rowColOptions[randPair_2][1]

        // console.log(randPair_1, randPair_2);
        // console.log(coordinateMatrix[randPair_1[0]][randPair_1[1]])
        line(x1, y1, x2, y2)
    }
    // save("isometric_finite_lines_10.svg");










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