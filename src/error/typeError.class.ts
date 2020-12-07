import { MathError } from './mathError.class';

export class MathTypeError extends MathError {

    constructor(
        fn: string,
        argName: string,
        currentType: string) {
        super();
        this.name = 'TypeError';
        if (this.stack) {
            this.stack =
                this.name +
                '\n' + '   ' + fn + ' ' + argName + ' ' + currentType + ' ' + this.stack.split('\n')[2];
        }
    }
}
