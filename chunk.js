const { assert } = require("./test-utils");

function chunk(array, size) {
  if (!array || size == null || size < 1) return [];
  const result = [];
  let i = 0;
  const length = array.length;

  while (i < length) {
    result.push(array.slice(i, i + size));
    i += size;
  }
  return result;
}

const testName = "chunk 함수 테스트:";
assert(chunk([], 2), [], `${testName} 빈 배열`);
assert(
  chunk([1, 2, 3, 4, 5], 1),
  [[1], [2], [3], [4], [5]],
  `${testName} 배열 분할`
);

assert(
  chunk([1, 2, 3], 5),
  [[1, 2, 3]],
  `${testName} 배열 길이보다 큰 size로 분할`
);

assert(chunk([1, 2, 3], -1), [], `${testName} 잘못된 size(음수) 입력`);
