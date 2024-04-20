var isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split('').sort().join('');
    let originalArr = original.toLowerCase().split('').sort().join('');
    return testArr === originalArr
};
