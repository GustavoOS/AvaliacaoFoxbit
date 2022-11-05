import { Compass } from "../../entities/compass";
import { Coordinates } from "../../entities/coordinates";

export class RoverStatus {
    constructor(
        public position: Coordinates,
        public heading: Compass
    ) { }
}
