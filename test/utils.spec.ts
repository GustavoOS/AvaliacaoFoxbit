import { describe, expect, it } from "vitest";
import { range } from "../src/utils/utils";

describe("test utils", () => {
    it("range of 5 shall have 5 elements", () => {
        expect(range(5).length).toBe(5)
    })

    it("range of 5 shall have 5 elements from 0 to 4", () => {
        range(5).forEach((el, index) =>
            expect(el).toEqual(index))
    })
})
