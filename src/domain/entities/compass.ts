import { toCoordinates } from "./coordinates"

export enum Compass {
    North = 0,
    East,
    South,
    West,
    __len__
}

const coords = [
    toCoordinates(0, 1),
    toCoordinates(1, 0),
    toCoordinates(0, -1),
    toCoordinates(-1, 0),
]

export const heads = ["N", "E", "S", "W"]
export const headings = (h: string) =>heads.indexOf(h)

export const compassToCoordinates = (heading: Compass) => coords[heading]
