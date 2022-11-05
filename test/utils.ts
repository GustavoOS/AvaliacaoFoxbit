import { expect } from "vitest"
import { Compass } from "../src/domain/entities/compass"
import { Rover } from "../src/domain/entities/rover"
import { RoverStatus } from "../src/domain/useCases/dto/rover"

export const assertRover = (rover: RoverStatus, x: number, y: number, heading: Compass) => {
    expect(rover.position.x).toEqual(x)
    expect(rover.position.y).toEqual(y)
    expect(Compass[rover.heading]).toEqual(Compass[heading])
}

export const assertCompass = (rover: Rover, heading: Compass) =>
    expect(Compass[rover.heading]).toEqual(Compass[heading])
