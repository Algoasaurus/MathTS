/**
 * this method checks if number is validate Row or Column number of matrix
 * @param num the number that want to validate
 * @param RoC row or column number of matrix
 */
export function isRoCnum(num: number, RoC: number): boolean {
    return (Number.isInteger(num)) && (num > 0) && (num <= RoC);
}
