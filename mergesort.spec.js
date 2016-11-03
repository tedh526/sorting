describe('Split Array function', function() {
	it('is able to split an array into two halves', function() {
		expect( split([ 1, 2, 3, 4, 5, 6, 7 ]) ).toEqual( [ [1, 2, 3 ], [4, 5, 6, 7] ] )
	});
});

describe('Merge', function() {
	it('is able to merge two sorted arrays into one sorted array', function(){
		expect( merge([ 1, 3, 5, 7], [ 2, 4] ) ).toEqual([ 1,2,3,4,5,7 ]);
	});
});

describe('Merge Sort', function() {
	it('is able to merge two sorted arrays into one sorted array', function(){
		expect( mergeSort([2,4,6,1,3,8,7,5] ) ).toEqual([1,2,3,4,5,6,7,8]);
	});
});