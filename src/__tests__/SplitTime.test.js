import SplitTime from "../utils/SplitTime";

describe("Starting tests on function SplitTime(time)", () => {
  test("Test SplitTime('12:35 AM')", () => {
    var arr = SplitTime("12:35 AM");
    expect(arr).toEqual(["12", "35", "AM"]);
  });
  test("Test SplitTime('5:59:23 PM')", () => {
    var arr = SplitTime("5:59:23 PM");
    expect(arr).toEqual(["5", "59", "23", "PM"]);
  });
});
