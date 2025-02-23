# js-implementation-playground

JavaScript만으로 구현하는 playground입니다

## 구현 목록

## 테스트 방법

### 테스트 코드

```js
// test-utils.js에 포함된 assert 함수 사용
function assert(actual, expected, message) {
  const success = JSON.stringify(actual) === JSON.stringify(expected);
  if (success) {
    console.log(`✓ ${message}`);
    return;
  }

  console.log(
    `✗ ${message}\nExpected: ${JSON.stringify(
      expected
    )}\nActual: ${JSON.stringify(actual)}`
  );
}

module.exports = { assert };


// 테스트 실행(assert 함수 사용한 파일 실행)
node flatten.js
```

### 테스트 결과

```bash
✓ should flatten nested arrays
✓ should handle empty arrays
✗ should handle null values
    Expected: [1, null, 2, 3]
    Actual: [1, 2, 3]
```

## Bug Report

[Github Issue](https://github.com/seungdeok/js-implementation-playground/issues)를 통해 버그를 제보해주세요.

## Contributing

[PR](https://github.com/seungdeok/js-implementation-playground/pulls)은 언제나 환영입니다.
