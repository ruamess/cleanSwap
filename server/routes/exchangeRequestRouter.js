const Router = require('express')
const exchangeRequestController = require('../controllers/exchangeRequestController')
const router = new Router()


router.post('/createRequest', exchangeRequestController.createRequest)
router.post('/getRequest', exchangeRequestController.getRequest)
router.get('/getAllRequests', exchangeRequestController.getAllRequests)
router.put('/changeStatus', exchangeRequestController.changeStatus)


module.exports = router