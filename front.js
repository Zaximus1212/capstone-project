const form = document.querySelector('form')
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
const comment = document.querySelector('#comment')
const note = document.querySelector("#note")
const buttonList = document.querySelector('#buttonList')
const ski = document.querySelector('#ski')
const mon = document.querySelector('#mon')
const app = document.querySelector('#app')
const int = document.querySelector('#int')
const pref = document.querySelector('#pref')
const act = document.querySelector('#act')
const phood = document.querySelector('#phood')
const meal = document.querySelector('#meal')
const beh = document.querySelector('#beh')
const comm = document.querySelector('#comm')

function handleSubmit(e) {
    e.preventDefault()
    
    if (nameInput.value < 1) {
        alert ('You must enter a button name')
        return
    }
    
    let type = document.querySelector('input[name="type-button"]:checked').value
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
        comment: comment.value,
    }

    axios.post('http://localhost:4004/button', body)
        .then(() => {
            console.log('button received')
            // document.querySelector('#type-skills').checked = true
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
            comment.value = ''
            // getButtons()
        })
}
const append = id => {
    axios.get(`http://localhost:4004/buttons/${id}`)
    .then(res => {
        const {skills} = res.data
        const {money} = res.data
        const {appointments} = res.data
        const {integration} = res.data
        const {preffered} = res.data
        const {interaction} = res.data
        const {activities} = res.data
        const {food} = res.data
        const {meal} = res.data
        const {behavior} = res.data
        const {comment} = res.data
        console.log(res.data)
        // skillszPeriod(skills)
        // moneyzPeriod(money)
        // appointmentszPeriod(appointments)
        // integrationzPeriod(integration)
        // prefferedzPeriod(preffered)
        // interactionzPeriod(interaction)
        // activitieszPeriod(activities)
        // foodzPeriod(food)
        // mealPlanzPeriod(meal)
        // behaviorzPeriod(behavior)
        // commentzPeriod(comment)
    })
    .catch(err => console.log(err))
}
const getButtons = () => {
    // buttonlist.innerHTML= ''
    
    axios.get('http://localhost:4004/buttons')
        .then(res => {
            res.data.forEach(elem => {
                let buttonCard = `<div class="button-card" id="${elem.type}">
                    <button onclick="append(${elem['buttonid']})"> append </button>
                    <h3>${elem.name}</h3>
                    <img class="image" src="${elem.image}></image>
                    </div>`
        // buttonList.innerHTML += buttonCard
            if (elem.type === 'ski'){
                ski.innerHTML += buttonCard
            }
            if (elem.type === 'mon'){
                mon.innerHTML += buttonCard
            }
            if (elem.type === 'app'){
                app.innerHTML += buttonCard
            }
            if (elem.type === 'int'){
                int.innerHTML += buttonCard
            }
            if (elem.type === 'pref'){
                pref.innerHTML += buttonCard
            }
            if (elem.type === 'act'){
                act.innerHTML += buttonCard
            }
            if (elem.type === 'food'){
                phood.innerHTML += buttonCard
            }
            if (elem.type === 'meal'){
                meal.innerHTML += buttonCard
            }
            if (elem.type === 'beh'){
                beh.innerHTML += buttonCard
            }
            if (elem.type === 'comm'){
                comm.innerHTML += buttonCard
            }
            
        })
    })
}
const writerPeriod = arr => {
    arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1, arr[1].length)
    const string = arr.join('. ')
    return string
} 
// const writerComma = arr => {
//     const string = arr.join(', ')
//     return string
// } 
// const writerSpace = arr => {
//     const string = arr.join(' ')
//     return string
// } 
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
// const allInOneComma = (str1, str2) => {
//     return writerComma(ArrPusher(retToArr(str1), str2))
// }
// const allInOneSpace = (str1, str2) => {
//     return writerSpace(ArrPusher(retToArr(str1), str2))
// }

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

const skillszPeriod = sectionText =>{
    skillsz = allInOnePeriod(skillsz, sectionText)
    console.log(skillsz)
    return skillsz
}
// const skillszPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     skillsz = currentSec
//     console.log(skillsz)
//     return skillsz
// }
const moneyzPeriod = sectionText =>{
    moneyz = allInOnePeriod(moneyz, sectionText)
    console.log(moneyz)
    return moneyz
}
// const moneyzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     moneyz = currentSec
//     console.log(moneyz)
//     return moneyz
// }
const appointmentszPeriod = sectionText =>{
    appointmentsz = allInOnePeriod(appointmentsz, sectionText)
    console.log(appointmentsz)
    return appointmentsz
}
// const appointmentszPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     appointmentsz = currentSec
//     console.log(appointmentsz)
//     return appointmentsz
// }
const integrationzPeriod = sectionText =>{
    integrationz = allInOnePeriod(integrationz, sectionText)
    console.log(integrationz)
    return integrationz
}
// const integrationzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     integrationz = currentSec
//     console.log(integrationz)
//     return integrationz
// }
const prefferedzPeriod = sectionText =>{
    prefferedz = allInOnePeriod(prefferedz, sectionText)
    console.log(prefferedz)
    return prefferedz
}
// const prefferedzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     prefferedz = currentSec
//     console.log(prefferedz)
//     return prefferedz
// }
const interactionzPeriod = sectionText =>{
    interactionz = allInOnePeriod(interactionz, sectionText)
    console.log(interactionz)
    return interactionz
}
// const interactionzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     interactionz = currentSec
//     console.log(interactionz)
//     return interactionz
// }
const activitieszPeriod = sectionText =>{
    activitiesz = allInOnePeriod(activitiesz, sectionText)
    console.log(activitiesz)
    return activitiesz
}
// const activitieszPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     activitiesz = currentSec
//     console.log(activitiesz)
//     return activitiesz
// }
const foodzPeriod = sectionText =>{
    foodz = allInOnePeriod(foodz, sectionText)
    console.log(foodz)
    return foodz
}
// const foodzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     foodz = currentSec
//     console.log(foodz)
//     return foodz
// }
const mealPlanzPeriod = sectionText =>{
    mealPlanz = allInOnePeriod(mealPlanz, sectionText)
    console.log(mealPlanz)
    return mealPlanz
}
// const mealPlanzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     mealPlanz = currentSec
//     console.log(mealPlanz)
//     return mealPlanz
// }
const behaviorzPeriod = sectionText =>{
    behaviorz = allInOnePeriod(behaviorz, sectionText)
    console.log(behaviorz)
    return behaviorz
}
// const behaviorzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     behaviorz = currentSec
//     console.log(behaviorz)
//     return behaviorz
// }
const commentzPeriod = sectionText =>{
    commentz = allInOnePeriod(commentz, sectionText)
    console.log(commentz)
    return commentz
}
// const commentzPeriod = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     commentz = currentSec
//     console.log(commentz)
//     return commentz
// }

// let added = ''
// const Period = (currentSec, sectionText) =>{
//     currentSec = allInOnePeriod(currentSec, sectionText)
//     added = currentSec
//     console.log(added)
//     return added
// }

// appointmentszPeriod('4')
// integrationzPeriod('5')
// prefferedzPeriod('6')
// prefferedzPeriod('6+3')
// prefferedzPeriod('7')
// interactionzPeriod('7')
// activitieszPeriod('8')
skillszPeriod('fdsD')
// moneyzPeriod('3')
// moneyzPeriod('3')
// moneyzPeriod('3')
// moneyzPeriod('3')
// foodzPeriod('1')
// mealPlanzPeriod('2')
// behaviorzPeriod('3')
// commentzPeriod('4')

note.innerHTML = `<h1>Your note starts here</h1> 
<p>

${skillsz} <br><br>
${moneyz}<br><br>
${appointmentsz}<br><br>
${integrationz}<br><br>
${prefferedz}<br><br>
${interactionz}<br><br>
${activitiesz}<br><br><br><br>
He\’s very interested in community integration already. <br><br>
${foodz}<br><br>
${mealPlanz}<br><br>
${behaviorz}<br><br><br><br>
${commentz}<br><br>

</p>`

getButtons()
form.addEventListener('submit', handleSubmit)