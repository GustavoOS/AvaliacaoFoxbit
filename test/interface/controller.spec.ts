import { describe, expect, it } from "vitest";
import { Compass } from "../../src/domain/entities/compass";
import { toCoordinates } from "../../src/domain/entities/coordinates";
import { RoverStatus } from "../../src/domain/useCases/dto/rover";
import { handle } from "../../src/interface/controller/controller";
import { RoversForm } from "../../src/interface/forms/roversform";
import { assertRover } from "../utils";

describe("test controller", () => {
    it("happy path", () => {
        const form = new RoversForm(toCoordinates(5, 5), [
            new RoverStatus(toCoordinates(1, 2), Compass.North),
            new RoverStatus(toCoordinates(3, 3), Compass.East)
        ], ["LMLMLMLMM", "MMRMMRMRRM"])

        const result = handle(form)
        expect(result.length).toBe(2)
        const [first, second] = result
        assertRover(first, 1, 3, Compass.North)
        assertRover(second, 5, 1, Compass.East)
    })
})