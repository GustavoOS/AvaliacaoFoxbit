import { Advance } from "../domain/movements/advance"
import { Clockwise } from "../domain/movements/clockwise"
import { CounterClockwise } from "../domain/movements/counterclockwise"

const commandMap = {
    "M": Advance,
    "R": Clockwise,
    "L": CounterClockwise
}

export function movementFactory(char: string) {
    const command = commandMap[char.toUpperCase()]
    return new command()
}
