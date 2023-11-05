const express = require("express")

const app = express()
const port = 8000


app.get("/", (req, res) => {
    res.send("gejlkeedoljdokj")
})


app.listen(port, () => {
    console.log(`Server is live in ${port}`)
})

