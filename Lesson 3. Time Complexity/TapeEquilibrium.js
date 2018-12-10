function solution (A) {
  let leftSumArray = []
  let totalSum = 0

  for (let index = 0; index < A.length; index++) {
    let element = A[index]
    totalSum += element
    leftSumArray[index] = totalSum
  }

  let minDiff = null

  for (let index = 0; index < leftSumArray.length - 1; index++) {
    let currentRightSum = totalSum - leftSumArray[index]
    let currentLeftSum = leftSumArray[index]
    let diff = Math.abs(currentLeftSum - currentRightSum)

    if (minDiff === null || diff < minDiff) {
      minDiff = diff
    }
  }

  return minDiff
}
