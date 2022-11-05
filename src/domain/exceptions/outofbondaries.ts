import { Rover } from "../entities/rover"

export class RoverOutOfBoundariesException extends Error {
    constructor(rover: Rover){
        super(`Rover is out of boundaries at position ${JSON.stringify(rover.position)}`)
    }
}
