
function solve(arr) {
    let matrix = arr;
    let result = [];
    let is_outside = function is_outside(row, col, matrix) {
        return 0 > row || row >= matrix.length || 0 > col || col >= matrix[0].length
        }

    for(let row = 0; row < matrix.length; row++){
        for(let col = 0; col < matrix[0].length; col ++){
            let current = matrix[row][col]

            if (!is_outside(row, col + 1, matrix)){
                if(matrix[row][col + 1] === current) {
                    result.push([row, col])
                    
                }
            }

            if (!is_outside(row, col -1, matrix)) {
                if(matrix[row][col-1] === current) {
                    result.push([row, col])
                }
            }

            if (!is_outside(row + 1, col, matrix)) {
                if(matrix[row + 1][col] === current) {
                    result.push([row, col])
                }

            }

            if (!is_outside(row - 1, col, matrix)){
                if (matrix[row - 1][col] === current) {
                    result.push([row, col])
                }
            }
        }
    }
    console.log(result.length / 2)
}

solve([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']])

