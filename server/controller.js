const CONNECTION_STRING = 'postgres://tdqbphgqwrduea:4626a8b4e7ac7d7e8eaca80cb22dae09127a022b0a2cb8d1140636c5ff457fb5@ec2-34-235-198-25.compute-1.amazonaws.com:5432/df42evhf39aavv'
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: 'postgres',
    dialectOptions:{
        ssl: {
            rejectUnauthorized: false
        }
    }
})

const addEscape = str =>{
    const newArr = str.trim().split('')
    const index = newArr.findIndex(char => char === "'")
    if (index !== -1){
        newArr.splice(index, 0, "'")
    }
    return newArr.join('')
}

module.exports = {
    seed: (req, res)=> {
        sequelize.query(`
            drop table if exists buttons;

            CREATE TABLE buttons (
                buttonId SERIAL PRIMARY KEY,
                type VARCHAR,
                name VARCHAR,
                image VARCHAR,
                skills VARCHAR,
                money VARCHAR,
                appointments VARCHAR,
                integration VARCHAR,
                preffered VARCHAR,
                interaction VARCHAR,
                activities VARCHAR,
                food VARCHAR,
                mealPlan VARCHAR,
                behavior VARCHAR,
                comment VARCHAR
            )
        `).then(() => {
            console.log('DB seeded!')
            res.sendStatus(200)
        }).catch(err => console.log('error seeding DB', err))
    },
    createButton: (req, res) => {
        const {type} = req.body
        let {name} = req.body
        const {image} = req.body
        let {skills} = req.body
        let {money} = req.body
        let {appointments} = req.body
        let {integration} = req.body
        let {preffered} = req.body
        let {interaction} = req.body
        let {activities} = req.body
        let {food} = req.body
        let {mealPlan} = req.body
        let {behavior} = req.body
        let {comment} = req.body
        name = addEscape(name)
        skills = addEscape(skills)
        money = addEscape(money)
        appointments = addEscape(appointments)
        integration = addEscape(integration)
        preffered = addEscape(preffered)
        interaction = addEscape(interaction)
        activities = addEscape(activities)
        food = addEscape(food)
        mealPlan = addEscape(mealPlan)
        behavior = addEscape(behavior)
        comment = addEscape(comment)
        sequelize.query(`
            INSERT INTO buttons (name, image, type, skills, money, appointments, integration, preffered, interaction, activities, food, mealPlan, behavior, comment)
            VALUES ('${name}','${image}','${type}','${skills}','${money}','${appointments}','${integration}','${preffered}','${interaction}','${activities}','${food}','${mealPlan}','${behavior}','${comment}') `).then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('error with sending to DB', err))
    },
    getButtons: (req, res) => {
        sequelize.query(`
            SELECT * FROM buttons
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('error with request from DB', err))
    },
    append: (req, res) => {
        const { id } = req.params
        sequelize.query(`
            SELECT * FROM buttons
            WHERE buttonId = +${id}
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('error getting all the data', err))
    }
}