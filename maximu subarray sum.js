var maxSequence = function (arr) {
  if (arr.filter((a) => a > -1).length < 0 || arr.length <= 0) return 0
  let max = 0,
    len = arr.length,
    temp

  for (let i = 0, x = 1; i <= len; i++) {
    temp = arr.slice(i, i + x).reduce((a, b) => a + b, 0)
    if (temp > max) {
      max = temp
    }
    if (i === len) {
      len -= 1
      i = -1
      x++
    }
  }
  return max
}
