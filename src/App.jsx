import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import LayoutGrid from "./LayoutGrid";

function App () {
    const [playerX, setPlayer] = useState("X")
    const [gameState, setGameState] = useState("playing")

    return (
        <div>
            <LayoutGrid
                player={playerX}
                gameState={gameState}
                setPlayer={setPlayer}
            />
        </div>
    )
}

const container = document.getElementById("root")
const root = createRoot(container)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)