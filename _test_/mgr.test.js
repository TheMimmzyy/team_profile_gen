const Manager = require("../lib/Mgr");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("newbie", 1, "test@test.com", testValue);
  expect(e.OfficeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("newbie", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOfficeNumber()", () => {
  const testValue = 100;
  const e = new Manager("newbie", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});