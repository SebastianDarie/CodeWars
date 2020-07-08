function firstNonRepeatingLetter(s) {
  const index = s
    .toLowerCase()
    .split('')
    .findIndex((char, _, s) => s.indexOf(char) === s.lastIndexOf(char))

  return index === -1 ? '' : s[index]
}
