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
const buttonCard = document.querySelector('#button-card')

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
let summonedNote = ''
let summonedNote2 = ''


let currentDate = new Date()
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
let cDate = `${cMonth}/${cDay}/${cYear}`

function handleSubmit(e) {
    e.preventDefault()
    let type = document.querySelector('input[name="type-button"]:checked').value
    if (type === 'choose'){
        alert ('You must enter a button type')
        return
    }
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
        comment: comment.value,
    }

    axios.post('http://localhost:4004/button', body)
        .then(() => {
            console.log('button received')
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

            alert('button received')
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

            note.innerHTML = 
            ` 
            <section class="button1 blue">
            <button class="add-button2 violet image" onclick="clipboard()">Copy note</button>
            <button class="add-button2 violet image" onclick="clipboard2()">Copy note (no date)</button>
        </section>
            <p class="indigo"> 
            ${cDate} <br><br>
            </p>
            <p class="bread"> 
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
            ${activitiesz}<br><br>
            </p>
            <p class="blue">
            He\’s very interested in community integration already. <br><br>
            </p>
            <p class="indigo">
            He ate many granola bars today as usual. ${foodz}<br><br>
            </p>
            <p class="violet">
            ${mealPlanz}<br><br>
            </p>
            <p class="purple">
            ${behaviorz}<br><br>
            </p>
            <p class="bread"> 
            ${commentz}<br><br> 
            </p>
`
            
            summonedNote = `
${cDate} 
            
${skillsz}
            
${moneyz}

${appointmentsz}

${integrationz}

${prefferedz}

${interactionz}

${activitiesz}

He\’s very interested in community integration already.

He ate many granola bars today as usual. ${foodz}

${mealPlanz}

${behaviorz}

${commentz}
            `
            summonedNote2 = `
${skillsz}
            
${moneyz}

${appointmentsz}

${integrationz}

${prefferedz}

${interactionz}

${activitiesz}

He\’s very interested in community integration already.

He ate many granola bars today as usual. ${foodz}

${mealPlanz}

${behaviorz}

${commentz}
            `
            return summonedNote
        })
        console.log(skillsz)
    })
    .catch(err => console.log(err))
    console.log(skillsz)
}
const clipboard = () => {
    navigator.clipboard.writeText(summonedNote)
    alert("Copied the text")
}
const clipboard2 = () => {
    navigator.clipboard.writeText(summonedNote2)
    alert("Copied the text")
}

const getButtons = () => {
    axios.get('http://localhost:4004/buttons')
        .then(res => {
            res.data.forEach(elem => {
                let nAme = elem.name.charAt(0).toUpperCase() + elem.name.slice(1)
                let buttonCard = `
                    <section class="button-card" id="${elem.type}">
                        <img class="image" onclick="append(${elem['buttonid']})" src="${elem.image} alt="pic"/>
                        <p>${nAme}</p>                    
                        </section>
                        `
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
    str = str.trim()
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
    if (appointmentsz === ''){
        appointmentsz = 'was not necessary today'
    }
    if (appointmentsz.includes('was not necessary today H') || appointmentsz.includes('was not necessary today W')){
        let newApp = appointmentsz.split('')
        newApp.splice(0,24)
        appointmentsz = newApp.join('')
    }
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
    if (mealPlanz === ''){
        mealPlanz = 'he refused today'
    }
    if (mealPlanz.includes('he refused today H') || mealPlanz.includes('he refused today W')){
        let newApp = mealPlanz.split('')
        newApp.splice(0,17)
        mealPlanz = newApp.join('')
    }
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
