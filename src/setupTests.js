// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
const originalWarn = console.warn.bind(console.warn);
beforeAll(() => {
  console.warn = (msg) =>
    !msg.toString().includes("componentWillReceiveProps") && originalWarn(msg);
});
afterAll(() => {
  console.warn = originalWarn;
});

import "@testing-library/jest-dom";
global.TextEncoder = require("util").TextEncoder;
