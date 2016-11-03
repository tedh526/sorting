describe('Bubble Sort', function() {
	var testArr = [2,4,6,1,3,8,7,5];

	it('handles an empty array', function() {
		expect( bubbleSort([]) ).toEqual( [] )
	});

	it('reorders the array', function() {
		expect( bubbleSort(testArr) ).toEqual( [1,2,3,4,5,6,7,8] )
	});

	it('tracks the nubmer of times bubbleSort has been called', function() {
		expect( bubbleSort.calls.count() ).toEqual();
	});
});

