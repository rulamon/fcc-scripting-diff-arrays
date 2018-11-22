function diffArray(arr1, arr2) {
  var newArr = [].concat(arr1);
  for (let i = 0; i < arr2.length; i++) {
  	if (arr1.includes(arr2[i])) {
  		newArr.splice(newArr.indexOf(arr2[i]), 1);
  	} else {
  		newArr.push(arr2[i]);
  	}
  }
  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));