const { assert } = require("./test-utils");

function deepClone(value) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => deepClone(item));
  }

  const clonedObj = Object.create(Object.getPrototypeOf(value));

  Object.entries(value).forEach(([key, val]) => {
    clonedObj[key] = deepClone(val);
  });

  return clonedObj;
}

const testName = "deepClone 함수 테스트:";

const originalObj = {
  outer: "outer",
  nested: {
    inner: "inner",
  },
};

const shallowCopy = { ...originalObj }; // shallow copy
const deepCopy = deepClone(originalObj); // deep copy

originalObj.nested.inner = "changed";

assert(
  shallowCopy.nested.inner,
  "changed",
  `${testName} Shallow Copy는 중첩 객체가 영향을 받음`
);
assert(
  deepCopy.nested.inner,
  "inner",
  `${testName} Deep Copy는 중첩 객체가 독립적임`
);

const nestedObj = {
  name: "테스트",
  info: {
    age: 25,
    hobbies: ["독서", "운동"],
  },
};

const nestedCopy = deepClone(nestedObj);
nestedObj.info.age = 30;
nestedObj.info.hobbies.push("음악");

assert(nestedCopy.info.age, 25, `${testName} 중첩 객체가 독립적으로 복사됨`);
assert(
  nestedCopy.info.hobbies,
  ["독서", "운동"],
  `${testName} 중첩 배열이 독립적으로 복사됨`
);

const originalArray = [
  { id: 1, items: [1, 2, 3] },
  { id: 2, items: [4, 5, 6] },
];

const deepArrayCopy = deepClone(originalArray);
originalArray[0].items.push(4);
originalArray[1].id = 3;

assert(
  deepArrayCopy[0].items,
  [1, 2, 3],
  `${testName} 배열 내 객체가 독립적으로 복사됨`
);
assert(deepArrayCopy[1].id, 2, `${testName} 중첩된 속성이 독립적으로 복사됨`);
