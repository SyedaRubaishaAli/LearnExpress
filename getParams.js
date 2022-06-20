const express = require("express")
const router = express.Router()
// OR 
// const router = require("express").Router()



router.get("/my-params/:username", (req, res) => {
    res.send(req.params.username)
})

// router.get("/my-params/:username/ID", (req, res) => {
//     res.send(req.params.username)
// })

router.get("/my-params/:username/:ID", (req, res) => {
    res.send(`${req.params.username}  ${req.params.ID}` )
    // res.json({
    //     username: req.params.username,
    //     id: req.params.ID
    // })
})



router.get("/my-query", (req, res) => {
    // res.send("My query")
    // res.send(`"My query"  ${req.query.user}  ` )
    res.json({
        msg: "My query",
        data    : req.query
    })
})



module.exports = router