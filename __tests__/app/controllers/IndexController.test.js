const IndexController = require('../../../src/app/controllers/IndexController');

describe('IndexController', () => {
  let testMocks;

  beforeEach(() => {
    testMocks = {
      req: {},
      res: {
        json: jest.fn(),
      },
    };
  });

  describe('index', () => {
    it('Should return json message', () => {
      IndexController.index(testMocks.req, testMocks.res);
      expect(testMocks.res.json).toHaveBeenCalled();
    });
  });
});
