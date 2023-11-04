function calculateMinCost() {
	//your code here
	let str = document.getElementById("rope-lengths").value;
	ler arr1 = str.split(",");
	let res = 0;
	while(arr1.length > 1){
		arr1.sort(function(a, b){
		  return a-b;
	  });
	  let first = parseInt(arr1.shift());
	  let second = parseInt(arr1.shift());
	  res += first + second;
	  arr1.push(first + second); 
	}
	let output = document.getElementById("result");
	output.innerText = res;
	return res;
}  