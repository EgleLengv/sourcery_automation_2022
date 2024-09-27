const isRightTriangle = require('./isRightTriangle');

test('3, 4, 5 is Right triangle', () => {
    expect(isRightTriangle(3, 4, 5)).toBe(true);
});

test('7, 0, 1 not triangle', () => {
    expect(isRightTriangle(7, 0, 1)).toBe(false);
});

test('7, -1, 1 not triangle', () => {
    expect(isRightTriangle(7, -1, 1)).toBe(false);
});

test('7, 1.1, 1 not triangle', () => {
    expect(isRightTriangle(7, 1.1, 1)).toBe(false);
});