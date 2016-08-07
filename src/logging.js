'use strict';

import WinstonLoggerAdapter from './Adapters/Logger/WinstonLoggerAdapter';

let logger = new WinstonLoggerAdapter();
export function setLogger(aLogger) {
  logger = aLogger;
}

export function getLogger() {
  return logger;
}

export default getLogger;
