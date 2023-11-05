
const express = require("express");
const route = require("./router/userRouting");
const productRouter = require("./router/productRouting");
const validate = require("./midllerware/usermidller");
const jwt = require("jsonwebtoken")
const app = express()
// app.use(validate)
app.use("/user", route)
app.use("/user", productRouter)

const port = 3000;
const Email = 42256;
const secretkey = "2002112"
app.get("/user", (req, res) => {
    const token = jwt.sign({ Email }, secretkey, {
        expiresIn: "56595556612131"
    })
    res.send(token)
})
app.get("/", (req, res) => {

    res.send("welcome dinesh")
})


app.get("/about/:id", (req, res) => {
    const stdId = req.params.id;
    console.log(stdId);
    res.send(`This is   ${stdId} Student`)
})

app.get("/api/createProduct", (req, res) => {
    const { age, name, role } = req.query;
    res.send({ age, name, role })
})

app.listen(port, () => {
    console.log("running on ", port);
})