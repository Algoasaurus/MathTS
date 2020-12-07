import { Matrix } from '../type/matrix/matrix.class';

export class Statistics1d {
    constructor(private vector: Matrix<number[]>) { }

    public N(): number {
        return this.vector.value().length;
    }

    public arithmeticMean(): number {
        return (this.summation() / this.N());
    }

    public geometricMean(): number {
        return Math.sqrt(this.multiplication());
    }

    public summationByPower(power: number): number {
        return this.vector.value().reduce((total: number = 0, currentValue: number) => total + Math.pow(currentValue, power));
    }

    public summation(): number {
        return this.summationByPower(1);
    }

    public variance(): number {
        return ((this.summationByPower(2) / this.N()) - Math.pow(this.arithmeticMean(), 2));
    }

    public multiplication(): number {
        return this.vector.value().reduce((a: number, b: number) => a * b);
    }

}
