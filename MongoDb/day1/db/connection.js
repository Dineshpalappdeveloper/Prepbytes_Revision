const { MongoClient } = require("mongodb")
const uri = "mongodb+srv://dineshkr748199:8986113306@cluster0.sdp0zza.mongodb.net/"

const client = new MongoClient(uri)

module.exports = client