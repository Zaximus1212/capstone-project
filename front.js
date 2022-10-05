const writerPeriod = arr => {
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1, arr[1].length)
    const string = arr.join('. ')
    return console.log(string)
} 
const writerComma = arr => {
    const string = arr.join(', ')
    return string
} 
const writerSpace = arr => {
    const string = arr.join(' ')
    return string
} 
const retToArr = str => {
    const Array = []
    Array.push(str)
}

// const arr1 = ["hey", "hey how"]

// writerPeriod(arr1)