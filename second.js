function diffArray(arr1, arr2) {
	var newArr = arr2.concat(arr1);
	let i = 0;
	while (i < newArr.length) {
		if (i != newArr.lastIndexOf(newArr[i])) {
			newArr.splice(newArr.lastIndexOf(newArr[i]), 1);
			newArr.splice(i, 1);
		} else {
			i++;
		}
	}
	return newArr;
}

console.log(diffArray([1, 2, 3, 5,], [1, 2, 3, 4, 5,]));