import { Sum } from "../Sum"


test("Sum of two variables a, b" , () =>{
    const result = Sum(5,6);

    // Assertion
    expect(result).toBe(11);
})