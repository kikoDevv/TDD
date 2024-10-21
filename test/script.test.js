function toUpperCase(input) {
    return input.toUpperCase();
}

test('should convert text to uppercase', () => {
    const input = 'my name is Nasrolla';
    const result = toUpperCase(input);
    expect(result).toBe('MY NAME IS NASROLLA');
});