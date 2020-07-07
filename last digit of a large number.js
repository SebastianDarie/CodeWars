const lastDigit = function(str1, str2) {
    str1 = str1.split('')
    str2 = str2.split('').slice(-2).join('')
    const base = parseInt(str1[str1.length - 1])
    const power = ((str2 - 2) % 4) + 10

    if (str2.length === 1 && power === 8) {
        return 1
    } else if (str1.length === 1 && (power - 7 === 1)) {
        return 0
    } else if (str2 === "00") {
        return 0
    } else {
        let calc = Math.pow(base, power).toString().split('')
        return parseInt(calc[calc.length -1])
    }
}

