function linearSearch(searchTerm, arr) {
  for (let index = 0; index < arr.length; index++) {
    const elem = arr[index];

    if (elem === searchTerm) {
      return index;
    }
  }
}

function globalLinearSearch(searchTerm, arr) {
  const matchingIndices = [];

  for (let index = 0; index < arr.length; index++) {
    const elem = arr[index];

    if (elem === searchTerm) {
      matchingIndices.push(index);
    }
  }

  return matchingIndices;
}

module.exports = { linearSearch, globalLinearSearch };
