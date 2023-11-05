
const routs = require("express").Router()

routs.get("/dashboard", (req, res) => {
    if (req.body.id > 17) {
        res.send("hii")

    } else {
        res.send("not")

    }
})

module.exports = routs
