function Square ({index, square, rowIndex, handleSquareClick, player, setPlayer}) {
    return (
        <div>
            <button onClick={() => {
                    if (square !== "") return;
                    handleSquareClick(rowIndex, index, player);
                }
            }>{square}</button>
        </div>
    )
}

export default Square