const{ sequelize } = require('./models')
const express = require('express')
const app = express()
app.use(express.json())

app.get('/user', async(req, res) => {
    console.log('message')

    return res.status(200).json('message')
})


app.listen(5000, async() =>{
    console.log('server up and running on http://localhost:5000')
    await sequelize.authenticate()
    console.log('database connected')
})
    


