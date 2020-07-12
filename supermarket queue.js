function queueTime(customers, n) {
  let arr = new Array(n).fill(0)
  for (let i of customers) {
    let idx = arr.indexOf(Math.min(...arr))
    arr[idx] += i
  }
  return Math.max(...arr)
}
