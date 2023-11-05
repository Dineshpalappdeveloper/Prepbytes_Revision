const express = require("express")
const socket = require("socket.io")

const app = express()
const server = app.listen(3006, () => {
    console.log("running on 3006 ")
})
const io = socket(server, {
    cors: {
        origin: "*"
    }
})

io.on('connection', (socketClient) => {
    console.log(socketClient.id);
    socketClient.on("MESSAGE", (data) => {
        console.log(data);
        socketClient.emit("CLIENT", "message from server side")

    })
    socketClient.on("BROADCAST", (data) => {
        console.log(data);
        io.emit("CLIENTAll", "This is notification ")

    })
    socketClient.on("EXCLUSIVEBROADCAST", (data) => {
        console.log(data);
        socketClient.broadcast.emit("EXCLUSIVEBROADCAST", data)

    })
    socketClient.on("JoinRoom", (room) => {
        console.log(room);
        socketClient.join(room)
        socketClient.emit("JoinRoom", `join Successful  in ${room}`)
        socketClient.on("RoomMessage", (roomMessage) => {
            // console.log(roomMessage);
            io.to(room).emit("RoomMessage", roomMessage)
        })

    })

    // JoinRoom
})
app.get("/", (req, res) => {
    res.send("Welcome Dkp")
})