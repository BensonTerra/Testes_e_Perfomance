const pi_is_float = require('../functions/pi_is_float');

test('pi_is_float ?', () => {
    try {
        expect(typeof(pi_is_float())).toBe('number');
    } catch (error) {
        throw error;
    }
});

test('pi_is_float > 3', () => {
    try {
        expect(pi_is_float()).toBeGreaterThan(3);
    } catch (error) {
        throw error;
    }
});