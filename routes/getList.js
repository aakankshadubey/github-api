const express = require('express')
const route = express.Router()
const axios = require('axios')
const CircularJSON = require('circular-json');

route.post('/', (req, res) => {
    let userName = req.body.userName
    console.log(userName)
    axios.get("https://api.github.com/users/" + userName + "/repos")
        .then((response) => {
            let data = response.data
            res.send(CircularJSON.stringify(data))

        })
        .catch((error) => {
            console.log(error)
        })

})


exports = module.exports = route