
const validate = (req, res, next) => {
    const age = req.params.age;
    if (age >= 18) {
        next();
        console.log("hello");
    } else {
        res.send({ msg: "not  Allowed" })
    }
}
module.exports = validate