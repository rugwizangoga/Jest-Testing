const reverseString= require('./reverseString');

test("returns a reversed string", ()=>{
  const name = 'pacific';

  const length = reverseString(name);

  expect(length).toBe('cificap');
})