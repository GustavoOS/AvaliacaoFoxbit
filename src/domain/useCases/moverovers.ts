import { Plateau } from "../entities/plateau"
import { Rover } from "../entities/rover"
import { validateBoundariesInRange } from "../validators/boundaries"
import { MovementCommand } from "./command"
import { RoverStatus } from "./dto/rover"

export class MoveHoversUseCase {
    constructor(private plateau: Plateau) { }

    moveRovers(actions: MovementCommand[], roverIndex: number) {
        actions.forEach((action) => {
            const rover: Rover = this.plateau.rovers[roverIndex]
            action.execute(rover)
            validateBoundariesInRange(rover, this.plateau.boundaries)
        })
    }

    getStatus(): RoverStatus[] {
        return this.plateau.rovers.map(rover =>
            new RoverStatus(rover.position, rover.heading)
        )
    }
}
