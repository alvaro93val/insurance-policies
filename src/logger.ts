import fileSystem from 'fs';
import { ILogObject, Logger } from 'tslog';

export function logToTransport(logObject: ILogObject) {
  const date: Date = new Date();
  const directorioLogs = './logs';
  const fileLog: string =
    date.getFullYear().toString() + '_' + (date.getMonth() + 1).toString() + '_' + date.getDate().toString();

  if (!fileSystem.existsSync(directorioLogs)) {
    fileSystem.mkdirSync(directorioLogs);
  }

  fileSystem.appendFileSync(`${directorioLogs}/${fileLog}.log`, JSON.stringify(logObject) + '\n');
}
/**
 * constant to create logs
 */
const logger: Logger = new Logger({ dateTimeTimezone: 'Europe/Berlin' });
/**
 * Method to record the log in the txt
 */
logger.attachTransport({
  silly: logToTransport,
  debug: logToTransport,
  trace: logToTransport,
  info: logToTransport,
  warn: logToTransport,
  error: logToTransport,
  fatal: logToTransport
});

export default logger;
