String.prototype.camelCase = function () {
  return this.split(' ')
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('')
}
