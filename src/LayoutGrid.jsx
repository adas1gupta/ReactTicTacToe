import { useState } from "react"
import LayoutRow from "./LayoutRow"

function LayoutGrid ({player, winDetection, setPlayer, setWinner, winner}) {
    const [tttLayout, setTTTLayout] = useState([["","",""],["","",""],["","",""]])

    function handleSquareClick (row, index, player) {
        if (tttLayout[row][index] === "" && !winner) {
            const newLayout = tttLayout.map((rowBlock, i) => (
                rowBlock.map((col, j) => (
                    (i === row && j === index) ? (
                        player
                    ) : col
                ))
            ))

            setTTTLayout(newLayout)
            winDetection(newLayout)
            setPlayer(player === "X" ? "O" : "X");
        }
    }

    function restart () {
        setTTTLayout([["","",""],["","",""],["","",""]])
        setWinner(null)
        setPlayer("X");
    }

    return (
        <div>
            {tttLayout.map((row, index) => (
                <LayoutRow
                    key={index}
                    index={index}
                    row={row}
                    handleSquareClick={handleSquareClick}
                    player={player}
                    setPlayer={setPlayer}
                />
            ))}

            <button onClick={restart}>Restart</button>
        </div>
    )
}

export default LayoutGrid