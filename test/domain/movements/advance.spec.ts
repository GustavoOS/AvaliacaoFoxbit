import { beforeEach, describe, it } from "vitest";
import { Compass } from "../../../src/domain/entities/compass";
import { toCoordinates } from "../../../src/domain/entities/coordinates";
import { Rover } from "../../../src/domain/entities/rover";
import { Advance } from "../../../src/domain/movements/advance";
import { assertRover, range } from "../../utils";

describe("test clockwise movements", () => {
    let rover: Rover
    const mover = new Advance()

    beforeEach(() => {
        rover = new Rover(Compass.North, toCoordinates(0, 0))
    })

    it("Move north", () => {
        mover.execute(rover)
        assertRover(rover, 0, 1, Compass.North)
    })


    it("move many times", () => {
        for(const _ in range(10))
            rover.move(toCoordinates(0, 1))
        assertRover(rover, 0, 10, Compass.North)
    })
})
