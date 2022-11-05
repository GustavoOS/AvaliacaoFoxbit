import { compassToCoordinates } from "../entities/compass";
import { Rover } from "../entities/rover";
import { MovementCommand } from "../useCases/command";

export class Advance implements MovementCommand {
    execute(rover: Rover) {
        rover.move(compassToCoordinates(rover.heading))
    }
}
