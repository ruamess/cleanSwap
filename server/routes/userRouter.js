const Router = require('express')
const userController = require('../controllers/userController')
const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.put('/addAdmin', userController.addAdmin)


module.exports = router