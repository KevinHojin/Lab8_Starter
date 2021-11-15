// unit.test.js

const functions = require("../code-to-unit-test/unit-test-me.js");

// TODO - Part 2
//Tests for isPhoneNumber
test("8888888888 is not phone number", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isPhoneNumber("8888888888")).toBe(false);
});

test("Hello World is not phone number", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isPhoneNumber("Hello World")).toBe(false);
});

test("(888)888-8888 is phone number", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isPhoneNumber("(888)888-8888")).toBe(true);
});

test("912-949-8888 is phone number", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isPhoneNumber("912-949-8888")).toBe(true);
});

//Tests for isEmail
test("thisisnotemail is not email", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isEmail("thisisnotemail")).toBe(false);
});
test("1234567 is not email", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isEmail("1234567")).toBe(false);
});
test("k1an@ucsd.edu is email", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isEmail("k1an@ucsd.edu")).toBe(true);
});
test("iamEmail@hello.com is email", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isEmail("iamEmail@hello.com")).toBe(true);
});

//Tests for isStrongPassword
test("123456 is not strong password", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isStrongPassword("123456")).toBe(false);
});
test("a is not strong password", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isStrongPassword("a")).toBe(false);
});
test("Strong123 is strong password", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isStrongPassword("Strong123")).toBe(true);
});
test("amistrong is strong password", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isStrongPassword("amistrong")).toBe(true);
});

//Tests for isDate
test("01/01/199 is not date", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isDate("01/01/199")).toBe(false);
});
test("I/am/notDate is not date", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isDate("I/am/notDate")).toBe(false);
});
test("1/1/1999 is date", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isDate("1/1/1999")).toBe(true);
});
test("12/31/2021 is date", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isDate("12/31/2021")).toBe(true);
});

//Tests for isHexColor
test("#darkblue is not HexColor", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isHexColor("#darkblue")).toBe(false);
});
test("ThisIsBlue is not HexColor", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isHexColor("ThisIsBlue")).toBe(false);
});
test("000 is HexColor", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isHexColor("000")).toBe(true);
});
test("#255 is HexColor", () => {
  // TODO
  const functions = require("../code-to-unit-test/unit-test-me.js");
  expect(functions.isHexColor("#255")).toBe(true);
});
