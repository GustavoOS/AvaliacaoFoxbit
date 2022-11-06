import { toCoordinates } from '../domain/entities/coordinates'
import { RoverStatus } from '../domain/useCases/dto/rover'
import { handle } from '../interface/controller/controller'
import { RoversForm } from '../interface/forms/roversform'
import { range } from '../utils/utils'
import { Prompt } from 'prompt-sync'
import { abreviatedCompass, translateAbreviatedCompass } from './compass'

export class PromptCommandInterface {
    constructor(private prompt: Prompt) { }

    execute() {
        const { boundaries, reads } = this.readInput()

        const commands = reads.map(el => el.commands)
        const rovers = reads.map(el => new RoverStatus(el.position, el.heading))
        const response = handle(new RoversForm(boundaries, rovers, commands))

        this.printOutput(response)
    }

    private readInput() {
        const [xBoundary, yBoundary] = (this.prompt("")).split(" ")
        const boundaries = toCoordinates(Number(xBoundary), Number(yBoundary))
        const reads = range(2).map(() => readRover(this.prompt))
        return {
            boundaries,
            reads
        }
    }

    private printOutput(status: RoverStatus[]) {
        status.forEach(s => {
            console.log(`${s.position.x} ${s.position.y} ${abreviatedCompass[s.heading]}`)
        })
    }
}

function readRover(prompt: Prompt) {
    const [x, y, heading] = (prompt("")).split(" ")
    const commands = prompt("")
    const result = {
        "position": toCoordinates(Number(x), Number(y)),
        "heading": translateAbreviatedCompass(heading),
        "commands": commands
    }
    return result
}
