function setup () {
    new Canvas(600, 400);
    world.gravity.y = 10;
}

function draw() {
    background(240);
    if (mouse.presses()) {
        let circle = new Sprite(mouse.x, mouse.y, 30, 30);
        circle.diameter = 30;
    }
    noStroke();
    fill(20);
}
