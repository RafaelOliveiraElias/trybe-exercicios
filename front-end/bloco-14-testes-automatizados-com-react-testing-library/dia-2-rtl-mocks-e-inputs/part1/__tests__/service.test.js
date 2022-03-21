const service = require('../src/service');


test("random100 called", () => {
  // testando se a função foi chamada
  service.random100 = jest.fn().mockImplementation(() => 10);
  expect(service.random100()).toBe(10);
  service.random100()
  expect(service.random100).toHaveBeenCalled()

  service.random100.mockReset()
  service.random100 = jest.fn().mockImplementation((a, b) => a / b);
  service.random100()
  expect(service.random100).toHaveBeenCalled()
  expect(service.random100(4,2)).toBe(2);
  expect(service.random100).toHaveBeenCalledTimes(2);

  service.random100.mockReset()
  service.random100 = jest.fn().mockImplementation((a, b, c) => a * b * c);
  service.random100()
  expect(service.random100).toHaveBeenCalled()
  expect(service.random100(1,2,3)).toBe(6);

});