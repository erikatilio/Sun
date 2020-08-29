import CalculatePeriodDay from "../utils/CalculatePeriodDay";

describe("Starting tests on function CalculatePeriodDay(timeNow, timeSunrie, timeSunset)", () => {
  test("Test CalculatePeriodDay('12:11 PM', '9:59:11 AM', '10:02:11 PM')", () => {
    expect(CalculatePeriodDay("12:11 PM", "9:59:11 AM", "10:02:11 PM")).toBe(
      true
    );
  });
  test("Test CalculatePeriodDay('10:15 AM', '9:59:11 AM', '10:02:11 PM')", () => {
    expect(CalculatePeriodDay("10:15 AM", "9:59:11 AM", "10:02:11 PM")).toBe(
      false
    );
  });
  test("Test CalculatePeriodDay('9:59 AM', '9:59:11 AM', '10:02:11 PM')", () => {
    expect(CalculatePeriodDay("9:59 AM", "9:59:11 AM", "10:02:11 PM")).toBe(
      true
    );
  });
  test("Test CalculatePeriodDay('10:02 PM', '9:59:11 AM', '10:02:11 PM')", () => {
    expect(CalculatePeriodDay("10:02 PM", "9:59:11 AM", "10:02:11 PM")).toBe(
      true
    );
  });
});
