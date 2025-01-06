function Square ({index, square, rowIndex, handleSquareClick, player, setPlayer}) {
    return (
        <div>
            <button onClick={() => {
                    handleSquareClick(rowIndex, index, player);
                    (player === "X") ? (setPlayer("O")) : (setPlayer("X"))
                }
            }>{square}</button>
        </div>
    )
}

export default Square