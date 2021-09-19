// const steps = 15;

// const colors = ['#003049', '#D62828', '#F77F00', '#FCBF49', '#EAE2B7'];

function setup() {
    createCanvas(500, 500);
    background(255);
    strokeJoin(BEVEL);
    noLoop();
    rectMode(CENTER);
}



function draw() {
    strokeWeight(10);
    xy = isometricCoordinates(100, height, width);
    for (let row_index = 0; row_index < xy.length; row_index++) {
        let row = xy[row_index];
        for (let col_index = 0; col_index < row.length; col_index++) {
            let col = row[col_index];
            point(col[0], col[1]);

        }

    }
}