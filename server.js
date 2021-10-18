const express = require('express')
const hideAndSeekRouter = require('./routes/hideAndSeekRoutes')

const app = express()
const port = 3000

app.use(hideAndSeekRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

