const ApiError = require("../error/ApiError")
const { ExchangeRequest } = require('../models/models')

class ExchangeRequestController {
	async createRequest(req, res) {
		const { user_id, name, surname, patronymic, email, cashcard, cryptocard, firstcurrency,
			firstcurrencyquantity, secondcurrency, secondcurrencyquantity, status } = req.body
		const exchangeRequest = await ExchangeRequest.create({
			user_id, name, surname, patronymic, email, cashcard, cryptocard, firstcurrency, firstcurrencyquantity, secondcurrency, secondcurrencyquantity, status
		})
		return res.json({ id: `${exchangeRequest.id}` })
	}

	async getRequest(req, res, next) {
		try {
			const { user_id } = req.body
			const exchangeRequests = await ExchangeRequest.findAll({ where: { user_id } })
			return res.json(exchangeRequests)
		} catch (error) {
			return next(ApiError.internal('Ошибка сервера'))
		}
	}

	async getAllRequests(req, res, next) {
		try {
			const exchangeRequests = await ExchangeRequest.findAll()
			return res.json(exchangeRequests)
		} catch (error) {
			return next(ApiError.internal('Ошибка сервера'))
		}
	}

	async changeStatus(req, res, next) {
		try {
			const { id, status } = req.body
			const updatedRequest = await ExchangeRequest.findByPk(id)
			if (!updatedRequest) {
				return next(ApiError.internal('Запрос не найден'))
			}
			updatedRequest.status = status
			await updatedRequest.save()

			return res.json({ message: 'Статус изменен' })
		} catch (error) {
			return next(ApiError.internal('Ошибка сервера'))
		}
	}
}

module.exports = new ExchangeRequestController()