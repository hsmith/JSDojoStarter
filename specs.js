//GREEN to RED - Make a test that fails.
//RED to GREEN - Make the smallest modification to fix the failing test.
//GREEN to GREEN - Make appropriate refactorings that do not break existing tests.

describe("HIGH_LEVEL_DESCRIPTION", function()
{
	//global variables

	beforeEach(function()
	{
		//operations that occurs before each test
	});

	it("TEST_DESCRIPTION", function()
	{
		//ARRANGE
		var ret = false;

		//ACT
		ret = true;

		//ASSERT
		expect(false).toEqual(ret);
	});
});