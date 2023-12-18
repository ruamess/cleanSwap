const express = require('express')
require('dotenv').config()
const sequelize = require('./db')
const router = require('./routes/index')
const models = require('./models/models')
const errorHandler = require('./middleware/errorHandlingMiddleware')
const cors = require('cors')
const PORT = process.env.PORT || 5000


const app = express()

app.use(cors())
app.use(express.json())
app.use('/api', router)



app.use(errorHandler)

const start = async () => {
    try {
        await sequelize.authenticate(),
            await sequelize.sync(),
            app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`))
    } catch (e) {
        console.log(e)

    }
}


start()






