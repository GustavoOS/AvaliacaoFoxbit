export interface Coordinates {
    x: number
    y: number
}

export function toCoordinates(x: number, y:number): Coordinates {
    return {
        "x": x,
        "y": y
    }
}
