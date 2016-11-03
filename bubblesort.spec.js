describe('Bubble Sort', function() {

	beforeEach(function() {
		spyOn(window, 'bubbleSort').and.callThrough();
		spyOn(window, 'swap').and.callThrough();
	});

	it('handles an empty array', function() {
		expect( bubbleSort([]) ).toEqual( [] )
	});

	it('reorders the array', function() {
		expect( bubbleSort([2,4,6,1,3,8,7,5]) ).toEqual( [1,2,3,4,5,6,7,8] )
	});

	it('tracks the number of times bubbleSort has been called', function() {

		bubbleSort([2,4,6,1,3,8,7,5]);
		expect( bubbleSort.calls.count() ).toEqual(4);
	});

	it('tracks the number of times swap has been called', function() {
		bubbleSort([2,4,6,1,3,8,7,5]);
		expect( swap.calls.count() ).toEqual(9);
	})
});

