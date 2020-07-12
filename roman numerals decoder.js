function solution(roman) {
  let val = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
  let n = 0
  if (roman.length === 2) {
    n += val[roman[1]] - val[roman[0]]
  } else {
    for (let i = 0; i < roman.length; i++) {
      if (val[roman[i]] < val[roman[i + 1]]) {
        n += val[roman[i + 1]] - val[roman[i]]
      } else {
        n += val[roman[i]]
      }
    }
  }
  return n
}
