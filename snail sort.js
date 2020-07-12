function snail(array){
    const sorted = []
    while(array.length > 0){
        sorted.push(...array.shift())
        for(let i = 0; i < array.length; i++){
            sorted.push(array.pop())
        }
        sorted.push(...(array.pop() || []).reverse())
        for(let i = array.length - 1; i >= 0; i--){
            sorted.push(array.shift())
        }
    }
    return sorted
}

function snail(array) {
    let vector = []
    while (array.length) {
        vector.push(...array.shift())
        array.map(row => vector.push(row.pop()))
        array.reverse().map(row => row.reverse())
    }
    return vector
}