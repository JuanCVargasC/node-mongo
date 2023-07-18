const express = require('express')
const app = express()

require('./drivers/connect-db')
app.set('PORT',process.env.PORT || 3000 )

app.use(express.json())//permite recibir .json de datos


app.use('/authors',require('./routes/authors'))
app.use('/songs',require('./routes/songs'))

app.listen(app.get('PORT'),()=>console.log(`Server Listen to Port ${app.get('PORT')}`))