export function isNumber(x: any): boolean {
    if (typeof x === 'number') {
        return true;
    } else {
        throw new TypeError();
    }
}
