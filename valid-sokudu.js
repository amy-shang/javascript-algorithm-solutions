const ValidSokudu = (board) => {
    for( let i = 0; i < 9; i++){
        const rowChecker = new Set();
        const colChecker = new Set();
        const cellChecker = new Set();
        for( let j = 0; j < 9; j++){
            let rowNum = board[i][j];
            let colNum = board[j][i];
            let boxNum = [3* Math.floor(i/3) + Math.floor(j/3)][3*(i%3)+(j%3)];

            if( rowNum !== '.'){
                if( rowChecker.has(rowNum )) return false;
                else rowChecker.add(rowNum);
            }
            if( colNum !== '.'){
                if( colChecker.has(colNum )) return false;
                else colChecker.add(colNum);
            }
            if( boxNum !== '.'){
                if( cellChecker.has(boxNum )) return false;
                else cellChecker.add(boxNum);
            }
        }
    }
    return true
}
