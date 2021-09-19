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