import { convertToUpperCase } from '../convertToUpperCase.js';

describe('convertToUpperCase', () => {
  test('converts lowercase text to uppercase', () => {
    const inputText = 'hello';
    const result = convertToUpperCase(inputText);
    expect(result).toBe('HELLO');
  });

  test('leaves already uppercase text unchanged', () => {
    const inputText = 'HELLO';
    const result = convertToUpperCase(inputText);
    expect(result).toBe('HELLO');
  });

  test('converts mixed case text to uppercase', () => {
    const inputText = 'HeLLo WoRlD';
    const result = convertToUpperCase(inputText);
    expect(result).toBe('HELLO WORLD');
  });

  test('returns empty string when input is empty', () => {
    const inputText = '';
    const result = convertToUpperCase(inputText);
    expect(result).toBe('');
  });
  test('throws an error if input is not a string', () => {
    expect(() => convertToUpperCase(123)).toThrow('Input must be a string');
});
});
