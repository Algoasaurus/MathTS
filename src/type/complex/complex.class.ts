import { CartesianComplex, PolarComplex } from './complex.interface';

/**
 * @class
 * Class representing a **Complex Value**.
 */
export class Complex {

    /**
     * Returns a *Complex value* from **Polar Coordinate**.
     * @param {number} r is the radial distance from the pole `(0,0)`.
     * @param {number} phi is the angle made with the real axis.
     */
    public static fromPolar(r: number, phi: number) {
        // TODO: Check r is > 0
        const re = r * Math.cos(phi);
        const im = r * Math.sin(phi);
        return new Complex(re, im);
    }
    /**
     * Create a *Complex value*.
     * @param {number} re **Real Part* of Complex Value.
     * @param {number} im **Imaginary Part* of Complex Value.
     */
    constructor(private readonly re: number, private readonly im: number) { }

    /**
     * @method
     * Compute the **magnitude** of a *complex value*.
     *
     * For a complex number `a + bi`, the magnitude is computed as `(a^2 + b^2)^0.5`.
     *
     * Examples:
     *
     *      const a = new Complex(3, 4);
     *      a.abs();                // returns 5
     *
     *      const b = Complex.fromPolar(3, 4);
     *      b.abs();                // returns 3
     *
     * @return {number} The **magnitude** of *complex value*.
     */
    public abs(): number {
        return Math.sqrt(this.re * this.re + this.im * this.im);
    }

    /**
     * @method
     * Compute the **argument** of a *complex value*.
     *
     * For a complex number `a + bi`, the argument is computed as `atan2(b, a)`.
     *
     * Examples:
     *
     *      const a = new Complex(2, 2);
     *      a.arg();                   // returns number 0.25
     *
     *      const b = Complex.fromPolar(2, 1.5);
     *      b.arg()                    // returns number 1.5
     *
     * @return {number} The **argument** of *complex value*.
     */
    public arg(): number {
        return Math.atan2(this.im, this.re);
    }

    /**
     * @method
     * Compute the **real part** of a *complex value*.
     *
     * For a complex number `a + bi`, the argument is computed as `atan2(b, a)`.
     *
     * Examples:
     *
     *      const a = new Complex(2, 3);
     *      a.re();                     // returns number 2
     *      a.im();                     // returns number 3
     *
     *      const b = Complex.fromPolar(10, 0.52);
     *      b.re();                     // returns number 5.03
     *      b.im();                     // returns number 4.96
     *
     * @return {number} The **real part** of *complex value*.
     */
    public real(): number {
        return this.re;
    }

    /**
     * @method
     * Get the **imaginary part** of a complex number.
     *
     * For a complex number `a + bi`, the function returns `b`.
     *
     * Examples:
     *
     *      const a = new Complex(2, 3);
     *      a.re();                     // returns number 2
     *      a.im();                     // returns number 3
     *
     *      const b = Complex.fromPolar(10, 0.52);
     *      b.re();                     // returns number 5.03
     *      b.im();                     // returns number 4.96
     *
     * @return {number} The **imaginary part** of *complex value*.
     */
    public imaginary(): number {
        return this.im;
    }

    /**
     * @method
     * Return the value of the complex number in **Polar** notation.
     *
     * The angle phi will be set in the interval of [-pi, pi].
     * @return {{r: number, phi: number}} Returns and object with properties `r` and `phi`.
     */
    public toPolar(): PolarComplex {
        return { r: this.abs(), phi: this.arg() };
    }

    /**
     * @method
     * Return the value of the complex number in **Cartesian** notation.
     * @return {{re: number, im: number}} Returns and object with properties `re` and `im`.
     */
    public toCartesian(): CartesianComplex {
        return { re: this.real(), im: this.imaginary() };
    }

    /**
     * @method
     * Compute the complex **conjugate** of a *complex value*..
     * If `x = a+bi`, the complex conjugate of `x` is `a - bi`.
     *
     * Examples:
     *
     *    new Complex({ re:2, im:3 }).conjugate();  // returns Complex 2 - 3i
     *    new Complex({ re:2, im:-3 }).conjugate();  // returns Complex 2 + 3i
     *    new Complex({ re:0, im:-5.2 }).conjugate();  // returns Complex 5.2i
     *
     * @return {Complex} complex **conjugate** of the *complex value*.
     */
    public conjugate(): Complex {
        return new Complex(this.re, 0 - this.im);
    }

    /**
     * @method
     * Compute the complex **inverse** of a *complex value*.
     *
     * If `x = a+bi`, the complex inverse of `x` is `y`. So `x*y=1`.
     *
     * If `x = 0`, the complex inverse of `x` is `undefined`.
     *
     * Examples:
     *
     *      new Complex(3, 4).inverse();  // returns Complex 0.12 - 0.16i
     *      new Complex(0, 0).inverse();  // returns undefined
     *
     * @return {Complex | undefined} complex **inverse** of the *complex value*.
     */
    public inverse(): Complex | undefined {
        if (this.re === 0 && this.im === 0) {
            return undefined;
        } else {
            return new Complex(this.re / Math.pow(this.abs(), 2), 0 - (this.im / Math.pow(this.abs(), 2)));
        }
    }

}
