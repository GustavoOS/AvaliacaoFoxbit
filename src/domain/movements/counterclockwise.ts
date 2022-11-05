import { Rover } from "../entities/rover";
import { MovementCommand } from "../useCases/command";
import { rotate } from "./rotation";

export class CounterClockwise implements MovementCommand {
    execute(rover: Rover) {
        rotate(rover, -1)
    }
}
