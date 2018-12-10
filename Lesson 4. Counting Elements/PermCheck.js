function solution (A) {
  const checkArrayPermutation = (array, startIndex = 0) => {
    let isPermutation = 1

    for (let i = startIndex; i < array.length; i++) {
      if (array[i] === undefined || array[i] > 1) {
        isPermutation = 0
        break
      }
    }

    return isPermutation
  }

  let counters = {
    positive: [],
    negative: []
  }

  counters.positive[0] = counters.negative[0] = 0

  A.forEach((element) => {
    let counterArray = element >= 0 ? counters.positive : counters.negative
    let index = Math.abs(element)

    if (counterArray[index] === undefined) {
      counterArray[index] = 0
    }

    counterArray[index]++
  })

  return checkArrayPermutation(counters.positive, 0) && checkArrayPermutation(counters.negative, 1)
}
