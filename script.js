function calculateMinCost() {
 const ropeLengthsStr = document.getElementById('rope-lengths').value;
  const ropeLengthsArr = ropeLengthsStr.split(',').map(Number);
  const n = ropeLengthsArr.length;
 
  let pq = [];
  for (let i = 0; i < n; i++) {
    pq.push(ropeLengthsArr[i]);
  }
  pq.sort(function (a, b) { return a - b; });
 
  let res = 0;
  while (pq.length > 1) {
    let first = pq.shift();
    let second = pq.shift();
    res += first + second;
    pq.push(first + second);
    pq.sort(function (a, b) { return a - b; });
  }
 
  document.getElementById('result').textContent = res;
}