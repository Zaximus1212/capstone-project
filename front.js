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
const allInOne = (str1, str2, type) => {
    if (type === 'period'){
        return writerPeriod(ArrPusher(retToArr(str1), str2))
    }
    if (type === 'comma'){
        return writerComma(ArrPusher(retToArr(str1), str2))
    }
    if (type === 'space'){
        return writerSpace(ArrPusher(retToArr(str1), str2))
    }


}
const arr3 = "add this in"
const arr2 = "sup"
const arr1 = ["hey", "hey how"]
// const arr3 = arr1.push(arr2)
// console.log(retToArr(writerPeriod(arr1)))
// console.log(ArrPusher(retToArr(writerPeriod(arr1)), arr2))
// console.log(arr3)
const boom = 'period'
console.log(allInOne(arr2, arr3, boom))
console.log(writerPeriod(ArrPusher(retToArr(arr3), arr2)))
console.log(allInOne((allInOne(arr2, arr3, boom)), boom, 'period'))
