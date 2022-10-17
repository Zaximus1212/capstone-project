require("dotenv").config();
const {CONNECTION_STRING} = process.env
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
    str = str.trim().replaceAll("'", "''")
    return str
}

module.exports = {
    seed: (req, res)=> { 
        //please dont seed the database, i will be using this app daily
        sequelize.query(`
            

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
            WHERE buttonId = ${id}
        `)
        .then(dbRes => res.status(200).send(dbRes[0]))
        .catch(err => console.log('error getting all the data', err))
    }
}