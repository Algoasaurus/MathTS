import { Complex } from '../type/complex/complex.class';

/**
 * Compute summation of a **Complex Value** or **Real Number** with a **Complex Value**.
 * @param {Complex | number} x the first parameter to add
 * @param {Complex} y the second parameter to add
 */
export function add(x: Complex | number, y: Complex): Complex;
/**
 * Compute summation of a **Complex Value** with a **Real Number**.
 * @param {Complex} x the first parameter to add
 * @param {number} y the second parameter to add
 */
export function add(x: Complex, y: number): Complex;
/**
 * Compute summation of two **Real Number**.
 * @param {Complex} x the first parameter to add
 * @param {number} y the second parameter to add
 */
export function add(x: number, y: number): number;
export function add(x: any, y: any) {
    if (x instanceof Complex && y instanceof Complex) {
        return new Complex(x.real() + y.real(), x.imaginary() + y.imaginary());
    }
    if (x instanceof Complex && typeof y === 'number') {
        return new Complex(x.real() + y, x.imaginary());
    }
    if (typeof x === 'number' && y instanceof Complex) {
        return new Complex(y.real() + x, y.imaginary());
    }
    if (typeof x === 'number' && typeof y === 'number') {
        return x + y;
    }
    return x+y
}

/**
 * Compute product of two **Real Number**.
 * @param {number} x the first parameter to multiply
 * @param {number} y the second parameter to multiply
 */
export function multiply(x: number, y: number): number;
/**
 * Compute product of a **Complex Value** or **Real Number** with a **Complex Value**.
 * @param {Complex|number} x the first parameter to multiply
 * @param {number} y the second parameter to multiply
 */
export function multiply(x: Complex | number, y: Complex): Complex;
/**
 * Compute product of a **Complex Value** with a **Real Number**.
 * @param {Complex} x the first parameter to multiply
 * @param {number} y the second parameter to multiply
 */
export function multiply(x: Complex, y: number): Complex;
export function multiply(x: any, y: any) {
    if (typeof x === 'number' && typeof y === 'number') {
        return x * y;
    }
    if (typeof x === 'number' && y instanceof Complex) {
        return new Complex(y.real() * x, y.imaginary() * x);
    }
    if (typeof y === 'number' && x instanceof Complex) {
        return new Complex(x.real() * y, x.imaginary() * y);
    }
    if (x instanceof Complex && y instanceof Complex) {
        const realPart = x.real() * y.real() - x.imaginary() * y.imaginary();
        const imaginaryPart = x.real() * y.imaginary() + x.imaginary() * y.real();
        return new Complex(Math.round(realPart), Math.round(imaginaryPart));
    }
    throw 'error'
}

/**
 * Returns the square root of a Number or a Complex Value.
 * @param {number} x A numeric expression.
 */
export function sqrt(x: number): number | Complex;
/**
 * Returns two Complex Values, the square root of a Complex Value.
 * @param {Complex} x A Complex Value.
 */
export function sqrt(x: Complex): [Complex, Complex];
export function sqrt(x: any): any {

    if (typeof x === 'number') {
        if (x >= 0) {
            return Math.sqrt(x);
        } else {
            return new Complex(0, Math.sqrt(-x));
        }
    }
    if (x instanceof Complex) {
        const newAbs = Math.sqrt(x.abs());
        const newArg = x.arg() / 2;
        return [Complex.fromPolar(newAbs, newArg), Complex.fromPolar(newAbs, Math.PI + newArg)];
    }
}

/**
 * Returns nth root of a Real Number.
 * @param {Complex} x A Real Number.
 * @param {number} n The exponent value of the expression.
 */
export function nthRoot(x: number, n: number): number | Complex;
/**
 * Returns nth root of a Complex Value.
 * @param {Complex} x A Complex Value.
 * @param {number} n The exponent value of the expression.
 */
export function nthRoot(x: Complex, n: number): Complex[];
/**
 * Returns nth root of Real Number OR Complex Value.
 * @param {number | Complex} x A numeric expression or Complex Value.
 * @param {number} n The exponent value of the expression.
 */
export function nthRoot(x: any, n: number): any {
    // TODO: n===0 joda barresi beshe
    if (n < 1) {
        throw new RangeError();
    }
    if (typeof x === 'number') {
        if (x >= 0) {
            return Math.pow(x, 1 / n);
        } else {
            if (n % 2 === 1) {
                return -1 * Math.pow(-x, 1 / n);
            } else {
                return nthRoot(new Complex(x, 0), n);
            }
        }
    }
    if (x instanceof Complex) {
        const ans: Complex[] = [];
        const newAbs = Math.pow(x.abs(), 1 / n);
        const baseArg = x.arg();
        for (let i = 0; i < n; i++) {
            const newArg = (2 * i * Math.PI + baseArg) / n;
            ans.push(Complex.fromPolar(newAbs, newArg));
        }
        return ans;
    }
}

/**
 * Returns the natural logarithm (base e) of a number.
 * @param {number} x A Real Number.
 */
export function log(x: number): number | Complex | undefined;
/**
 * Returns the natural logarithm (base e) of a number.
 * @param {Complex} x A Complex Value.
 */
export function log(x: Complex): Complex | undefined;
/**
 * Returns the natural logarithm (base e) of a number.
 * @param {number | Complex} x A numeric expression or Complex Value.
 */
export function log(x: any): any {

    if (typeof x === 'number') {
        if (x > 0) {
            return Math.log(x);
        } else if (x < 0) {
            return log(new Complex(x, 0));
        } else {
            return undefined;
        }
    }
    if (x instanceof Complex) {
        const realPart = Math.log(x.abs());
        const imagPart = x.arg();
        return new Complex(realPart, imagPart);
    }
}

/**
 * Returns the sine of a number.
 * @param {number} x A numeric expression that contains an angle measured in radians.
 */
export function sin(x: number): number;
/**
 * Returns the sine of a Complex Value.
 * @param {number} x A Complex Value.
 */
export function sin(x: Complex): Complex;
/**
 * Returns the sine of a number or Complex Value.
 * @param {number | Complex} x A number expression or Complex Value.
 */
export function sin(x: any): any {

    if (typeof x === 'number') {
        return Math.sin(x);
    }
    if (x instanceof Complex) {
        const xReal = x.real();
        const xImag = x.imaginary();
        const ansRealPart = Math.sin(xReal) * Math.cosh(xImag);
        const ansImagPart = Math.cos(xReal) * Math.sinh(xImag);
        return new Complex(ansRealPart, ansImagPart);
    }
}

/**
 * Returns the cosine of a number.
 * @param {number} x A numeric expression that contains an angle measured in radians.
 */
export function cos(x: number): number;
/**
 * Returns the cosine of a Complex Value.
 * @param {number} x A Complex Value.
 */
export function cos(x: Complex): Complex;
/**
 * Returns the cosine of a number or Complex Value.
 * @param {number | Complex} x A number expression or Complex Value.
 */
export function cos(x: any): any {

    if (typeof x === 'number') {
        return Math.cos(x);
    }
    if (x instanceof Complex) {
        const xReal = x.real();
        const xImag = x.imaginary();
        const ansRealPart = Math.cos(xReal) * Math.cosh(xImag);
        const ansImagPart = 0 - Math.sin(xReal) * Math.sinh(xImag);
        return new Complex(ansRealPart, ansImagPart);
    }
}
