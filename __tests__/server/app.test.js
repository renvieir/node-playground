const App = require('../../src/server/app');

describe('App', () => {
  let instance;
  // let testMocks;

  beforeEach(() => {
    // testMocks = {};
    instance = new App({
      port: 5555,
    });
  });

  describe('init', () => {
    it('Should set app from instance', () => {
      instance.init();
      expect(instance).toEqual({
        app: expect.any(Function),
        env: expect.objectContaining({
          port: 5555,
        }),
      });
    });
  });
});
