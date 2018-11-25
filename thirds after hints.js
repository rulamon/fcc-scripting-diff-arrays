const diffArray = (arr1, arr2) => arr2.concat(arr1).filter(x => !arr1.includes(x) || !arr2.includes(x));
console.log(diffArray([1, 2, 3, 5,], [1, 2, 3, 4, 5,]));