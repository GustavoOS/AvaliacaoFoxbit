import { beforeEach, describe, it } from "vitest";
import { Compass } from "../../../src/domain/entities/compass";
import { toCoordinates } from "../../../src/domain/entities/coordinates";
import { Rover } from "../../../src/domain/entities/rover";
import { assertRover } from "../../utils";



describe("test movements from north", () => {

    let rover: Rover

    beforeEach(() => {
        rover = new Rover(Compass.North, { "x": 0, "y": 0 })
    })

    it("Move different x and y", () => {
        rover.move(toCoordinates(2, -3))
        assertRover(rover, 2, -3, Compass.North)
    })
})
