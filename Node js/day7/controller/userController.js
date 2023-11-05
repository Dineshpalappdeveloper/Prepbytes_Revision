let arr = [];
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");
const secretkey = "23232131"
const saltround = 10;
dotenv.config();

const register = (req, res) => {
    const details = req.body;
    const find = arr.find((item) => details.email === item.email);
    const hashpassword = bcrypt.hashSync(details.password, saltround);

    if (find) {
        return res.send({ msg: "Email is already Exits" });
    }
    const temp = {
        email: details.email,
        password: hashpassword,
    }
    console.log(secretkey);
    arr.push(temp);
    const token = jwt.sign({ email: details.email }, secretkey, { expiresIn: "30days" })
    res.send({ msg: "user is register", result: temp, token: token });


};
const login = async (req, res) => {
    const details = req.body;
    const find = arr.find((item) => details.email === item.email);
    if (!find) {
        return res.send({ msg: "user is not register" });
    } else {
        const validated = await bcrypt.compare(details.password, find.password);
        if (!validated) {
            return res.send({ msg: "user or password is wrong " });

        } else {
            const token = jwt.sign({ email: details.email }, secretkey, { expiresIn: "9999999" })

            return res.send({ msg: "user is login successfully", token: token });

        }
    }
};

const profie = (req, res) => {

    res.send({ name: "Dinesh kumar", Roll: "255" });
};
const dashboard = (req, res) => {

    res.send({ msg: "user is dashboard" });
};
module.exports = { register, login, profie, dashboard };
