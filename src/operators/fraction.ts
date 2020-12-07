// TODO: for small number such as 0.001 have bad behaviour it can fix
export function decimal2fraction(x: number, error = 0.000001) {
  // let i = 0;
  const n = Math.floor(x);
  x -= n;
  if (x < error) {
    return [n, 1];
  } else if (1 - error < x) {
    return [n + 1, 1];
  }

  // The lower fraction is 0 / 1
  let lowerN = 0;
  let lowerD = 1;
  // The upper fraction is 1 / 1
  let upperN = 1;
  let upperD = 1;
  while (true) {
    // i++;
    // console.log(i);
    // The middle fraction is(lower_n + upper_n) / (lower_d + upper_d)
    const middleN = lowerN + upperN;
    const middleD = lowerD + upperD;
    // If x + error < middle
    if (middleD * (x + error) < middleN) {
      // middle is our new upper
      upperN = middleN;
      upperD = middleD;
    } else if (middleN < (x - error) * middleD) {
      // Else If middle < x - error
      // middle is our new lower
      lowerN = middleN;
      lowerD = middleD;
    } else {
      // Else middle is our best fraction
      return [n * middleD + middleN, middleD];
    }
  }
}
