var capture;
var recording = false;
var c;
var gif;

function setup() {
    createCanvas(500, 500);
    // background(255);
    strokeJoin(BEVEL);
    noLoop();
    rectMode(CENTER);
    frameRate(3)

    // stroke('rgba(0,0,0,0.1)');
}

function draw() {

    // stroke(random(255), random(255), random(255));

    coordinateMatrix = isometricCoordinates(150, height, width);
    numRows = coordinateMatrix.length;
    numCols = coordinateMatrix[0].length;
    rowOptions = rangeList(0, numRows);
    colOptions = rangeList(0, numCols);

    rowColOptions = pairList(rowOptions, colOptions);
    rowColOptionIndexes = rangeList(0, rowColOptions.length);
    usedStarts = [];
    x1 = 0;
    y1 = 0;
    x2 = 0;
    y2 = 0;
    while (rowColOptionIndexes.length > 1) {
        // stroke(random(255), random(255), random(255), 255);
        // strokeWeight(random(1, 25));
        randPairIndex = random(rowColOptionIndexes);
        randPair = rowColOptions[randPairIndex];
        rowColOptionIndexes = removeItemOnce(rowColOptionIndexes, randPairIndex);
        xy = coordinateMatrix[randPair[0]][randPair[1]];
        // x1 = xy_1[0]
        // y1 = xy_1[1]
        // x1 = rowColOptions[randPair_1][0]
        // y1 = rowColOptions[randPair_1][1]



        if (usedStarts.length == 0) {
            x1 = xy[0];
            y1 = xy[1];

            randPairIndex_1 = random(rowColOptionIndexes);
            randPair_1 = rowColOptions[randPairIndex_1];
            rowColOptionIndexes = removeItemOnce(rowColOptionIndexes, randPairIndex_1);
            xy_1 = coordinateMatrix[randPair_1[0]][randPair_1[1]];
            x2 = xy_1[0];
            y2 = xy_1[1];

            // console.log(x1, y1, x2, y2);


        } else {

            x1 = usedStarts[usedStarts.length - 1][0];
            y1 = usedStarts[usedStarts.length - 1][1];

            x2 = xy[0];
            y2 = xy[1];
            // console.log(usedStarts[usedStarts.length - 1]);
            // console.log(x1, y1, x2, y2);
        }


        usedStarts.push([xy[0], xy[1]]);

        line(x1, y1, x2, y2);
        // console.log(x1, y1, x2, y2);
    }
}