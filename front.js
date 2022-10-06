const note = document.querySelector("#note")


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
const allInOnePeriod = (str1, str2) => {
    return writerPeriod(ArrPusher(retToArr(str1), str2))
}
const allInOneComma = (str1, str2) => {
    return writerComma(ArrPusher(retToArr(str1), str2))
}
const allInOneSpace = (str1, str2) => {
    return writerSpace(ArrPusher(retToArr(str1), str2))
}
// console.log(allInOnePeriod((allInOnePeriod((allInOnePeriod('hey', 'watch')), 'this')), 'im making a sentence'))




let skills = ''
const runner = skillText =>{
    skills = allInOnePeriod(skills, skillText)
    console.log(skills)
    return skills
}
runner("1")
runner("2")
runner("3")
runner("4")

note.innerHTML = `<h1>Your note starts here</h1> 
<p>
<br>
<br>
${skills} <br><br>
${skills} <br><br>
${skills} <br><br>

</p>`
// ${money}<br><br>
// ${appointments}<br><br>
// ${integration}<br><br>
// ${oreffered}<br><br>
// ${interaction}<br><br>
// ${activities}<br><br>
// ${food}<br><br>
// ${mealPlan}<br><br>
// ${behaviors}<br><br>
// ${comment}<br><br>