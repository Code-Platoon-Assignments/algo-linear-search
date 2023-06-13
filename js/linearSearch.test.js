const linearSearch = require('./linearSearch');

test('linearSearch should return the correct index if the value is found', () => {
  expect(linearSearch.linearSearch(3, [1, 2, 3])).toBe(2);
  expect(linearSearch.linearSearch(4, [1, 2, 3])).toBeUndefined();
  expect(linearSearch.linearSearch(13, [1, 2, 3])).toBeUndefined();
});

test('linearSearchGlobal should return the correct indices if the value is found', () => {
  expect(linearSearch.linearSearchGlobal("a", ["b", "a", "n", "a", "n", "a", "s"])).toEqual([1, 3, 5]);
  expect(linearSearch.linearSearchGlobal("s", ["b", "a", "n", "a", "n", "a", "s"])).toEqual([6]);
  expect(linearSearch.linearSearchGlobal("n", ["b", "a", "n", "a", "n", "a", "s"])).toEqual([2, 4]);
});
