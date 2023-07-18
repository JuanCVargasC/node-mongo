const express = require('express')
const app = express()

require('./drivers/connect-db')
app.set('PORT',process.env.PORT || 3000)

app.use('/authors',require('./routes/authors'))
app.listen(app.get('PORT'),()=>console.log(`Server Listen to port ${app.get('PORT')} `))
