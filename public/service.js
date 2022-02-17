const { io } = require("socket.io-client");
const socket = io.connect("http://localhost:3000");



//Connection established
socket.on("connect", () => {
    console.log("Succesfully connected to the socket");
});

socket.on('jwt', (payload) =>{
    console.log("Triggered")
    socket.emit('auth', localStorage.getItem("Auth"))
})


//Disconnected
socket.on("disconnect", () => {
    console.log("Socket disconnected"); // false
});