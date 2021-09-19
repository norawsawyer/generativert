function setup() {
    createCanvas(500, 500);
    background(255);
    strokeJoin(BEVEL);
    noLoop();
    rectMode(CENTER);
    // stroke('rgba(0,0,0,0.1)');
}

function draw() {
    // strokeWeight(10);

    coordinateMatrix = isometricCoordinates(100, height, width);

    for (let index = 0; index < 20; index++) {
        stroke(random(255), random(255), random(255))
        strokeWeight(random(1, 25));
        randRow_1 = int(random(0, coordinateMatrix.length));
        randCol_1 = int(random(0, coordinateMatrix[0].length));
        rand_x1 = coordinateMatrix[randRow_1][randCol_1][0];
        rand_y1 = coordinateMatrix[randRow_1][randCol_1][1];

        randRow_2 = int(random(0, coordinateMatrix.length));
        randCol_2 = int(random(0, coordinateMatrix[0].length));
        rand_x2 = coordinateMatrix[randRow_2][randCol_2][0];
        rand_y2 = coordinateMatrix[randRow_2][randCol_2][1];

        console.log(rand_x1, rand_y1, rand_x2, rand_y2);
        line(rand_x1, rand_y1, rand_x2, rand_y2);
        // line(random(width), random(height), random(width), random(height));


    }



}