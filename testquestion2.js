function setup () {
    new Canvas(600, 400);
    world.gravity.y = 10;

    floor = new Sprite();
    floor.x = 300;
    floor.y = 400;
    floor.width = 600;
    floor.height = 30;
    floor.collider = 'static';
    floor.colour = "cyan";
}

function draw() {
    background(240);
    if (mouse.presses()) {
        let circle = new Sprite(mouse.x, mouse.y, 30, 30);
        circle.diameter = 30;
        circle.bounciness = 0.5;
    }
    noStroke();
    fill(20);
}

