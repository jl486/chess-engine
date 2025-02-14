import './App.css';
import Board from './components/Board';

function WebsocketClient() {
  const socket = new WebSocket("ws://localhost:5173/");

  socket.onopen = () => {
    console.log("Client has connected to WebSocket server.");

    socket.send(JSON.stringify({
      type: "position",
      fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR"
    }));
  };

  socket.onmessage = (event) => {
    const data = JSON.parse(event.data);
    if (data.type === "analysis") {
      console.log("Best move: ", data.best_move);
    }
  };

  socket.onclose = () => {
    console.log("Client has diconnected from WebSocket server.");
  }
}

function App() {
  //WebsocketClient();
  return (
    <>
      <Board></Board>
    </>
  )
}

export default App
