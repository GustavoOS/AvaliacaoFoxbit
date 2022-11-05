import * as readline from 'node:readline/promises'
import { headings } from '../domain/entities/compass'
import { toCoordinates } from '../domain/entities/coordinates'
import { RoverStatus } from '../domain/useCases/dto/rover'
import { handle } from '../interface/controller/controller'
import { RoversForm } from '../interface/forms/roversform'
import { range } from '../utils/utils'

export class PromptCommandInterface {
    constructor(private reader: readline.Interface) { }

    async execute() {
        const {boundaries, reads} = await this.readInput()
        
        const commands = reads.map(el => el.commands)
        const rovers = reads.map(el => new RoverStatus(el.position, el.heading))
        const response = handle(new RoversForm(boundaries, rovers, commands))

        console.log(JSON.stringify(response))
    }

    private async readInput(){
        const [xBoundary, yBoundary] = (await this.reader.question("Type the plateau boundaries")).split(" ")
        const boundaries = toCoordinates(Number(xBoundary), Number(yBoundary))
        const reads = await Promise.all(range(2).map(async (_, i) => {
            const [x, y, heading] = (await this.reader.question("Type the rover position")).split(" ")
            const commands = await this.reader.question("Type the commands")
            return {
                "position": toCoordinates(Number(x), Number(y)),
                "heading": headings(heading),
                "commands": commands
            }
        }))
        return {
            boundaries,
            reads
        }
    }
}
