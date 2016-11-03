var bubbleSort = function(array) {
	
	var swapCalled = false; 

	for (var i = 0; i < array.length; i++) {
		if (array[i] > array[i+1]) {
			swap(i, array);
			swapCalled = true;
		}
	}

	if (swapCalled === false) {
		return array;	
	}

	return bubbleSort(array);
}

var swap = function(i, array) {
	var temp = array[i];
	array[i] = array[i+1];
	array[i+1] = temp;
}