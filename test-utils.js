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
