
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr=[];
  if (!matrix || matrix.length==0)
  return [];

  for (let i=matrix.length-1;i>=0;i--){
    if (i%2!=0) matrix[i].reverse();
    newArr=matrix[i].concat(newArr);
  }
  return newArr;
}
