import calculator from "calculator";

describe("Math tests", () => {
    it("should return the sum of two values", () => {
        expect(calculator.sum(2,2)).toBe(4);
    });

    it("should return the subtraction of two values", () => {
        expect(calculator.sub(2,2)).toBe(0);
    });

    it("should return the multiplication of two values", () => {
        expect(calculator.mul(2,2)).toBe(4);
    });

    it("should return the division of two values", () => {
        expect(calculator.div(2,2)).toBe(1);
    });
});