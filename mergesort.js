var split = function(wholeArray) {
	var numElements = wholeArray.length;
	var firstHalf = wholeArray.slice(0, Math.floor(numElements / 2));
	var secondHalf = wholeArray.slice(Math.floor(numElements / 2), numElements);

	return [firstHalf, secondHalf];
}

var merge = function(array1, array2, mergedArray = []) {


	if (array1[0] < array2[0]) {
		mergedArray.push(array1.shift());
	} else if (array2[0] < array1[0]) {
		mergedArray.push(array2.shift());
	} else if (!array1[0]) {
		return mergedArray.concat(array2)
	} else {
		return mergedArray.concat(array1)
	}

	return merge(array1, array2, mergedArray);
}

var mergeSort = function(array) {






}