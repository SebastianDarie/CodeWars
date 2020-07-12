function Xbonacci(signature, n, curr = 0){
    const next = signature.slice(curr, signature.length)
    const sum = next.reduce((a, b) => a + b, 0)
    
    if(signature.length !== n) return Xbonacci([...signature, sum], n, curr + 1)
    return console.log(signature.slice(0, n))
}

Xbonacci([1,2,3], 5, 0)