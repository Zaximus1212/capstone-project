const form = document.querySelector('form')
const nameInput = document.querySelector('#name-input')
const imageInput = document.querySelector('#picture-input')
const skillsInput = document.querySelector('#skills')
const moneyInput = document.querySelector('#money-management')
const appointmentsInput = document.querySelector('#appointments')
const integrationInput = document.querySelector('#community-integration')
const preferredInput = document.querySelector('#preferred')
const interactionInput = document.querySelector('#interaction')
const activitiesInput = document.querySelector('#activities')
const foodInput = document.querySelector('#food')
const mealPlanInput = document.querySelector('#meal-plan')
const behaviorInput = document.querySelector('#behaviors')
const commentInput = document.querySelector('#comment')
const staringInput = document.querySelector('#staring-input')
const argumentInput = document.querySelector('#argument-input')
const aggressionInput = document.querySelector('#aggression-input')
const controllingInput = document.querySelector('#controlling-input')
const copingInput = document.querySelector('#coping-input')
const redirectionInput = document.querySelector('#redirection-input')
const note = document.querySelector("#note")
const buttonList = document.querySelector('#buttonList')
const ski = document.querySelector('#ski')
const mon = document.querySelector('#mon')
const app = document.querySelector('#app')
const int = document.querySelector('#int')
const pref = document.querySelector('#pref')
const act = document.querySelector('#act')
const phood = document.querySelector('#phood')
const meal = document.querySelector('#mealButtons')
const beh = document.querySelector('#beh')
const comm = document.querySelector('#comm')
const staring = document.querySelector('#staring')
const argument = document.querySelector('#argument')
const aggression = document.querySelector('#aggression')
const controlling = document.querySelector('#controlling')
const coping = document.querySelector('#coping')
const redirection = document.querySelector('#redirection')
const buttonCard = document.querySelector('#button-card')
const updateButtonButton = document.querySelector('#update')
const updateDB = document.querySelector('#update-DB')
const titleSection = document.querySelector('#title-section')

let redirectionNoteSoFar = ''
let copingNoteSoFar = ''
let controllingNoteSoFar = ''
let aggressionNoteSoFar = ''
let argumentNoteSoFar = ''
let staringNoteSoFar = ''
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
let summonedNote3 = ''
let updateBoolean = false

let currentDate = new Date()
let cDay = currentDate.getDate()
let cMonth = currentDate.getMonth() + 1
let cYear = currentDate.getFullYear()
let cDate = `${cMonth}/${cDay}/${cYear}`

function createButton(e) {
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
        image: imageInput.value,
        skills: skillsInput.value,
        money: moneyInput.value,
        appointment: appointmentsInput.value,
        integration: integrationInput.value,
        preferred: preferredInput.value,
        interaction: interactionInput.value,
        activity: activitiesInput.value,
        food: foodInput.value,
        mealPlan: mealPlanInput.value,
        behavior: behaviorInput.value,
        comment: commentInput.value,
        staring: staringInput.value,
        argument: argumentInput.value,
        aggression: aggressionInput.value,
        controlling: controllingInput.value,
        coping: copingInput.value,
        redirection: redirectionInput.value

    }

    axios.post('http://localhost:4004/button', body)
        .then(() => {
            console.log('button received')
            nameInput.value = ''
            imageInput.value = ''
            skillsInput.value = ''
            moneyInput.value = ''
            appointmentsInput.value = ''
            integrationInput.value = ''
            preferredInput.value = ''
            interactionInput.value = ''
            activitiesInput.value = ''
            foodInput.value = ''
            mealPlanInput.value = ''
            behaviorInput.value = ''
            commentInput.value = ''
            staringInput.value = ''
            argumentInput.value = ''
            aggressionInput.value = ''
            controllingInput.value = ''
            copingInput.value = ''
            redirectionInput.value = ''

            alert('button received')
        })
}
const append = id => {
    axios.get(`http://localhost:4004/writing/${id}`)
    .then(res => {
        const elem = res.data
            
            const skillz = elem.skill
            const money = elem.money
            const appointments = elem.appointment
            const integration = elem.integration
            const preffered = elem.preferred
            const interaction = elem.interaction
            const activities = elem.activity
            const food = elem.food
            const meal = elem.mealPlan
            const behavior = elem.behavior
            const comment = elem.comment
            const staringAppend = elem.staring
            const argumentAppend = elem.argument
            const aggressionAppend = elem.aggression
            const controllingAppend = elem.controlling
            const copingAppend = elem.coping
            const redirectionAppend = elem.redirection
            // console.log(updateBoolean)
            if(!updateBoolean){
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
            staringNoteSoFar = staringNoteSoFarPeriod(staringAppend)
            argumentNoteSoFar = argumentNoteSoFarPeriod(argumentAppend)
            aggressionNoteSoFar = aggressionNoteSoFarPeriod(aggressionAppend)
            controllingNoteSoFar = controllingNoteSoFarPeriod(controllingAppend)
            copingNoteSoFar = copingNoteSoFarPeriod(copingAppend)
            redirectionNoteSoFar = redirectionNoteSoFarPeriod(redirectionAppend)

            note.innerHTML = 
            ` 
            <section class="button1 blue">
            <button class="add-button2 violet image" onclick="clipboard()">Copy note</button>
            <button class="add-button2 violet image" onclick="clipboard2()">Copy note (no date)</button>
            <button class="add-button2 violet image" onclick="clipboard3()">Copy BISSP</button>
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
            <p class="red">
            ${staringNoteSoFar}<br><br>
            </p>
            <p class="orange">
            ${argumentNoteSoFar}<br><br>
            </p>
            <p class="yellow">
            ${aggressionNoteSoFar}<br><br>
            </p>
            <p class="green">
            ${controllingNoteSoFar}<br><br>
            </p>
            <p class="cyan">
            ${copingNoteSoFar}<br><br>
            </p>
            <p class="sky">
            ${redirectionNoteSoFar}<br><br>
            </p>
            `
            
            summonedNote = `${cDate} 
            
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
            summonedNote2 = `${skillsz}
            
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
            summonedNote3 = `${staringNoteSoFar}
            
${argumentNoteSoFar}

${aggressionNoteSoFar}

${controllingNoteSoFar}

${copingNoteSoFar}

${redirectionNoteSoFar}`
            return summonedNote
        
        
    } else { // occurs if updateBoolean is true
            nameInput.value = id //TEMP using name spot to save the id for the update query to the DB
            imageInput.value = elem.image
            skillsInput.value = skillz
            moneyInput.value = elem.money
            appointmentsInput.value = elem.appointment
            integrationInput.value = elem.integration
            preferredInput.value = elem.preferred
            interactionInput.value = elem.interaction
            activitiesInput.value = elem.activity
            foodInput.value = elem.food
            mealPlanInput.value = meal
            behaviorInput.value = elem.behavior
            commentInput.value = elem.comment
            staringInput.value = staringAppend
            argumentInput.value = argumentAppend
            aggressionInput.value = aggressionAppend
            controllingInput.value = controllingAppend
            copingInput.value = copingAppend
            redirectionInput.value = redirectionAppend
    }

})
    .catch(err => console.log(err))

}
const buttonUpdate = event =>{
    if(!updateBoolean)
        return alert('switch to update mode to update a button')

    const body = {
        buttonId: nameInput.value,
        image: imageInput.value,
        skill: skillsInput.value,
        money: moneyInput.value,
        appointment: appointmentsInput.value,
        integration: integrationInput.value,
        preferred: preferredInput.value,
        interaction: interactionInput.value,
        activity: activitiesInput.value,
        food: foodInput.value,
        mealPlan: mealPlanInput.value,
        behavior: behaviorInput.value,
        comment: commentInput.value,
        staring: staringInput.value,
        argument: argumentInput.value,
        aggression: aggressionInput.value,
        controlling: controllingInput.value,
        coping: copingInput.value,
        redirection: redirectionInput.value
    }
    const buttonId = nameInput.value

    axios.put(`http://localhost:4004/update/${buttonId}`, body)
    .then(() => {
        nameInput.value = ''
        imageInput.value = ''
        skillsInput.value = ''
        moneyInput.value = ''
        appointmentsInput.value = ''
        integrationInput.value = ''
        preferredInput.value = ''
        interactionInput.value = ''
        activitiesInput.value = ''
        foodInput.value = ''
        mealPlanInput.value = ''
        behaviorInput.value = ''
        commentInput.value = ''
        staringInput.value = ''
        argumentInput.value = ''
        aggressionInput.value = ''
        controllingInput.value = ''
        copingInput.value = ''
        redirectionInput.value = ''

        alert('button updated')
    })
}

const clipboard = () => {
    navigator.clipboard.writeText(summonedNote)
    alert("Copied the text")
}
const clipboard2 = () => {
    navigator.clipboard.writeText(summonedNote2)
    alert("Copied the text")
}
const clipboard3 = () => {
    navigator.clipboard.writeText(summonedNote3)
    alert("Copied the text")
}

const getButtons = () => {
    axios.get('http://localhost:4004/buttons')
        .then(res => {
            res.data.forEach(elem => {
                let nAme = elem.name.charAt(0).toUpperCase() + elem.name.slice(1)
                let buttonCard = `
                    <section class="button-card" id="${elem.type}">
                        <img class="image" onclick="append(${elem['buttonId']})" src="${elem.image}"/>
                        <p>${nAme}</p>                    
                        </section>
                        `
            if (elem.type === 'skill'){
                ski.innerHTML += buttonCard
            }
            else if (elem.type === 'money'){
                mon.innerHTML += buttonCard
            }
            else if (elem.type === 'appointment'){
                app.innerHTML += buttonCard
            }
            else if (elem.type === 'integration'){
                int.innerHTML += buttonCard
            }
            else if (elem.type === 'preferred'){
                pref.innerHTML += buttonCard
            }
            else if (elem.type === 'activity'){
                act.innerHTML += buttonCard
            }
            else if (elem.type === 'food'){
                phood.innerHTML += buttonCard
            }
            else if (elem.type === 'meal'){
                meal.innerHTML += buttonCard
            }
            else if (elem.type === 'behavior'){
                beh.innerHTML += buttonCard
            }
            else if (elem.type === 'comment'){
                comm.innerHTML += buttonCard
            }
            else if (elem.type === 'staring'){
                staring.innerHTML += buttonCard
            }
            else if (elem.type === 'argument'){
                argument.innerHTML += buttonCard
            }
            else if (elem.type === 'aggression'){
                aggression.innerHTML += buttonCard
            }
            else if (elem.type === 'controlling'){
                controlling.innerHTML += buttonCard
            }
            else if (elem.type === 'coping'){
                coping.innerHTML += buttonCard
            }
            else if (elem.type === 'redirection'){
                redirection.innerHTML += buttonCard
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
const staringNoteSoFarPeriod = sectionText =>{
    staringNoteSoFar = allInOnePeriod(staringNoteSoFar, sectionText)
    console.log(staringNoteSoFar)
    return staringNoteSoFar
}
const argumentNoteSoFarPeriod = sectionText =>{
    argumentNoteSoFar = allInOnePeriod(argumentNoteSoFar, sectionText)
    console.log(argumentNoteSoFar)
    return argumentNoteSoFar
}
const aggressionNoteSoFarPeriod = sectionText =>{
    aggressionNoteSoFar = allInOnePeriod(aggressionNoteSoFar, sectionText)
    console.log(aggressionNoteSoFar)
    return aggressionNoteSoFar
}
const controllingNoteSoFarPeriod = sectionText =>{
    controllingNoteSoFar = allInOnePeriod(controllingNoteSoFar, sectionText)
    console.log(controllingNoteSoFar)
    return controllingNoteSoFar
}
const copingNoteSoFarPeriod = sectionText =>{
    copingNoteSoFar = allInOnePeriod(copingNoteSoFar, sectionText)
    console.log(copingNoteSoFar)
    return copingNoteSoFar
}
const redirectionNoteSoFarPeriod = sectionText =>{
    redirectionNoteSoFar = allInOnePeriod(redirectionNoteSoFar, sectionText)
    console.log(redirectionNoteSoFar)
    return redirectionNoteSoFar
}

const activateUpdate = () =>{
    // const updateNotice = '<section class = "update" id = "update-mode"> UPDATE MODE </section>'
    if(!updateBoolean)
        updateBoolean = true
    else{
        updateBoolean = false
        nameInput.value = '';
        imageInput.value = '';
        skillsInput.value = ''
        moneyInput.value = ''
        appointmentsInput.value = ''
        integrationInput.value = ''
        preferredInput.value = ''
        interactionInput.value = ''
        activitiesInput.value = ''
        foodInput.value = ''
        mealPlanInput.value = ''
        behaviorInput.value = ''
        commentInput.value = ''
        staringInput.value = ''
        argumentInput.value = ''
        aggressionInput.value = ''
        controllingInput.value = ''
        copingInput.value = ''
        redirectionInput.value = ''
        // titleSection += updateNotice
    }
    console.log(updateBoolean)
}

updateButtonButton.addEventListener('click', activateUpdate)
updateDB.addEventListener('click', buttonUpdate)

getButtons()

form.addEventListener('submit', createButton)
