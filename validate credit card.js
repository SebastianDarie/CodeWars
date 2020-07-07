function validate(n) {
  let digits = n.toString().split('').map(Number)

  if (digits.length % 2 === 0) {
    digits = digits.map((digit, idx) => (idx % 2 === 0 ? digit * 2 : digit))
  } else {
    digits = digits.map((digit, idx) => (idx % 2 === 1 ? digit * 2 : digit))
  }

  digits = digits.map((digit) => (digit > 9 ? digit - 9 : digit))

  const sum = digits.reduce((acc, digit) => acc + digit, 0)

  return sum % 10 === 0
}

validate(2121)
