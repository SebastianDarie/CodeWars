// function persistence(num) {
//     if(num > 0){
//         let str = num.toString()
//         console.log(str)
//         let numbers = str.split('')
//         console.log(numbers)
//         const digs = numbers.map(Number)
//         console.log(digs)
//         let total = digs.reduce((accumulator, dig) => {
//             return dig * accumulator
//         }, 1)
//         console.log(total)
//     }
// }

// persistence(251)


function persistence(num) {
    let x = 0
    num = num.toString()
    while (num.length > 1) {
    x++
      num = num.split('').map(Number).reduce((a, b) => a * b).toString()
    }
    
    return console.log(x)
}

persistence(373)

// const persistence = num => {
//     return `${num}`.length > 1 
//       ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b)) 
//       : 0;
// }
