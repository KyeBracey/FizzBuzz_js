describe("fizzbuzz", function() {
  it("Returns Fizz when passed the number 3", function() {
    expect(fizzbuzz(3)).toEqual("Fizz");
  });

  it("Returns 4 when passed the number 4", function() {
    expect(fizzbuzz(4)).toEqual(4);
  });

  it("Returns Fizz when passed the number 6", function() {
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it("Returns Buzz when passed the number 5", function() {
    expect(fizzbuzz(5)).toEqual("Buzz");
  });

  it ("Returns FizzBuzz when passed the number 15", function() {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
  });

  it ("Returns FizzBuzz when passed the number 0", function() {
    expect(fizzbuzz(0)).toEqual("FizzBuzz");
  });

  it ("Returns Fizz when passed the number -3", function() {
    expect(fizzbuzz(-3)).toEqual("Fizz");
  });

  it ("Returns 3.5 when passed the number 3.5", function() {
    expect(fizzbuzz(3.5)).toEqual(3.5);
  });
});
