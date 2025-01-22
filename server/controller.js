require("dotenv").config();
// const {CONNECTION_STRING} = process.env
const Sequelize = require("sequelize");

const sequelize = new Sequelize(`original-notes`, "root", "ashiatsu", {
    host: 'localhost',
    dialect: 'mysql',
    port:3306,
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
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
        let {preferred} = req.body
        let {interaction} = req.body
        let {activities} = req.body
        let {food} = req.body
        let {mealPlan} = req.body
        let {behavior} = req.body
        let {comment} = req.body
        let {staring} = req.body
        let {argument} = req.body
        let {aggression} = req.body
        let {controlling} = req.body
        let {coping} = req.body
        let {redirection} = req.body

        name = addEscape(name)
        skills = addEscape(skills)
        money = addEscape(money)
        appointments = addEscape(appointments)
        integration = addEscape(integration)
        preferred = addEscape(preferred)
        interaction = addEscape(interaction)
        activities = addEscape(activities)
        food = addEscape(food)
        mealPlan = addEscape(mealPlan)
        behavior = addEscape(behavior)
        comment = addEscape(comment)
        console.log("before then block")
        sequelize.query(`
            INSERT INTO buttons (type, name, image, skill, money, appointment, integration, preferred, interaction, activity, food, mealPlan, behavior, comment, staring, argument, aggression, controlling, coping, redirection)
            VALUES ('${type}','${name}','${image}','${skills}','${money}','${appointments}','${integration}','${preferred}','${interaction}','${activities}','${food}','${mealPlan}','${behavior}','${comment}','${staring}','${argument}','${aggression}','${controlling}','${coping}','${redirection}') `).then(dbRes => res.sendStatus(200))
        .catch(err => console.log('error with sending to DB', err))
    },
    getButtons: (req, res) => {
        sequelize.query(`
            SELECT * FROM buttons
        `)
        .then(dbRes => {
            // console.log(dbRes)
            res.status(200).send(dbRes[0])
        })
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