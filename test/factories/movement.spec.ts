import { describe, expect, it } from "vitest";
import { Advance } from "../../src/domain/movements/advance";
import { Clockwise } from "../../src/domain/movements/clockwise";
import { CounterClockwise } from "../../src/domain/movements/counterclockwise";
import { movementFactory } from "../../src/factories/movement";
import { InvalidCommandException } from "../../src/interface/exceptions/invalidcommand";

describe("test movement command factory", () => {
    it("M should instanciate advance", () => {
        const command = movementFactory("M")
        expect(command).toBeInstanceOf(Advance)
    })

    it("R should instaciate clockwise", () => {
        expect(movementFactory("R")).toBeInstanceOf(Clockwise)
    })

    it("L should instaciate clockwise", () => {
        expect(movementFactory("L")).toBeInstanceOf(CounterClockwise)
    })

    it("should be case insensitive", () => {
        expect(movementFactory("m")).toBeInstanceOf(Advance)
    })

    it("invalid char shall throw", () => {
        expect(() => movementFactory("3")).toThrow(InvalidCommandException)
    })
})
