const writerPeriod = arr => {
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1, arr[1].length)
    const string = arr.join('. ')
    return string
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
    return Array
}
const ArrPusher = (orig, added) => {
    orig.push(added)
    return orig
}
const allInOnePeriod = (str1, str2, type) => {
    return writerPeriod(ArrPusher(retToArr(str1), str2))
}
const allInOneComma = (str1, str2, type) => {
    return writerComma(ArrPusher(retToArr(str1), str2))
}
const allInOneSpace = (str1, str2, type) => {
    return writerSpace(ArrPusher(retToArr(str1), str2))
}

