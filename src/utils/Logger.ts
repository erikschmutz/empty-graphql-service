import { createLogger, transports, format } from 'winston';

const logger = createLogger();

logger.add(
  new transports.Console({
    format: format.combine(format.colorize(), format.simple()),
  })
);

logger.add(new transports.File({ filename: 'logs/combined.log' }));

export default logger;
