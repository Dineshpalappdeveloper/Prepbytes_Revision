const { MongoClient } = require("mongodb")

// const uri = "mongodb+srv://sharma17h:7509359202@cluster0.icjntaq.mongodb.net/"
// mongodb+srv://dineshkr748199:<password>@cluster0.sdp0zza.mongodb.net/
const uri = "mongodb+srv://dineshkr748199:8986113306@cluster0.sdp0zza.mongodb.net/"

const client = new MongoClient(uri)

module.exports = client