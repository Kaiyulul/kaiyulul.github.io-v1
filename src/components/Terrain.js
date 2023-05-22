import React from "react";
import { ReactP5Wrapper} from "react-p5-wrapper";
import "../styles/Terrain.css";

let cols, rows;
let scl = 25;

let flying = 0;
let terrain = [];

const Sketch = p5 => {
    let w = p5.windowWidth;
    let h = p5.windowHeight;

    p5.setup = () => {
        p5.createCanvas(w, h, p5.WEBGL);
        cols = w / scl;
        rows = h / scl;

        for (let x = 0; x < cols; x++) {
            terrain[x] = [];
            for (let y = 0; y < rows; y++) {
              terrain[x][y] = 0; //specify a default value for now
            }
          }
    };

    p5.draw = () => {
        flying -= 0.04;
        let yoff = flying;
        for (let y = 0; y < rows; y++) {
            let xoff = 0;
            for (let x = 0; x < cols; x++) {
                terrain[x][y] = p5.map(p5.noise(xoff, yoff), 0, 1, -100, 100);
                xoff += 0.2;
            }
            yoff += 0.2;
        }

        p5.background(20);
        p5.rotateX(p5.PI / 2.4);
        p5.fill(232, 114, 35, 100);
        p5.translate(-w / 2, -h / 20);
        for (let y = 0; y < rows - 1; y++) {
            p5.beginShape(p5.QUAD_STRIP);
            for (let x = 0; x < cols; x++) {
                p5.vertex(x * scl, y * scl, terrain[x][y]);
                p5.vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
            }
            p5.endShape();
        }

    }

    p5.windowResized = () => {
        p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
    }
};

const Terrain = () => (
    <div id="terrain">
        <ReactP5Wrapper sketch={Sketch} />
    </div>
);

export default Terrain;