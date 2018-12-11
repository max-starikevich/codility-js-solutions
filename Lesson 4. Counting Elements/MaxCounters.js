function solution (N, A) {
  const maxCounterValue = N + 1

  let currentMaxValue = 0
  let lastMaxValue = 0

  let counters = new Array(N).fill(currentMaxValue)

  const maxCounterOperation = () => {
    lastMaxValue = currentMaxValue
  }

  const increaseOperation = (element) => {
    let index = element - 1

    if (counters[index] < lastMaxValue) {
      counters[index] = lastMaxValue
    }

    counters[index]++

    if (counters[index] > currentMaxValue) {
      currentMaxValue = counters[index]
    }
  }

  A.forEach((element) => {
    if (element >= maxCounterValue) {
      maxCounterOperation()
    }

    increaseOperation(element)
  })

  counters.forEach((element, index) => {
    if (element < lastMaxValue) {
      counters[index] = lastMaxValue
    }
  })

  return counters
}
