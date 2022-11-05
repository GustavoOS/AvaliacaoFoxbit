import { Coordinates } from "../../domain/entities/coordinates";
import { RoverStatus } from "../../domain/useCases/dto/rover";

export class RoversForm {
    constructor(
        public boundaries: Coordinates,
        public rovers: RoverStatus[],
        public commands: string[]
    ) { }
}