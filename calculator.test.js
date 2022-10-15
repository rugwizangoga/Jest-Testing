const calculator= require('./calculator');

  describe('my calculator tests', () => {

  const tests = [{num1: 4, num2: 2}, {num1: 9, num2: 3}, {num1: 20, num2: 5}];
  let testsResults= [];

  tests.forEach(test=>{
    testsResults.push(
      {
        addition: calculator.add(test.num1,test.num2),
        sub: calculator.subtract(test.num1,test.num2),
        mult: calculator.multiply(test.num1,test.num2),
        div: calculator.divide(test.num1, test.num2)
      }
    )
  });

    test('properly adds two numbers', () => {
        expect(testsResults[0].addition).toBe(6);
        expect(testsResults[1].addition).toBe(12);
        expect(testsResults[2].addition).toBe(25);
      });

      test('properly substract two numbers', () => {
        expect(testsResults[0].sub).toBe(2);
        expect(testsResults[1].sub).toBe(6);
        expect(testsResults[2].sub).toBe(15);
      });

      test('properly multiply two numbers', () => {
        expect(testsResults[0].mult).toBe(8);
        expect(testsResults[1].mult).toBe(27);
        expect(testsResults[2].mult).toBe(100);
      });

      test('properly divide two numbers', () => {
        expect(testsResults[0].div).toBe(2);
        expect(testsResults[1].div).toBe(3);
        expect(testsResults[2].div).toBe(4);
      });
    });