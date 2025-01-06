import { useState } from "react"

function LayoutGrid ({player, gameState, setPlayer}) {
    const [tttLayout, setTTTLayout] = useState([["","",""],["","",""],["","",""]])

    function handleSquareClick (row, index, player) {
        setTTTLayout([row][index][player])
    }

    return (
        <div>
            {tttLayout.map((row, index) => {
                <LayoutRow
                    key={index}
                    index={index}
                    row={row}
                    handleSquareClick={handleSquareClick}
                    player={player}
                    gameState={gameState}
                    setPlayer={setPlayer}
                />
            })}
        </div>
    )
}

export default LayoutGrid