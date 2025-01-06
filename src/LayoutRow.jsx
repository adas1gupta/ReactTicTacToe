import Square from "./Square";

function LayoutRow ({
        index,
        row,
        handleSquareClick,
        player,
        gameState,
        setPlayer
    })
{
    return (
        <div>
            {row.map((square, squareIndex) => {
                <Square
                    key={squareIndex}
                    index={squareIndex}
                    square={square}
                    rowIndex={index}
                    handleSquareClick={handleSquareClick}
                    player={player}
                    gameState={gameState}
                    setPlayer={setPlayer}
                />
            })}
        </div>
    )
}

export default LayoutRow;