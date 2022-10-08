const form = document.querySelector('form')
const type = document.querySelector('input[name="type-button"]:checked').value
const nameInput = document.querySelector('#name-input')
const image = document.querySelector('#picture-input')
const skills = document.querySelector('#skills')
const money = document.querySelector('#money-management')
const appointments = document.querySelector('#appointments')
const integration = document.querySelector('#community-integration')
const preffered = document.querySelector('#preffered')
const interaction = document.querySelector('#interaction')
const activities = document.querySelector('#activities')
const food = document.querySelector('#food')
const mealPlan = document.querySelector('#meal-plan')
const behavior = document.querySelector('#behaviors')
const comments = document.querySelector('#comments')
const note = document.querySelector("#note")


function handleSubmit(e) {
    e.preventDefault()

    if (nameInput.value < 1) {
        alert ('You must enter a button name')
        return
    }

    let body = {
        type: type, 
        name: nameInput.value,
        image: image.value,
        skills: skills.value,
        money: money.value,
        appointments: appointments.value,
        integration: integration.value,
        preffered: preffered.value,
        interaction: interaction.value,
        activities: activities.value,
        food: food.value,
        mealPlan: mealPlan.value,
        behavior: behavior.value,
        comments: comments.value,
        // buttonId: +buttonId,
    }

    axios.post('http://localhost:4004/button', body)
        .then(() => {
            console.log('button received')
            document.querySelector('#type-activities').checked = true
            nameInput.value = ''
            image.value = ''
            skills.value = ''
            money.value = ''
            appointments.value = ''
            integration.value = ''
            preffered.value = ''
            interaction.value = ''
            activities.value = ''
            food.value = ''
            mealPlan.value = ''
            behavior.value = ''
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
// const returner = ret => {

// }
// skills
// money
// appointments
// integration
// preffered
// interaction
// activities
// food
// mealPlan
// behavior
// comment

// const catString = 'skills,money,appointments,integration,preffered,interaction,activities,food,mealPlan,behavior,comment'
// let catArra = catString.split(",")
// for(let i = 0; i < catArra.length; i++) {
//     catArra[i] = ''
// }
// console.log(catArra[0])
// let section = '1234'

let commentz = ''
let behaviorz = ''
let mealPlanz = ''
let foodz = ''
let activitiesz = ''
let interactionz = ''
let prefferedz = ''
let integrationz = ''
let appointmentsz = ''
let moneyz = ''
let skillsz = ''

const skillszPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    skillsz = currentSec
    console.log(skillsz)
    return skillsz
}
const moneyzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    moneyz = currentSec
    console.log(moneyz)
    return moneyz
}
const appointmentszPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    appointmentsz = currentSec
    console.log(appointmentsz)
    return appointmentsz
}
const integrationzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    integrationz = currentSec
    console.log(integrationz)
    return integrationz
}
const prefferedzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    prefferedz = currentSec
    console.log(prefferedz)
    return prefferedz
}
const interactionzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    interactionz = currentSec
    console.log(interactionz)
    return interactionz
}
const activitieszPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    activitiesz = currentSec
    console.log(activitiesz)
    return activitiesz
}
const foodzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    foodz = currentSec
    console.log(foodz)
    return foodz
}
const mealPlanzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    mealPlanz = currentSec
    console.log(mealPlanz)
    return mealPlanz
}
const behaviorzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    behaviorz = currentSec
    console.log(behaviorz)
    return behaviorz
}
const commentzPeriod = (currentSec, sectionText) =>{
    currentSec = allInOnePeriod(currentSec, sectionText)
    commentz = currentSec
    console.log(commentz)
    return commentz
}


// let added = ''
// const Period = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     added = currentSec
//     console.log(added)
//     return added
// }




// Period(section,'1')
// Period(section,'fdsD')
// Period(section,'fdsD')
skillszPeriod(skillsz,'fdsD')
moneyzPeriod(moneyz,'3')
moneyzPeriod(moneyz,'3')
moneyzPeriod(moneyz,'3')
moneyzPeriod(moneyz,'3')

appointmentszPeriod(appointmentsz,'4')
integrationzPeriod(integrationz,'5')
prefferedzPeriod(prefferedz,'6')
prefferedzPeriod(prefferedz,'6+3')
prefferedzPeriod(prefferedz,'7')
interactionzPeriod(interactionz,'7')
activitieszPeriod(activitiesz,'8')
foodzPeriod(foodz,'1')
mealPlanzPeriod(mealPlanz,'2')
behaviorzPeriod(behaviorz,'3')
commentzPeriod(commentz,'4')
// Period(z,'5')
// Period(z,'6')
// Period(z,'7')
// Period(z,'8')

// Period(added,"2")
// Period(section,"1")
// Period("3")
// Period("4")

note.innerHTML = `<h1>Your note starts here</h1> 
<p>
<br><br>
${commentz} <br><br>
${behaviorz} <br><br>
${mealPlanz} <br><br>
${foodz} <br><br>
${activitiesz} <br><br>
${interactionz} <br><br>
${prefferedz} <br><br>
${integrationz} <br><br>
${appointmentsz} <br><br>
${moneyz} <br><br>
${skillsz} <br><br>
 <br><br>


</p>`









// ${money}<br><br>
// ${appointments}<br><br>
// ${integration}<br><br>
// ${preffered}<br><br>
// ${interaction}<br><br>
// ${activities}<br><br>
// ${food}<br><br>
// ${mealPlan}<br><br>
// ${behavior}<br><br>
// ${comment}<br><br>

form.addEventListener('submit', handleSubmit)