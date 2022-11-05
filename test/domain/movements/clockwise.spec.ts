import { beforeEach, describe, expect, it } from "vitest";
import { Compass } from "../../../src/domain/entities/compass";
import { toCoordinates } from "../../../src/domain/entities/coordinates";
import { Rover } from "../../../src/domain/entities/rover";
import { Clockwise } from "../../../src/domain/movements/clockwise";
import { assertCompass, range } from "../../utils";

describe("test clockwise movements", () => {
    let rover: Rover
    const clockwise = new Clockwise()

    beforeEach(() => {
        rover = new Rover(Compass.North, toCoordinates(0, 0))
    })

    it("rotate right", () => {
        clockwise.execute(rover)
        assertCompass(rover, Compass.East)
    })

    it("rotate south", () => {
        for (const _ in range(2))
            clockwise.execute(rover)
        assertCompass(rover, Compass.South)
    })

    it("rotate right to left", () => {
        for (const _ in range(3))
            clockwise.execute(rover)
        assertCompass(rover, Compass.West)
    })

    it("full right rotation", () => {
        for (const _ in range(4))
            clockwise.execute(rover)
        assertCompass(rover, Compass.North)
    })
})
