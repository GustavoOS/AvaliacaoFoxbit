import { Coordinates } from "../entities/coordinates";
import { Rover } from "../entities/rover";
import { RoverOutOfBoundariesException } from "../exceptions/outofbondaries";

export function validateBoundariesInRange(rover: Rover, boundaries: Coordinates) {
    const hasInvalidCoordinate = Object.keys(rover.position).some(
        (coordinate: string) => (rover.position[coordinate] < 0) ||
            (rover.position[coordinate] > boundaries[coordinate]))

    if (hasInvalidCoordinate)
        throw new RoverOutOfBoundariesException(rover)
}
