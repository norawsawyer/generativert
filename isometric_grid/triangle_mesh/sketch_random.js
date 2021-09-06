const steps = 34;

const colors = ['#003049', '#D62828', '#F77F00', '#FCBF49', '#EAE2B7'];

function setup() {
    createCanvas(500, 500);
    background(255);
    stroke(0);
    strokeWeight(1);
    strokeJoin(BEVEL);
    noLoop();
    rectMode(CENTER);
}

function draw() {
    const matrix = [];

    const s = width / steps;

    for (let i = 1; i < steps; i++) {
        const line = [];
        for (let j = 1; j < steps; j++) {
            const x = map(i, 0, steps, 0, width) + (j % 2 == 0 ? -s / 2 : 0) + lerp(-1, 1, random()) * s / 3;
            const y = map(j, 0, steps, 0, height) + lerp(-1, 1, random()) * s / 3;
            line.push({ x, y });
            // point(x, y);
        }
        matrix.push(line);
    }
    for (let i = 0; i < steps - 2; i++) {
        for (let j = 0; j < steps - 2; j++) {
            noFill();
            fill(colors[floor(random() * colors.length)]);
            triangle(
                matrix[j][i].x, matrix[j][i].y,
                matrix[j + 1][i].x, matrix[j + 1][i].y,
                matrix[j + (i % 2 == 0 ? 1 : 0)][i + 1].x, matrix[j + (i % 2 == 0 ? 1 : 0)][i + 1].y
            );

            fill(colors[floor(random() * colors.length)]);
            triangle(
                matrix[j + (i % 2 == 1 ? 1 : 0)][i].x, matrix[j + (i % 2 == 1 ? 1 : 0)][i].y,
                matrix[j][i + 1].x, matrix[j][i + 1].y,
                matrix[j + 1][i + 1].x, matrix[j + 1][i + 1].y
            );
        }
    }
}