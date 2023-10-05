//your code here
let ans = 0;
const btn = document.querySelector(".submitInput");

//function

function showResult(event) {
  const values = document.querySelector(".textInput").value;
  const temp = values.split(",");
  let arr = [];
  for (let i = 0; i < temp.length; i++) {
    arr.push(Number(temp[i]));
  }
  arr.sort(function (a, b) {
    return a - b;
  });
  while (arr.length > 1) {
    let first = arr.shift();
    let second = arr.shift();
    ans += first + second;
    arr.push(first + second);
    arr.sort(function (a, b) {
      return a - b;
    });
  }
  document.querySelector("#result").textContent = ans;
  console.log(ans);
}

btn.addEventListener("click", showResult);