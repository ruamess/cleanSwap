const Router = require('express')
const userRouter = require('./userRouter')
const exchangeRequestRouter = require('./exchangeRequestRouter')
const router = new Router()

router.use('/user', userRouter)
router.use('/exchange', exchangeRequestRouter)


module.exports = router