const isTriangle = require('./isTriangle');

test('3, 4, 5 is triangle', () => {
    expect(isTriangle(3, 4, 5)).toBe(true);
});

test('7, 0, 1 is triangle', () => {
    expect(isTriangle(7, 0, 1)).toBe(false);
});

test('7, -1, 1 not triangle', () => {
    expect(isTriangle(7, -1, 1)).toBe(false);
});

test('7, 1.1, 1 not triangle', () => {
    expect(isTriangle(7, 1.1, 1)).toBe(false);
});