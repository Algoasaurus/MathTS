export function Integral(func: (x: number) => number, a: number, b: number) {
    const delta = (b - a) / 1000;
    let ebteda = a + delta;
    let sum = 0;
    while (ebteda - b < 0) {
        sum = sum + func(ebteda) * delta;
        ebteda = ebteda + delta;
    }
    return sum;
}
