const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const skills = document.querySelector('#skills')
const moneyManagement = document.querySelector('#money-management')
const appointments = document.querySelector('#appointments')
const communityIntegration = document.querySelector('#community-integration')
const preffered = document.querySelector('#preffered')
const interaction = document.querySelector('#interaction')
const activities = document.querySelector('#activities')
const food = document.querySelector('#food')
const mealPlan = document.querySelector('#meal-plan')
const behaviors = document.querySelector('#behaviors')
const comments = document.querySelector('#comments')
const note = document.querySelector("#note")


function handleSubmit(e) {
    e.preventDefault()

    if (nameInput.value < 1) {
        alert ('You must enter a button name')
        return
    }

    let type = document.querySelector('input[name="type-button"]:checked').value
    let body = {
        name: nameInput.value, 
        type: type, 
        buttonId: +buttonId,

    }

    axios.post('http://localhost:4004/cities', body)
        .then(() => {
            countrySelect.value = 1
            nameInput.value = ''
            document.querySelector('#rating-one').checked = true
            getCities()
        })
}



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




let skill = ''
const runner = skillText =>{
    skill = allInOnePeriod(skill, skillText)
    console.log(skill)
    return skill
}
runner("1")
runner("2")
runner("3")
runner("4")

note.innerHTML = `<h1>Your note starts here</h1> 
<p>
<br>
<br>
${skill} <br><br>
${skill} <br><br>
${skill} <br><br>

</p>`









// ${money}<br><br>
// ${appointments}<br><br>
// ${integration}<br><br>
// ${preffered}<br><br>
// ${interaction}<br><br>
// ${activities}<br><br>
// ${food}<br><br>
// ${mealPlan}<br><br>
// ${behaviors}<br><br>
// ${comment}<br><br>

form.addEventListener('submit', handleSubmit)