import { WebSocketServer } from "ws";

const ENGINE_PATH = "/engine.cpp";

const wss = new WebSocketServer({ port : 5173 });

console.log("WebSocket Server running at ws://localhost:5173");

function analyzePosition(fen, callback) {
    console.log("analyzing..");

}

wss.on("connection", (ws) => {
    console.log("Server connected to client.");

    ws.on("message", (message) => {
        try {
            const data = JSON.parse(message);

            if(data.type == "move" && data.fen) {
                console.log("Received FEN: ", data.fen);

                analyzePosition(data.fen, (bestMove) => {
                    ws.send(JSON.stringify({ type: "analysis", best_move: bestMove }));
                });
            }
        } catch (error) {
            console.log("Error processing message: ", error);
        }
    });

    ws.on("close", () => console.log("Server disconnected from client."));

});
