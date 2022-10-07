const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const pictureInput = document.querySelector('#picture-input')
const type = document.querySelector('input[name="type-button"]:checked').value
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

    let body = {
        buttonId: +buttonId,
        name: nameInput.value,
        pictureInput: pictureInput.value,
        type: type, 
        skills: skills.value,
        moneyManagement: moneyManagement.value,
        appointments: appointments.value,
        communityIntegration: communityIntegration.value,
        preffered: preffered.value,
        interaction: interaction.value,
        activities: activities.value,
        food: food.value,
        mealPlan: mealPlan.value,
        behaviors: behaviors.value,
        comments: comments.value,

    }

    axios.post('http://localhost:4004/buttons', body)
        .then(() => {
            document.querySelector('#activities').checked = true
            nameInput.value = ''
            pictureInput.value = ''
            skills.value = ''
            moneyManagement.value = ''
            appointments.value = ''
            communityIntegration.value = ''
            preffered.value = ''
            interaction.value = ''
            activities.value = ''
            food.value = ''
            mealPlan.value = ''
            behaviors.value = ''
            comments.value = ''
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




let section = ''
const appendPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    console.log(currentSec)
    return currentSec
}
appendPeriod(section,"1")
// appendPeriod("2")
// appendPeriod("3")
// appendPeriod("4")

note.innerHTML = `<h1>Your note starts here</h1> 
<p>
<br>
<br>
${section} <br><br>
${section} <br><br>
${section} <br><br>

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