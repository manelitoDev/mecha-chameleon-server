const WebSocket = require("ws");

const port = process.env.PORT || 8080;
const server = new WebSocket.Server({ port: port });

console.log("MECHA CHAMELEON SERVER");
console.log("Servidor iniciado na porta 8080");

server.on("connection", function(ws) {

    console.log("PS2 conectado!");

    ws.send("BEM_VINDO");

    ws.on("message", function(message) {

        const text = message.toString();

        console.log("PS2:", text);

        if (text === "PING") {
            ws.send("PONG");
        }

    });

    ws.on("close", function() {
        console.log("PS2 desconectado!");
    });

});
