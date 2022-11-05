import { beforeEach, describe, expect, it } from "vitest";
import { Compass } from "../../../src/domain/entities/compass";
import { toCoordinates } from "../../../src/domain/entities/coordinates";
import { Rover } from "../../../src/domain/entities/rover";
import { CounterClockwise } from "../../../src/domain/movements/counterclockwise";
import { assertCompass, range } from "../../utils";

describe("test clockwise movements", () => {
    let rover: Rover
    const turn = new CounterClockwise()

    beforeEach(() => {
        rover = new Rover(Compass.North, toCoordinates(0, 0))
    })

    it("rotate left", () => {
        turn.execute(rover)
        assertCompass(rover, Compass.West)
    })

    it("full left rotation", () => {
        for (const _ in range(2))
            turn.execute(rover)
        assertCompass(rover, Compass.South)
    })

    it("full left rotation", () => {
        for (const _ in range(3))
            turn.execute(rover)
        assertCompass(rover, Compass.East)
    })

    it("full left rotation", () => {
        for (const _ in range(4))
            turn.execute(rover)
        assertCompass(rover, Compass.North)
    })
})
