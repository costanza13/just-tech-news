const { format_date, format_plural, format_url } = require('../utils/helpers');

test('format_date() returns a date string', () => {
  const date = new Date('2021-06-05 20:13:00');

  expect(format_date(date)).toBe('6/5/2021');
});

test('format_plural() returns a properly pluralized string', () => {
  expect(format_plural('Hamburger', 3)).toBe('Hamburgers');
  expect(format_plural('Hot dog', 1)).toBe('Hot dog');
});

test('format_url() returns a simplified url string', () => {
  const url1 = format_url('http://test.com/page/1');
  const url2 = format_url('https://www.coolstuff.com/abcdefg/');
  const url3 = format_url('https://www.google.com?q=hello');

  expect(url1).toBe('test.com');
  expect(url2).toBe('coolstuff.com');
  expect(url3).toBe('google.com');
});