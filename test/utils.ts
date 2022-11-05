import { expect } from "vitest"
import { Compass } from "../src/domain/entities/compass"
import { Rover } from "../src/domain/entities/rover"
import { RoverStatus } from "../src/domain/useCases/dto/rover"
import { movementFactory } from "../src/factories/movement"

export const assertRover = (rover: RoverStatus, x: number, y: number, heading: Compass) => {
    expect(rover.position.x).toEqual(x)
    expect(rover.position.y).toEqual(y)
    expect(Compass[rover.heading]).toEqual(Compass[heading])
}

export const range = (max: number) => [...Array(max).keys()]

export const assertCompass = (rover: Rover, heading: Compass) =>
    expect(Compass[rover.heading]).toEqual(Compass[heading])

export const toMovement = (str: string) => 
    [...str].map(char => movementFactory(char))
