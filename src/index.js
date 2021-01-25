
exports.min = function min (array) {
  if (!array || !array.length) return 0;
  else return Math.min(...array);
}

exports.max = function max (array) {
  if (!array || !array.length) return 0;
  else return Math.max(...array);
}

exports.avg = function avg (array) {
  if (!array || !array.length) return 0;
  else {
    let total = 0;

    for(let i = 0; i < array.length; i++) {
        total += array[i];
    }

    let avg = total / array.length;

    return avg;
  }
}
