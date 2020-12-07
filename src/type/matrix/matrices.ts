import { Matrix } from "./matrix.class";

/**
 * set of mathematics operation on matrices
 */
export namespace Matrices {
    /**
     * multiply **Row Vector** To **Column Vector**
     * @param rowVector a row vector
     * @param columnVector a column vector
     */
    function mrtc(rowVector: number[], columnVector: [number][]): number {
        let sum: number = 0;
        for (let i: number = 0; i < rowVector.length; i++) {
            sum = sum + rowVector[i] * columnVector[i][0];
        }
        return sum;
    }

    /**
     * multiply two matrix **A*B**
     * @param {Matrix} A matrix one to multiply
     * @param {Matrix} B matrix two to multiply
     */
    export function multiply(A: Matrix, B: Matrix): Matrix {
        const array: number[][] = [];
        if (A.size()[1] === B.size()[0]) {
            for (let i: number = 0; i < A.size()[0]; i++) {
                const innerArray: number[] = [];
                let rowVector: number[] = A.row(i + 1);
                for (let j: number = 0; j < B.size()[1]; j++) {
                    let columnVector: [number][] = B.column(j + 1);
                    innerArray.push(mrtc(rowVector, columnVector));
                }
                array.push(innerArray);
            }
            return new Matrix(array);
        } else {
            throw new Error("cannot multiply");
        }
    }
}