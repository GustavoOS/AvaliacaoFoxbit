import { Coordinates } from "./coordinates";
import { Rover } from "./rover";


export interface Plateau {
    rovers: Rover[]
    boundaries: Coordinates
}
