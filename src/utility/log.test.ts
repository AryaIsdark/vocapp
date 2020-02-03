import { consoleLogger, serverLogger } from './log';
import * as persistLogs from './persistLogs';

describe('src/utility/log', () => {
  describe('consoleLogger', () => {
    it('logs error', () => {
      const consoleErrorSpy = jest
        .spyOn(global.console, 'error')
        .mockImplementation(() => {});

      consoleLogger.error('foo');
      expect(consoleErrorSpy).toBeCalledTimes(1);

      consoleErrorSpy.mockRestore();
    });
    it('logs warning', () => {
      const consoleWarnSpy = jest
        .spyOn(global.console, 'warn')
        .mockImplementation(() => {});

      consoleLogger.warn('foo');
      expect(consoleWarnSpy).toBeCalledTimes(1);

      consoleWarnSpy.mockRestore();
    });
    it('logs info', () => {
      const consoleLogSpy = jest
        .spyOn(global.console, 'log')
        .mockImplementation(() => {});

      consoleLogger.info('foo');
      expect(consoleLogSpy).toBeCalledTimes(1);

      consoleLogSpy.mockRestore();
    });
    it('logs debug', () => {
      const consoleLogSpy = jest
        .spyOn(global.console, 'log')
        .mockImplementation(() => {});

      consoleLogger.debug('foo');
      expect(consoleLogSpy).toBeCalledTimes(1);

      consoleLogSpy.mockRestore();
    });
  });

  describe('serverLogger', () => {
    it('logs error', () => {
      const persistLogsSpy = jest
        .spyOn(persistLogs, 'push')
        .mockImplementation(jest.fn());

      serverLogger.error('foo');
      expect(persistLogsSpy).toHaveBeenCalledWith('error', { name: 'foo' });

      persistLogsSpy.mockRestore();
    });
    it('logs warning', () => {
      const persistLogsSpy = jest
        .spyOn(persistLogs, 'push')
        .mockImplementation(jest.fn());

      serverLogger.warn('foo');
      expect(persistLogsSpy).toHaveBeenCalled();

      persistLogsSpy.mockRestore();
    });
    it('logs info', () => {
      const persistLogsSpy = jest
        .spyOn(persistLogs, 'push')
        .mockImplementation(jest.fn());

      serverLogger.info('foo');
      expect(persistLogsSpy).toHaveBeenCalled();

      persistLogsSpy.mockRestore();
    });
    it('logs debug', () => {
      const persistLogsSpy = jest
        .spyOn(persistLogs, 'push')
        .mockImplementation(jest.fn());

      serverLogger.debug('foo');
      expect(persistLogsSpy).not.toHaveBeenCalled();

      persistLogsSpy.mockRestore();
    });
  });
});
