var logging = require('../src/logging');
var winston = require('winston');

class TestTransport extends winston.Transport {
  log(level, msg, meta, callback) {
    callback(null, true);
  }
}

describe('Logger', () => {
  it('should add transport', () => {
    const testTransport = new (TestTransport)({});
    spyOn(testTransport, 'log');
    logging.addTransport(testTransport);
    logging.logger.info('hi');
    expect(testTransport.log).toHaveBeenCalled();
  });
});
