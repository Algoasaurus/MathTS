export namespace FullMath {

    export const PI: number = Math.PI;
    export function add(a: number): number {
        return a + 1;
    }

    export class Amar {
        constructor(
            private vector: [number, number][]
        ) { }

        meanX(): number {
            return (this.summationX(1) / this.vector.length);
        }

        meanY(): number {
            return (this.summationY(1) / this.vector.length);
        }

        mean(): [number, number] {
            let sumX: number = 0;
            let sumY: number = 0;
            const N: number = this.vector.length;
            this.vector.forEach(deraye => {
                sumX = sumX + deraye[0];
                sumY = sumY + deraye[1];
            });
            return [sumX / N, sumY / N];
        }

        summationX(power: number): number {
            let sum: number = 0;
            this.vector.forEach(deraye => {
                sum = sum + Math.pow(deraye[0], power);
            });
            return sum;
        }
        summationY(power: number): number {
            let sum: number = 0;
            this.vector.forEach(deraye => {
                sum = sum + Math.pow(deraye[1], power);
            });
            return sum;
        }

        varianceX(): number {
            return (this.summationX(2) / this.vector.length) - Math.pow(this.meanX(), 2);
        }
    }
}

// export module Math {
//     export function add(a: number): number {
//         return a + 1;
//     }
// }