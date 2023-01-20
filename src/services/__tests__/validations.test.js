const { validation,isEmpty } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
    it("should return false if empty",()=>{
        const result = validation("");
        expect(result).toBe(false);
    });
    it("should return false if lengt <8",()=>{
        const result = validation("hamza");
        expect(result).toBe(false);
    });
    it("should return true if lengt >=8",()=>{
        const result = validation("hamzarzine2");
        expect(result).toBe(true);
    });
    it("should return false if don't contains a number",()=>{
        const result = validation("hamzarzine");
        expect(result).toBe(false);
    });
    it("should return true if contains at least one number",()=>{
        const result = validation("hamzarzine48");
        expect(result).toBe(true);
    });

    
});

// TODO: Create tests suite for validation function
