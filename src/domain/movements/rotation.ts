import { Compass } from "../entities/compass"
import { Rover } from "../entities/rover"


export function rotate(rover: Rover, rotation:number) {
    let pace = (rover.heading + rotation) % Compass.__len__
        if (pace < 0)
            pace += Compass.__len__
        rover.heading = pace
}
