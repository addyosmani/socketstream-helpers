describe("Helpers", function(){
	var testString = "helloworld",
		testArray  = ['alpha','beta','gamma','beta'];
		
	
	it("should remove all the duplicates from an array", function(){
		expect(testArray.unique()).toEqual(['alpha','beta','gamma']);
	});
	
	it("should remove all the duplicate characters from a string", function(){
		expect(testString.unique()).toEqual('helowrd');
	});
	
	it("should be able to return the last element in an array", function(){
		expect(testArray.last()).toEqual('beta');
	});
	
	it("should be able to return the last character in a string", function(){
		expect(testString.last()).toEqual('d');
	});
	
	it("should be able to truncate an array to a given length", function(){
		expect(testArray.truncate(1)).toEqual(['alpha']);
		expect(testArray.truncate(2)).toEqual(['alpha', 'beta']);
		expect(testArray.truncate(3)).toEqual(["alpha", "beta", "gamma"]);
		expect(testArray.truncate(4)).toEqual(["alpha", "beta", "gamma", "beta"]);
	});
	
	it("should be able to truncate a string to a given length", function(){
		expect(testString.truncate(5)).toEqual("he...");
		expect(testString.truncate(4)).toEqual("h...");
	});
	
	it("shoud be able to return a random element from an array", function(){
		expect([testArray.random()].length).toEqual(1);
	});
	
	it("should be able to return a random character from a string", function(){
		expect(testString.random().length).toEqual(1);
	});
	
	it("should be able to return true/false if a string contains a character supplied", function(){
		expect(testString.contains('w')).toBeTruthy();
		expect(testString.contains('f')).toBeFalsy();
	});
	
	it("should be able to return true/false if an array contains a character supplied", function(){
		expect(testArray.contains('beta')).toBeTruthy();
		expect(testArray.contains('betas')).toBeFalsy();
		expect(testArray.contains('gamma')).toBeTruthy();
		expect(testArray.contains('gammas')).toBeFalsy();
	});
	
});