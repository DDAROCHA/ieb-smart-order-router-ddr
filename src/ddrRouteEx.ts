/**
 * ddrRouteEx by DDR
 *
 * Main function of the challenge
 * Find 2 complementary values that satisfy the condition of summing to the target.
 * I settle for the first two found
 */

export function ddrRouteEx(venues: number[], target: number): number[] {
  // Verify that the input is an array
  if (!Array.isArray(venues)) return [];

  // at least 2 values!!!
  if (venues.length < 2) {
    return [];
  }

  // define storage space, later I will search the index here
  const storedVenues = new Map<number, number>();

  for (let i = 0; i < venues.length; i++) {
    const current = venues[i];
    const expected = target - current;

    // check if I find the value needed to complete the target
    const foundIndex = storedVenues.get(expected);

    // Store current value and index;
    storedVenues.set(current, i);

    if (foundIndex !== undefined) {
      return [foundIndex, i];
    }
  }

  // I didn't find anything, return empty array
  return [];
}

// ## end of the Challenge
