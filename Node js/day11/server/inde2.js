
// const http = require("http")

// const app = http.createServer((req, res) => {
//     if (req.url === "/") {
//         res.write("Hello")
//         res.end()
//     }
//     if (req.url === "/Abouts") {
//         res.write("Abouts")
//         res.end()
//     }
// })
// app.listen(30001)

const express = require("express")
const routs = require("./routes")
const app = express()
app.get("/:id", routs)

app.listen(3200)