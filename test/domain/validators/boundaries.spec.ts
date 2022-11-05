import { describe, expect, it } from "vitest";
import { Compass } from "../../../src/domain/entities/compass";
import { toCoordinates } from "../../../src/domain/entities/coordinates";
import { Rover } from "../../../src/domain/entities/rover";
import { validateBoundariesInRange } from "../../../src/domain/validators/boundaries";

describe("test validations", () => {
    const boundaries = toCoordinates(3, 3)


    it("in range", () => {
        const rover = new Rover(Compass.West, toCoordinates(0, 0))
        expect(() => validateBoundariesInRange(rover, boundaries)).not.toThrow()
    })

    it("negative x shall throw", () => {
        const rover = new Rover(Compass.West, toCoordinates(-1, 0))
        expect(() => validateBoundariesInRange(rover, boundaries)).toThrow()
    })

    it("negative y shall throw", () => {
        const rover = new Rover(Compass.West, toCoordinates(0, -1))
        expect(() => validateBoundariesInRange(rover, boundaries)).toThrow()
    })
})
