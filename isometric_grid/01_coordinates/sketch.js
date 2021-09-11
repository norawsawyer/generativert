// const steps = 15;

// const colors = ['#003049', '#D62828', '#F77F00', '#FCBF49', '#EAE2B7'];

function setup() {
    createCanvas(500, 500);
    background(255);
    strokeJoin(BEVEL);
    noLoop();
    rectMode(CENTER);
}

function isometricCoordinates(d, height, width) {
    h = (Math.sqrt(3) / 2) * d;
    x = 0
    y = 0
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
        y = 0;
        x += d;
    } // end row loop
    return coordinateMatrix
}

function draw() {
    strokeWeight(10);
    xy = isometricCoordinates(40, height, width);
    for (let row_index = 0; row_index < xy.length; row_index++) {
        let row = xy[row_index];
        for (let col_index = 0; col_index < row.length; col_index++) {
            let col = row[col_index];
            point(col[0], col[1]);

        }

    }
}