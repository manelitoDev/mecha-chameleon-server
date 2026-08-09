const WebSocket = require("ws");

const port = Number(process.env.PORT) || 10000;

const server = new WebSocket.Server({
    port: port,
    host: "0.0.0.0"
});

console.log("MECHA CHAMELEON SERVER");
console.log("Servidor iniciado na porta " + port);
console.log("Aguardando jogadores...");

server.on("connection", function(ws) {

    console.log("=================================");
    console.log("PS2 CONECTADO!");
    console.log("=================================");

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
