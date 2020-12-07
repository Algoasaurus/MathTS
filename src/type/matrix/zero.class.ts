import { Matrix } from './matrix.class';

export class Zero extends Matrix {
    constructor(n: number) {
        super(makeZero());
        function makeZero(): Array<Array<0>> | [0] {
            let array: Array<Array<0>> | [0] = [];
            const innerArray: Array<0> = [];
            if (n === 1) {
                array = [0];
            } else {
                for (let i: number = 0; i < n; i++) {
                    innerArray.push(0);
                }
                for (let j: number = 0; j < n; j++) {
                    array.push(innerArray);
                }
            }
            return array;
        }
    }
}
