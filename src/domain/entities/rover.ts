import { Compass } from "./compass";
import { Coordinates } from "./coordinates";



export class Rover {
    constructor(
        public heading: Compass,
        public position: Coordinates
    ) { }

    move(movementVector: Coordinates) {
        Object.keys(this.position).forEach((coordinate) =>
            this.position[coordinate] += movementVector[coordinate])
    }
}
