function solution (A) {
  const EAST_VALUE = 0
  const WEST_VALUE = 1
  const MAX_PAIRS_COUNT = 1000000000

  let eastCount = 0
  let eastSequence = []

  A.forEach((element, index) => {
    if (element === EAST_VALUE) {
      eastCount++
    }

    eastSequence[index] = eastCount
  })

  let numberOfCarPairs = 0

  for (let index = A.length - 1; index >= 0; index--) {
    if (A[index] === WEST_VALUE) {
      numberOfCarPairs += eastSequence[index]

      if (numberOfCarPairs > MAX_PAIRS_COUNT) {
        return -1
      }
    }
  }

  return numberOfCarPairs
}
