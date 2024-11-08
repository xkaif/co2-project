import { sanitizeInput } from '../stringUtils';

describe('sanitizeInput', () => {
  test('entfernt HTML-Sonderzeichen', () => {
    expect(sanitizeInput('<script>')).toBe('script');
    expect(sanitizeInput('"test"')).toBe('test');
  });
});