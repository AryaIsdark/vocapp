import log from 'utility/log';

const LOCALE = 'en-GB';

const DATE_OPTIONS_LONG = {
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZoneName: 'short',
  timeZone: 'UTC',
};

const shortDateFormatter = new Intl.DateTimeFormat(LOCALE, { timeZone: 'UTC' });

const longDateFormatter = new Intl.DateTimeFormat(LOCALE, DATE_OPTIONS_LONG);

/**
 * Formats a date or date-string to a string with format DD-MM-YYYY
 */
export const shortDate = (date: Date | string): string | null => {
  if (!date) return null;

  try {
    return shortDateFormatter.format(new Date(date)).replace(/\//g, '-');
  } catch {
    log.warn(
      'utility/format',
      `Could not format date into shortDate. Likely it doesn't conform to ISO 8601 (missing offset, maybe?).  Received: ${date}`,
    );
    return null;
  }
};

/**
 * Formats a date or date-string to string with format "Friday, 24 July 1969, UTC"
 */
export const longDate = (date: Date | string): string | null => {
  if (!date) return null;

  try {
    return longDateFormatter.format(new Date(date));
  } catch {
    log.warn(
      'utility/format',
      `Could not format date into longDate. Likely it doesn't conform to ISO 8601 (missing offset, maybe?).  Received: ${date}`,
    );
    return null;
  }
};

/**
 * Formats a numeric amount to en-GB with exactly two decimals (1,337.69)
 */
export const amount = (num: number): string | null => {
  try {
    if (!Number.isFinite(num)) {
      return null;
    }

    return new Intl.NumberFormat(LOCALE, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(num));
  } catch {
    return null;
  }
};

export const UI_DATE_FORMAT = 'DD-MM-YYYY';
export const API_DATE_FORMAT = 'YYYY-MM-DD';
