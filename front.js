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
        })
}
const append = id => {
    axios.get(`http://localhost:4004/writing/${id}`)
    .then(res => {
        res.data.forEach(elem => {
        
            const skillz = elem.skills
            const money = elem.money
            const appointments = elem.appointments
            const integration = elem.integration
            const preffered = elem.preffered
            const interaction = elem.interaction
            const activities = elem.activities
            const food = elem.food
            const meal = elem.mealplan
            const behavior = elem.behavior
            const comment = elem.comment
            
            skillsz = skillszPeriod(skillz)
            moneyz = moneyzPeriod(money)
            appointmentsz = appointmentszPeriod(appointments)
            integrationz = integrationzPeriod(integration)
            prefferedz = prefferedzPeriod(preffered)
            interactionz = interactionzPeriod(interaction)
            activitiesz = activitieszPeriod(activities)
            foodz = foodzPeriod(food)
            mealPlanz = mealPlanzPeriod(meal)
            behaviorz = behaviorzPeriod(behavior)
            commentz = commentzPeriod(comment)
            // return skillsz = skillszPeriod(skillz),moneyz = moneyzPeriod(money),appointmentsz = appointmentszPeriod(appointments),integrationz = integrationzPeriod(integration),prefferedz = prefferedzPeriod(preffered),interactionz = interactionzPeriod(interaction),activitiesz = activitieszPeriod(activities), foodz = foodzPeriod(food),mealPlanz = mealPlanzPeriod(meal),behaviorz = behaviorzPeriod(behavior),commentz = commentzPeriod(comment)
            note.innerHTML = `<h1>Your note starts here</h1> 
            <p>
            ${skillsz} <br><br>
            </p>
            <p class="red">
            ${moneyz}<br><br>
            </p>
            <p class="orange">
            ${appointmentsz}<br><br>
            </p>
            <p class="yellow">
            ${integrationz}<br><br>
            </p>
            <p class="green">
            ${prefferedz}<br><br>
            </p>
            <p class="cyan">
            ${interactionz}<br><br>
            </p>
            <p class="sky">
            ${activitiesz}<br><br><br><br>
            </p>
            <p class="blue">
            He\’s very interested in community integration already. <br><br>
            </p>
            <p class="indigo">
            ${foodz}<br><br>
            </p>
            <p class="violet">
            ${mealPlanz}<br><br>
            </p>
            <p class="purple">
            ${behaviorz}<br><br><br><br>
            </p>
            <p>
            ${commentz}<br><br> 
            </p>`
        })
    })
        .catch(err => console.log(err))
}
const getButtons = () => {
    axios.get('http://localhost:4004/buttons')
        .then(res => {
            res.data.forEach(elem => {
                let buttonCard = `<div class="button-card" id="${elem.type}">
                    <button onclick="append(${elem['buttonid']})"> append </button>
                    <h4>${elem.name}</h4>
                    <img class="image" src="${elem.image}></image>
                    </div>`
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
    if(arr[0] !== '' && arr[0] !== '. ' ){
        arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1, arr[1].length)
        const string = arr.join(' ')
        return string
    } else {
        arr[1] = arr[1].charAt(0).toUpperCase() + arr[1].slice(1, arr[1].length)
        const string = arr.join('')
        return string

    }
} 
const retToArr = str => {
    const array = []
    array.push(str)
    return array
}
const arrPusher = (orig, added) => {
    if(added !== ''){
        orig.push(added + '.')
        return orig
    } else {
        orig.push(added)
        return orig
    }
}
const allInOnePeriod = (str1, str2) => {
    return writerPeriod(arrPusher(retToArr(str1), str2))
}
const skillszPeriod = sectionText =>{
    skillsz = allInOnePeriod(skillsz, sectionText)
    console.log(skillsz)
    return skillsz
}
const moneyzPeriod = sectionText =>{
    moneyz = allInOnePeriod(moneyz, sectionText)
    console.log(moneyz)
    return moneyz
}
const appointmentszPeriod = sectionText =>{
    appointmentsz = allInOnePeriod(appointmentsz, sectionText)
    console.log(appointmentsz)
    return appointmentsz
}
const integrationzPeriod = sectionText =>{
    integrationz = allInOnePeriod(integrationz, sectionText)
    console.log(integrationz)
    return integrationz
}
const prefferedzPeriod = sectionText =>{
    prefferedz = allInOnePeriod(prefferedz, sectionText)
    console.log(prefferedz)
    return prefferedz
}
const interactionzPeriod = sectionText =>{
    interactionz = allInOnePeriod(interactionz, sectionText)
    console.log(interactionz)
    return interactionz
}
const activitieszPeriod = sectionText =>{
    activitiesz = allInOnePeriod(activitiesz, sectionText)
    console.log(activitiesz)
    return activitiesz
}
const foodzPeriod = sectionText =>{
    foodz = allInOnePeriod(foodz, sectionText)
    console.log(foodz)
    return foodz
}
const mealPlanzPeriod = sectionText =>{
    mealPlanz = allInOnePeriod(mealPlanz, sectionText)
    console.log(mealPlanz)
    return mealPlanz
}
const behaviorzPeriod = sectionText =>{
    behaviorz = allInOnePeriod(behaviorz, sectionText)
    console.log(behaviorz)
    return behaviorz
}
const commentzPeriod = sectionText =>{
    commentz = allInOnePeriod(commentz, sectionText)
    console.log(commentz)
    return commentz
}

getButtons()
form.addEventListener('submit', handleSubmit)

// const writerComma = arr => {
//     const string = arr.join(', ')
//     return string
// } 
// const writerSpace = arr => {
//     const string = arr.join(' ')
//     return string
// } 

// const allInOneComma = (str1, str2) => {
//     return writerComma(arrPusher(retToArr(str1), str2))
// }
// const allInOneSpace = (str1, str2) => {
//     return writerSpace(arrPusher(retToArr(str1), str2))
// }
