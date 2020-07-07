// function howmuch(m, n) {
//     let arr = []
//     let money
//     let max = Math.max(m, n)
//     let min = Math.min(m, n)

//     if(m = n) return []
    
//     for(let c = min; c <= max; c++){
//         for(let b = min; b <= max; b++){
//           if(c * 9 - b * 7 === 1 && c * 9 + 1 <= max){
//             money = c * 9 + 1
//             arr.push(money)
//             }
//         }
//     }
//     return console.log(arr)
// }

function howmuch(m, n) {
    if(m === n) { return [] }
    let min = Math.min(m,n), max = Math.max(m, n), arr = [];
    for(i = min; i <= max; i++){
        if((i-1)/9 % 1 === 0 && (i-2)/7 % 1 === 0)
            arr.push(["M: " + i, "B: " + (i-2)/7, "C: " + (i-1)/9])
    }
    return console.log(arr)
}

howmuch(1, 100)