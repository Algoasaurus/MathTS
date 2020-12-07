import { isRoCnum } from './matrix.util';
// type MatrixType = number[] | MatrixType[];

export class Matrix<T extends number[] | number[][] = number[] | number[][]> {

    constructor(private matrix: T) {
        if (this.isRowVector(matrix)) {
            return;
        }
        if (this.is2dMatrix(matrix)) {
            const matriceColumnLength: number = matrix[0].length;
            matrix.forEach((row) => {
                if (row.length !== matriceColumnLength) {
                    throw new Error('wrong mtarice');
                }
            });
        }
    }

    /**
     * checks if matrix is row vector or not
     * @param {number[][] | number[]}  matrix - matrix to check.
     * @returns {boolean} true/false
     */
    private isRowVector(matrix: number[][] | number[]): matrix is number[] {
        return !Array.isArray(matrix[0]);
    }

    /**
     * checks if matrix is 2d matrix or not
     * @param {number[][] | number[]}  matrix - matrix to check.
     * @returns {boolean} true/false
     */
    private is2dMatrix(matrix: number[][] | number[]): matrix is number[][] {
        return Array.isArray(matrix[0]);
    }

    /**
     * get column length of the matrix
     */
    private columnLength(): number {
        if (this.isRowVector(this.matrix)) {
            return this.matrix.length;
        }
        if (this.is2dMatrix(this.matrix)) {
            return this.matrix[0].length;
        } else {
            return 0;
        }
    }

    /**
     * get row length of the matrix
     */
    private rowLength(): number {
        if (this.isRowVector(this.matrix)) {
            return 1;
        } else {
            return this.matrix.length;
        }
    }

    /**
     * get array value of the matrix
     */
    public value(): T {
        return this.matrix;
    }

    /**
     * get dimension of the matrix
     */
    size(): [number, number] {
        return [this.rowLength(), this.columnLength()];
    }

    /**
     * gets element of given row and column of the matrix
     * @param row row number of element from 1 to matrix row length
     * @param column column number of element from 1 to matrix column length
     */
    element(row: number, column: number): number {
        if (isRoCnum(row, this.rowLength()) && isRoCnum(column, this.columnLength())) {
            if (this.isRowVector(this.matrix)) {
                return this.matrix[column - 1];
            }
            if (this.is2dMatrix(this.matrix)) {
                return this.matrix[row - 1][column - 1];
            } else {
                return 0;
            }
        } else {
            throw new Error('wrong column or row number');
        }
    }

    column(n: number): Array<[number]> {
        if (isRoCnum(n, this.columnLength())) {
            if (this.isRowVector(this.matrix)) {
                return [[this.matrix[n - 1]]];
            }
            if (this.is2dMatrix(this.matrix)) {
                const column: Array<[number]> = [];
                this.matrix.forEach(row => {
                    column.push([row[n - 1]]);
                });
                return column;
            } else {
                throw new Error('wrong column number');
            }
        } else {
            throw new Error('wrong column number');
        }
    }

    row(n: number): number[] {
        if (isRoCnum(n, this.rowLength())) {
            if (this.isRowVector(this.matrix)) {
                return this.matrix;
            }
            if (this.is2dMatrix(this.matrix)) {
                return this.matrix[n - 1];
            } else {
                throw new Error('wrong row number');
            }
        } else {
            throw new Error('wrong row number');
        }
    }

    getMatrix(): void {
        console.log(this.matrix);
    }
}