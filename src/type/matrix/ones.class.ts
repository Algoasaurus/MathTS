import { Matrix } from "./matrix.class";

export class Ones extends Matrix {
    constructor(dimension: number | [number, number]) {
        super(makeZero());
        function isSizeNumber(dimension: any): dimension is number {
            if (Array.isArray(dimension)) {
                return false;
            } else {
                return true;
            }
        }
        function makeZero(): Array<1[]> | [1] {
            if (isSizeNumber(dimension)) {
                let array: Array<1[]> | [1] = [];
                const innerArray: 1[] = [];
                if (dimension === 1) {
                    array = [1];
                } else {
                    for (let i: number = 0; i < dimension; i++) {
                        innerArray.push(1);
                    }
                    for (let j: number = 0; j < dimension; j++) {
                        array.push(innerArray);
                    }
                }
                return array;
            } else {
                let array: Array<1[]> | [1] = [];
                const innerArray: 1[] = [];
                for (let i: number = 0; i < dimension[1]; i++) {
                    innerArray.push(1);
                }
                for (let j: number = 0; j < dimension[0]; j++) {
                    array.push(innerArray);
                }
                return array;
            }
        }
    }
}