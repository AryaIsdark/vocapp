import * as persistLogs from './persistLogs';

type LogFunction = (logName: string, ...args: any[]) => void;

export type Logger = {
  error: LogFunction;
  warn: LogFunction;
  info: LogFunction;
  debug: LogFunction;
};

/**
 * Returns bold text for use with console.log (and co.) methods whether it's
 * used in the browser or Node.js.
 *
 * @param str
 */
const bold = (str: string) => {
  if (navigator.userAgent.includes('jsdom')) {
    return [`\x1b[1m${str}\x1b[0m`];
  }

  return [`%c${str}`, 'font-weight: bold;'];
};

const noop: LogFunction = () => {};

const createConsoleLogger = (
  logLevel: 'error' | 'warn' | 'log',
): LogFunction => (logName: string, ...args: any[]) => {
  const formattedName = logName ? ` [${logName}]` : '';
  const timeStamp = new Date().toISOString().slice(11, -1);

  console[logLevel](
    ...bold(`${timeStamp} [${logLevel}]${formattedName}`),
    ...args,
  );
};

export const consoleLogger: Logger = {
  error: createConsoleLogger('error'),
  warn: createConsoleLogger('warn'),
  info: createConsoleLogger('log'),
  debug: createConsoleLogger('log'),
};

export const serverLogger: Logger = {
  error: (logName: string, ...args: any[]) => {
    persistLogs.push('error', { name: logName, ...args });
  },
  warn: (logName: string, ...args: any[]) => {
    persistLogs.push('warning', { name: logName, ...args });
  },
  info: (logName: string, ...args: any[]) => {
    persistLogs.push('information', { name: logName, ...args });
  },
  debug: noop,
};

const log =
  process.env.NODE_ENV === 'production' ? serverLogger : consoleLogger;

window.onerror = (...args) => {
  log.error('window', ...args);
  return true;
};

export default log;
