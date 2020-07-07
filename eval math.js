let r = function (str) {
    return express(str)
}

let p = function (str) {
    return str[0] || ''
}

let g = function (str) {
    return str.shift()
}

let factor = function (str) {
    function makeNumber(str) {
    let result = ''
    while(/[0-9\.]/.test(p(str))) {
        result += g(str)
    }
    return Number(result)
}
    if(p(str) === "-") {
        g(str)
      return -1 * factor(str)
    } else if(!isNaN(p(str))) {
        return makeNumber(str)
    } else if(p(str) === "(") {
        g(str)
        const num = express(str)
        g(str)
        return num
    }
}

let term = function (str) {
    let res = factor(str);
    while (p(str) == '*' || p(str) == '/') {
        if (g(str) == '*') {
        res *= factor(str)
        } else {
        res /= factor(str)
        }
    }
    return res
}

let express = function (str) {
    let res = term(str);
    while (p(str) == '+' || p(str) == '-') {
      if (g(str) == '+') {
        res += term(str)
    } else {
        res -= term(str)
        }
    }
    return res
}

let calc = function (express) {
    let expressToParse = express.replace(/\s+/g, '').split('')
    return r(expressToParse)
}