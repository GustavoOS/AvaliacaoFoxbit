import { Advance } from "../domain/movements/advance"
import { Clockwise } from "../domain/movements/clockwise"
import { CounterClockwise } from "../domain/movements/counterclockwise"
import { InvalidCommandException } from "../interface/exceptions/invalidcommand"

const commandMap = {
    "M": Advance,
    "R": Clockwise,
    "L": CounterClockwise
}

export function movementFactory(char: string) {
    const command = commandMap[char.toUpperCase()] ?? throwInvalid(char)
    return new command()
}


function throwInvalid(command: string) {
    throw new InvalidCommandException(command)
}

export const toMovement = (command: string) =>
    [...command].map(char => movementFactory(char))

