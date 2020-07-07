const swap = function(str, idx1, idx2) {
    let arr = str.split(""), 
    temp = arr[idx1]
    arr[idx1] = arr[idx2]
    arr[idx2] = temp
    return arr.join("")
}

const getPivot = function(str, compare) {
    for(let i = str.length; str > 0; i--) {
        if(str[i] > compare)
            return i
    }
    return str.length - 1
}

const nextBigger = function(str) {
    str = str.toString()
    for(let i = str.length-1; i >= 0; i--) {
        if(str[i] > str[i-1]) {
            str = swap(str, i-1, getPivot(str, str[i-1]));
            return parseInt(str.substring(0, i) + str.substring(i).split("").map( a => parseInt(a)).sort( (a, b) => a - b).join(""))
        }
    }
    return -1
}