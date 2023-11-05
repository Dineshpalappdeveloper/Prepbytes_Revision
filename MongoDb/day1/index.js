const express = require("express")
const client = require("./db/connection")
const app = express()
const port = 8000


const dbconnect = async () => {
    try {
        await client.connect(err => { if (err) console.log(err) })
        console.log("connected to Database")
        // client.db("ecommerce").collection("try").insertOne({ name: "Durgesh", Age: 56 }, (err, res) => {
        //     if (err) { console.log(err) }
        //     console.log("Data inserted", res)
        // })
    } catch (e) {
        console.log('error', e)
    }
}

dbconnect()
app.get("/", (req, res) => {
    res.send("gejlkeedoljdokj")
})

app.get("/add", async (req, res) => {
    const body1 = req.boby
    res.send()
})

app.listen(port, () => {
    console.log(`Server is live in ${port}`)
})

