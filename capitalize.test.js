const reverseString= require('./capitalize');

test("returns a capitalized string", ()=>{
  const name = 'pacific';

  const length = reverseString(name);

  expect(length).toBe('Pacific');
})