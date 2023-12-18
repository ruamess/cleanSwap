const ApiError = require("../error/ApiError")
const bcrypt = require('bcryptjs')
const { User } = require('../models/models')
const express = require('express')
require('dotenv').config()


class UserController {
	async registration(req, res, next) {
		const { email, password } = req.body
		if (!email || !password) {
			return next(ApiError.badRequest('Неправильный email или password'))
		}
		const candidate = await User.findOne({ where: { email } })
		if (candidate) {
			return next(ApiError.badRequest('Пользователь с таким email уже существует'))
		}
		const hashPassword = await bcrypt.hash(password, 5)
		const user = await User.create({ email, password: hashPassword })
		return res.json({ result: true })
	}

	async login(req, res, next) {
		const { email, password } = req.body;
		const user = await User.findOne({ where: { email } });
		if (!user) {
			return next(ApiError.internal('Пользователь не найден'));
		}
		let comparePassword = bcrypt.compareSync(password, user.password);
		if (!comparePassword) {
			return next(ApiError.internal('Неверный пароль'));
		}

		const userData = {
			id: user.id,
			email: user.email,
			password: user.password,
			admin: user.admin
		};

		return res.json({ user: userData });
	}

	async addAdmin(req, res, next) {
		const { email, admin, SECRET_KEY } = req.body
		if (SECRET_KEY == process.env.SECRET_KEY) {
			const createAdmin = await User.findOne({ where: { email } })
			if (!createAdmin) {
				return next(ApiError.internal('Такой email не существует'))
			}
			createAdmin.admin = admin
			await createAdmin.save()
			return res.json({ message: "Успешно" })
		}
	}

}

module.exports = new UserController()