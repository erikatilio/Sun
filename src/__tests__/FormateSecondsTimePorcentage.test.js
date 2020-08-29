import FormateSecondsTimePorcentage from "../utils/FormateSecondsTimePorcentage";

describe("Starting tests on function FormateSecondsTimePorcentage(seconds)", () => {
  test("Test FormateSecondsTimePorcentage('0')", () => {
    expect(FormateSecondsTimePorcentage("0")).toBe("1.666666666666667%");
  });
  test("Test FormateSecondsTimePorcentage('1')", () => {
    expect(FormateSecondsTimePorcentage("1")).toBe("3.333333333333334%");
  });
  test("Test FormateSecondsTimePorcentage('59')", () => {
    expect(FormateSecondsTimePorcentage("59")).toBe("100%");
  });
});
