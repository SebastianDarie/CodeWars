function order(words){
    console.log(words = words.split(' '))
    let x = 1
    let arr = []
    if(words === '') return ''

    for(let i = 0; i < words.length; i++){
        if(words[i].indexOf(x) > 0 ){
            arr.push(words[i])
            x++
            i=-1
        }
    }
    return console.log(arr.join(' '))
}

order('Thi1s i2 cut3 ni4sa li5k')

// function order(words){
//     console.log(words = words.split(' '))
//     let arr = []
//     if(words === '') return ''

//     for(let i = 0; i <= words.length; i++){
//      for(let j = 0; j < words.length; j++){
//         if(words[j].indexOf(i) >= 0){
//             arr.push(words[j])
//             }
//         }
//     }
//     return console.log(arr.join(' '))
// }