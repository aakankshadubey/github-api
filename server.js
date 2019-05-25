const express = require('express')
const app = express()
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))
const path = require('path')

app.use('/', require("./routes/index"))

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log("server listening on PORT : http://localhost:" + PORT)
})