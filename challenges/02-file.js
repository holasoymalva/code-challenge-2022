/*

Given a 2D integer array matrix, return the transpose of matrix.

The transpose of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[1,4,7],[2,5,8],[3,6,9]]
Example 2:

Input: matrix = [[1,2,3],[4,5,6]]
Output: [[1,4],[2,5],[3,6]]
 
Constraints:

m == matrix.length
n == matrix[i].length
1 <= m, n <= 1000
1 <= m * n <= 105
-109 <= matrix[i][j] <= 109

*/


let matrix = [[1,2,3],[4,5,6],[7,8,9]]

const transpose = function(matrix) {
    let newMatrix = [];
    let row = matrix.length;
    let col = matrix[0].length;
    for (let indexCol = 0; indexCol < row; indexCol++) {
        for (let indexRow = 0; indexRow < col; indexRow++) {
            if(!newMatrix[indexRow]){
                newMatrix[indexRow] = [];
            } 
            newMatrix[indexRow][indexCol] = matrix[indexCol][indexRow];
        }
    }
    return newMatrix;
};

transpose(matrix);
