const stringLength= require('./stringLength');

test("returns characters count of a given string", ()=>{
  const name = 'pacific';
  const name1 = 'philanthropist';
  const empty = ''

  const length = stringLength(name);
  const length1 = stringLength(name1);
  const length3 = stringLength(empty);

  expect(length).toBe(7);
  expect(length1).toBe('Inavalid parameter');
  expect(length3).toBe('Inavalid parameter');
})