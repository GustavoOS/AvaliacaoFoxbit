import { describe, it } from "vitest";
import { Compass } from "../../../src/domain/entities/compass";
import { toCoordinates } from "../../../src/domain/entities/coordinates";
import { Rover } from "../../../src/domain/entities/rover";
import { MoveHoversUseCase } from "../../../src/domain/useCases/moverovers";
import { toMovement } from "../../../src/factories/movement";

import { assertRover } from "../../utils";

describe("test use case", () => {
    it("sample", () => {
        const useCase = new MoveHoversUseCase({
            "rovers": [
                new Rover(Compass.North, toCoordinates(1, 2)),
                new Rover(Compass.East, toCoordinates(3, 3))
            ], "boundaries": toCoordinates(5, 5)
        })
        useCase.moveRovers(toMovement("LMLMLMLMM"), 0)
        useCase.moveRovers(toMovement("MMRMMRMRRM"), 1)
        const [first, second] = useCase.getStatus()
        assertRover(first, 1, 3, Compass.North)
        assertRover(second, 5, 1, Compass.East)
    })
})
