
const express = require("express")

const port = 3002;
let arr = [];
const app = express()
app.use(express.json())
const cors = require("cors")
app.use(
    cors({
        origin: "*",
    }))
const dummydata = require("./dummydata");

app.get("/About", (req, res) => {
    res.send("Hello About")
})


app.get("/post", (req, res) => {
    res.send("Hello post")
})

app.post("/login", (req, res) => {
    const data = req.body
    console.log(data);
    arr.push(data)
    res.send(arr)
})

app.get("/data1", (req, res) => {
    res.send(dummydata)
    console.log(dummydata);
})

app.listen(port, () => {
    console.log("fine runnig on the post ", port);
})