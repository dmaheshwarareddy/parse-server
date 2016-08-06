'use strict';

import * as winstonLogger from './Adapters/Logger/WinstonLogger';

let logger = winstonLogger.logger;
export function setLogger(aLogger) {
  if (!aLogger) {
    console.log('NO LOGGER SET!');
  }
  logger = aLogger;
}

function getLogger() {
  return logger;
}

export function addTransport(transport) {
  winstonLogger.addTransport(transport);
}

let logging = {
  setLogger,
  getLogger,
  addTransport
};

Object.defineProperty(logging, 'logger', {
  get: getLogger
});

module.exports = logging;
export default logging;
