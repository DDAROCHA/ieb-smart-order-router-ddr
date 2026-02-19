/**
 * route.test by DDR
 *
 * Test examples for ddrRouteEx.
 * basic cases, edge cases, performance cases, invalid input cases.
 */
import { ddrRouteEx } from '../src/ddrRouteEx';

function generateRandomArray(size: number, min = 1, max = 1000000): number[] {
  const arr = new Array(size);
  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return arr;
}

function lookingValidVenues(venues: number[], target: number, result: number[]): boolean {
  if (result.length === 0) return true;

  const [i, j] = result;

  return (
    i !== j &&
    i >= 0 &&
    j >= 0 &&
    i < venues.length &&
    j < venues.length &&
    venues[i] + venues[j] === target
  );
}

function runTest(name: string, venues: number[], target: number, expectedEmpty: boolean) {
  const result = ddrRouteEx(venues, target);

  const passed = expectedEmpty ? result.length === 0 : lookingValidVenues(venues, target, result);

  if (passed) {
    console.log(`PASSED -> ${name}`);
  } else {
    console.log(`FAILED -> ${name}`);
    console.log('Result:', result);
  }
}

function runTests() {
  console.log(`Run the test suite: ...`);

  runTest('1_Basic case', [120, 80, 40, 60], 100, false);

  runTest('2_No solution', [10, 20, 30], 100, true);

  runTest('3_Duplicate values', [50, 50], 100, false);

  runTest('4_Empty array', [], 100, true);

  runTest('5_Single venue', [100], 100, true);

  runTest('6_Multiple valid pairs', [10, 90, 20, 80], 100, false);

  runTest(
    '7_Large input performance',
    Array.from({ length: 100000 }, (_, i) => i + 1),
    199999,
    false
  );

  runTest(
    '8_Random large array test',
    (() => {
      const largeArray = generateRandomArray(100000);
      largeArray[0] = 500000;
      largeArray[1] = 500000;
      return largeArray;
    })(),
    1000000,
    false
  );

  runTest('9_All elements equal, target achievable', [50, 50, 50, 50], 100, false);

  runTest('10_Target very large, no solution', [1, 2, 3, 4, 5], 1000000, true);

  runTest('11_Large array with same value', Array(1000000).fill(1), 2, false);

  runTest('12_Invalid input: null', null as unknown as number[], 100, true);

  runTest('13_Invalid input: undefined', undefined as unknown as number[], 100, true);

  runTest('14_Invalid input: string', 'abc' as unknown as number[], 100, true);

  console.log(`Test suite completed.  -->>> COOL!`);
}

runTests();

// ## Code ready for evaluation, do not modify anymore! ##
