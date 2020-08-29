import FormateAMPM from "../utils/FormateAMPM";

describe("Starting tests on function FormateAMPM(new Date())", () => {
  test("Test FormateAMPM(new Date(2011, 0, 1, 2, 3, 4, 567))", () => {
    expect(FormateAMPM(new Date(2011, 0, 1, 2, 3, 4, 567))).toBe("2:03 AM");
  });
  test("Test FormateAMPM(new Date(2011, 0, 1, 13, 45, 4, 567))", () => {
    expect(FormateAMPM(new Date(2011, 0, 1, 13, 45, 4, 567))).toBe("1:45 PM");
  });
  test("Test FormateAMPM(new Date(2011, 0, 1, 10, 30, 4, 567))", () => {
    expect(FormateAMPM(new Date(2011, 0, 1, 10, 30, 4, 567))).toBe("10:30 AM");
  });
});
