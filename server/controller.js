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
module.exports = {
    CreateButton: (req, res) => {
        const {name} = req.body
        const {image} = req.body
        const {type} = req.body
        const {skills} = req.body
        const {money} = req.body
        const {appointments} = req.body
        const {integration} = req.body
        const {preffered} = req.body
        const {interaction} = req.body
        const {activities} = req.body
        const {food} = req.body
        const {mealPlan} = req.body
        const {behavior} = req.body
        const {comment} = req.body
        
        sequelize.query(`
            INSERT INTO buttons (name, image, type, skills, money, appointments, integration, preffered, interaction, activities, food, meal plan, behavior, comment)
            VALUES (${name},${image},${type},${skills},${money},${appointments},${integration},${preffered},${interaction},${activities},${food},${mealPlan},${behavior},${comment})
        `)
    }
}