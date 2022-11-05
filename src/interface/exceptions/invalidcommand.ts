export class InvalidCommandException extends Error {
    constructor(command: string) {
        super(`Invalid command ${command}`)
    }
}
