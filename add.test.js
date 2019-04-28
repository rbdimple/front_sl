function add(a,b){
	return a+b;
}

describe('test:TEST_1',function(){
	it('5+10 should equal to 15',function(){
		expect (add(5,10)).toEqual(15);
	})
	it('5+10 should equal to 11',function(){
		expect (add(5,10)).toEqual(11);
	})
	it('100+20 should equal to 13',function(){
		expect (add(100,20)).toEqual(120);
	})
	it('18+22 should equal to 17',function(){
		expect (add(18,22)).toEqual(29);
	})

});

