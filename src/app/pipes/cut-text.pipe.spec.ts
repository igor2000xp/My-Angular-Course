import { CutTextPipe } from './cut-text.pipe';
import { describe, it, expect, beforeEach } from 'vitest';

describe('CutTextPipe', () => {
  let pipe: CutTextPipe;

  beforeEach(() => {
    pipe = new CutTextPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  describe('transform', () => {
    it('should return the original text if it is shorter than maxLength', () => {
      const text = 'Short text';
      const result = pipe.transform(text, 100);
      expect(result).toBe(text);
    });

    it('should return the original text if it equals maxLength', () => {
      const text = 'A'.repeat(100);
      const result = pipe.transform(text, 100);
      expect(result).toBe(text);
    });

    it('should truncate text and add ellipsis if it exceeds maxLength', () => {
      const text = 'This is a very long text that exceeds the maximum length';
      const maxLength = 20;
      const result = pipe.transform(text, maxLength);
      expect(result).toBe('This is a very long ...');
      expect(result.length).toBe(maxLength + 3); // maxLength + '...'
    });

    it('should use default maxLength of 100 when not provided', () => {
      const shortText = 'Short text';
      const result = pipe.transform(shortText);
      expect(result).toBe(shortText);

      const longText = 'A'.repeat(150);
      const result2 = pipe.transform(longText);
      expect(result2).toBe('A'.repeat(100) + '...');
    });

    it('should handle custom maxLength values', () => {
      const text = 'This is a test string';
      const result = pipe.transform(text, 10);
      expect(result).toBe('This is a ...');
      expect(result.length).toBe(13); // 10 + '...'
    });

    it('should handle empty string', () => {
      const result = pipe.transform('');
      expect(result).toBe('');
    });

    it('should handle single character text', () => {
      const result = pipe.transform('A', 1);
      expect(result).toBe('A');
    });

    it('should handle maxLength of 0', () => {
      const text = 'Test';
      const result = pipe.transform(text, 0);
      expect(result).toBe('...');
    });

    it('should handle very long text with small maxLength', () => {
      const text = 'A'.repeat(1000);
      const result = pipe.transform(text, 50);
      expect(result).toBe('A'.repeat(50) + '...');
      expect(result.length).toBe(53);
    });
  });
});
