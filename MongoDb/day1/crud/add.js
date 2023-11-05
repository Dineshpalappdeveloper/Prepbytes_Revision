
const AddFunc = async () => {
    try {
        await client.connect(err => { if (err) console.log(err) })
        client.db("ecommerce").collection("try").insertMany(({ name: "Dinesh", Age: 56 }, { name: "rajesh", Age: 56 }, { name: "rakesh", Age: 56 }), (err, res) => {
            if (err) { console.log(err) }
            console.log("Data inserted", res)
        })
    } catch (e) {
        console.log('error', e)
    }
}

module.exports = AddFunc