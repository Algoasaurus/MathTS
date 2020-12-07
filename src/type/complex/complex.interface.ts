/**
 * @interface
 * The representation of a complex number as a sum of a real and imaginary number, `z = x + iy`, is called its **Cartesian representation**.
 * @property {number} re The real part of Complex number.
 * @property {number} im The imaginary part of Complex number.
 */
export interface CartesianComplex {
    /**
     * The real part of Complex number.
     * @type {number}
     */
    re: number;
    /**
     * The imaginary part of Complex number.
     * @type {number}
     */
    im: number;
}

/**
 * @interface
 * The representation of a complex number in terms of r and φ where r is the length of the vector and φ is the angle made with the real axis.
 * @property {number} r is the radial distance from the pole `(0,0)`.
 * @property {number} phi is the angle made with the real axis.
 */
export interface PolarComplex {
    /**
     * The `r` coordinate represents the radial distance from the pole `(0,0)`.
     *
     * The `r` must be *greater than or equal to* 0, `r ≥ 0`.
     * @type {number}
     */
    r: number;
    /**
     * The angle `phi`(**φ**) is defined to start at 0 from a reference direction, and to increase for rotations in counterclockwise (ccw) orientation.
     * @type {number} in **Radian**
     */
    phi: number;
}
