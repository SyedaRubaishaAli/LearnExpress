// const express = require("express")
// const router = express.Router()
// OR 
const router = require("express").Router()
// const bodyParser = require("body-parser") 



router.get("/login", (req, res) => {
    res.send("login Page")
})

router.post("/register",  (req, res) => {
    res.send(req.body)
})

router.post("/login",  (req, res) => {
    res.send(req.body)
})




module.exports = router