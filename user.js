// const express = require("express")
// const router = express.Router()
// OR 
const router = require("express").Router()



router.get("/my-users/list", (req, res) => {
    res.send("list Page")
})

router.get("/delete-user", (req, res) => {
    res.send("My name is Mustafa ")
})




module.exports = router