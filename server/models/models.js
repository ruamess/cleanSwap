const sequelize = require('../db')
const { DataTypes } = require('sequelize')

const User = sequelize.define('user', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	admin: { type: DataTypes.BOOLEAN, defaultValue: false },
	email: { type: DataTypes.STRING, unique: true },
	password: { type: DataTypes.STRING }
})


const ExchangeRequest = sequelize.define('exchangerequest', {
	id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
	user_id: { type: DataTypes.INTEGER },
	name: { type: DataTypes.STRING },
	surname: { type: DataTypes.STRING },
	patronymic: { type: DataTypes.STRING },
	email: { type: DataTypes.STRING },
	cashcard: { type: DataTypes.STRING },
	cryptocard: { type: DataTypes.STRING },
	firstcurrency: { type: DataTypes.STRING },
	firstcurrencyquantity: { type: DataTypes.FLOAT },
	secondcurrency: { type: DataTypes.STRING },
	secondcurrencyquantity: { type: DataTypes.FLOAT },
	status: { type: DataTypes.STRING }
})

User.hasMany(ExchangeRequest)
ExchangeRequest.belongsTo(User)


module.exports = {
	User,
	ExchangeRequest
}