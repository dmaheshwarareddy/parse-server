// Logger Adapter
//
// Allows you to change the logger mechanism
//
// Adapter classes must implement the following functions:
// * info(obj1 [, obj2, .., objN])
// * error(obj1 [, obj2, .., objN])
// * query(options, callback)
// * get logger()
// * configureLogger(options)
// Default is WinstonLoggerAdapter.js

export class LoggerAdapter {
  info() {}
  error() {}
  query(options, callback) {}
  configureLogger(options) {}
}

export default LoggerAdapter;
