function solution (A) {
  let positiveKeySequence = []

  A.forEach(element => {
    if (element > 0) {
      positiveKeySequence[element] = true
    }
  })

  let missingInteger = 1

  while (positiveKeySequence[missingInteger] === true) {
    missingInteger++
  }

  return missingInteger
}
