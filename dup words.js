function removeDuplicateWords(s) {
    let arr = s.split(' ')
    arr = arr.filter(function(el,idx){
        return arr.indexOf(el) == idx
    })
    return console.log(arr.join(' '))
}

removeDuplicateWords('nigga bigga is bigga a greek greek nigga')