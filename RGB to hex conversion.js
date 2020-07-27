function toHex(h) {
  if (h < 0) return '00'
  if (h > 255) return 'FF'
  return ('0' + Number(h).toString(16)).slice(-2).toUpperCase()
}

function rgb(r, g, b) {
  return toHex(r) + toHex(g) + toHex(b)
}
