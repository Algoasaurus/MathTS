import { Complex } from './complex.class';
describe('Complex', () => {
    it('abs', () => {
        const complex = new Complex(3, 4);
        expect(complex.abs()).toBe(5);
    });
    it('arg', () => {
        const complex1 = new Complex(2, 2);
        expect(complex1.arg()).toBeCloseTo(0.785);
        const complex2 = new Complex(2, 0);
        expect(complex2.arg()).toBe(0);
        const complex3 = new Complex(-2, 0);
        expect(complex3.arg()).toBeCloseTo(3.14);
        const complex4 = new Complex(0, 0);
        expect(complex4.arg()).toBe(0);
    });
    it('real', () => {
        const complex1 = new Complex(2, 2);
        expect(complex1.real()).toBe(2);
        const complex2 = Complex.fromPolar(10, 1.3);
        expect(complex2.real()).toBeCloseTo(2.67);
    });
    it('imaginary', () => {
        const complex1 = new Complex(2, 2);
        expect(complex1.imaginary()).toBe(2);
        const complex2 = Complex.fromPolar(10, 1.3);
        expect(complex2.imaginary()).toBeCloseTo(9.635);
    });
    it('toPolar', () => {
        const complex1 = new Complex(2, 2);
        expect(complex1.toPolar().r).toBeCloseTo(2.828);
        expect(complex1.toPolar().phi).toBeCloseTo(0.785);

        const complex2 = Complex.fromPolar(2, 2);
        expect(complex2.toPolar().r).toBe(2);
        expect(complex2.toPolar().phi).toBe(2);
    });
    it('toCartesian', () => {
        const complex1 = new Complex(2, 2);
        expect(complex1.toCartesian().re).toBe(2);
        expect(complex1.toCartesian().im).toBe(2);

        const complex2 = Complex.fromPolar(2, 2);
        expect(complex2.toCartesian().re).toBeCloseTo(-0.832);
        expect(complex2.toCartesian().im).toBeCloseTo(1.818);
    });
    it('conjugate', () => {
        const complex1 = new Complex(2, 2);
        expect(complex1.conjugate().real()).toBe(2);
        expect(complex1.conjugate().imaginary()).toBe(-2);

        const complex2 = Complex.fromPolar(2, 1.5);
        expect(complex2.conjugate().abs()).toBe(2);
        expect(complex2.conjugate().arg()).toBe(-1.5);
    });
    it('inverse', () => {
        const complex1 = new Complex(0, 0);
        expect(complex1.inverse()).toBe(undefined);

        const complex2 = new Complex(3, 4);
        const complex2Inv = complex2.inverse();
        if (complex2Inv) {
            expect(complex2Inv.real()).toBe(0.12);
            expect(complex2Inv.imaginary()).toBe(-0.16);
        }

        const complex3 = Complex.fromPolar(10, 2);
        const complex3Inv = complex3.inverse();
        if (complex3Inv) {
            expect(complex3Inv.abs()).toBe(0.1);
            expect(complex3Inv.arg()).toBe(-2);
        }
    });
});
