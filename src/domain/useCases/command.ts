import { Rover } from "../entities/rover";


export interface MovementCommand {
    execute(rover: Rover)
}
