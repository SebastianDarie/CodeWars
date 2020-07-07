function array_diff(a, b) {
    for(let i = 0; i < a.length; i++){
        for(let j = 0; j < b.length; j++){
        a = a.filter(item => item !== b[j])
        if(a[i] === b[j]){
            a.splice(i, 1)
            } 
        }
    }
    return console.log(a) 
}

array_diff([1,2,4,3,4], [3,2])