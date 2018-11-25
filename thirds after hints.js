function diffArray(arr1, arr2) {
	return arr2.concat(arr1)
		.filter(x => arr1.indexOf(x) == -1 || arr2.indexOf(x) == -1);
}

console.log(diffArray([1, 2, 3, 5,], [1, 2, 3, 4, 5,]));