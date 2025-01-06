import React from "react";
import { createRoot } from "react-dom/client";
import { useState } from "react";
import LayoutGrid from "./LayoutGrid";

function App () {
    const [playerX, setPlayer] = useState("X")
    const [winner, setWinner] = useState(null)

    function winDetection (layout) {
        for (let i = 0; i < 3; i++) {
            if (
                layout[i][0] !== "" &&
                layout[i][0] === layout[i][1] &&
                layout[i][1] === layout[i][2]
            ) {
                setWinner(layout[i][0])
                return layout[i][0]
            }
        }

        for (let i = 0; i < 3; i++) {
            if (
                layout[0][i] !== "" &&
                layout[0][i] === layout[1][i] &&
                layout[1][i] === layout[2][i]
            ) {
                setWinner(layout[0][i])
                return layout[0][i]
            }
        }

        if (layout[0][0] !== "" &&
            layout[0][0] === layout[1][1] &&
            layout[1][1] === layout[2][2])
        {
            setWinner(layout[0][0])
            return layout[0][0];
        }

        if (
            layout[0][2] !== "" &&
            layout[0][2] === layout[1][1] &&
            layout[1][1] === layout[2][0]
        ) {
            setWinner(layout[0][2]);
            return layout[0][2];
        }

        const isBoardFull = layout.flat().filter(cell => cell === "")
        if (isBoardFull.length === 0) {
            setWinner("tie")
        }

        return null
    }

    return (
        <div>
            <LayoutGrid
                player={playerX}
                winDetection={winDetection}
                setWinner={setWinner}
                winner={winner}
                setPlayer={setPlayer}
            />

            <p>
                {(winner === "tie")
                        ? ("This game was a tie")
                        : winner
                        ? `This game was won by ${winner}`
                        : `It's ${playerX}'s turn`}
            </p>

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