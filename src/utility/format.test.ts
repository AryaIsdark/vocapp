import * as format from './format';

describe('src/utility/format', () => {
  let loggerSpy: jest.SpyInstance;

  beforeEach(() => {
    loggerSpy = jest
      .spyOn(global.console, 'warn')
      .mockImplementation(jest.fn());
  });

  afterEach(() => {
    loggerSpy.mockRestore();
  });

  describe('shortDate', () => {
    it('should return a short date', () => {
      const date = '2020-04-20T16:20:20.581Z';
      expect(format.shortDate(date)).toEqual('20-04-2020');
    });

    it('should return early if no date is provided', () => {
      expect(format.shortDate('')).toEqual(null);
      expect(loggerSpy).not.toHaveBeenCalled();
    });

    it('should log a warning if date can not be formatted', () => {
      const date = 'not even a date';

      expect(format.shortDate(date)).toEqual(null);
      expect(loggerSpy).toHaveBeenCalled();
    });
  });

  describe('longDate', () => {
    it('should return a long date', () => {
      const date = 'July 20, 1969, 20:17:40 UTC';
      const expectedString = 'Sunday, 20 July 1969, UTC';

      expect(format.longDate(date)).toEqual(expectedString);
    });

    it('should return early if no date is provided', () => {
      expect(format.longDate('')).toEqual(null);
      expect(loggerSpy).not.toHaveBeenCalled();
    });

    it('should log a warning if date can not be formatted', () => {
      const date = 'nineteen hundred and yesterday';

      expect(format.longDate(date)).toEqual(null);
      expect(loggerSpy).toHaveBeenCalled();
    });
  });

  describe('amount', () => {
    it('should return a formatted amount', () => {
      const amt1 = 314159265;
      const amt2 = 314159265.3;
      const amt3 = 314159265.35;
      const amt4 = 314159265.359;

      expect(format.amount(amt1)).toEqual('314,159,265.00');
      expect(format.amount(amt2)).toEqual('314,159,265.30');
      expect(format.amount(amt3)).toEqual('314,159,265.35');
      expect(format.amount(amt4)).toEqual('314,159,265.36');
    });

    it('should return null if amount can not be formatted', () => {
      const amt = 'ONE MILLION DOLLARS!!!';

      // @ts-ignore
      expect(format.amount(amt)).toEqual(null);
    });
  });
});
