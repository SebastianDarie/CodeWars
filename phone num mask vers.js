function createPhoneNumber(arr) {
    let mask = '(xxx) xxx-xxxx'

    arr.forEach(item => {
        mask = mask.replace('x', item)
    })

    return console.log(mask)
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0])