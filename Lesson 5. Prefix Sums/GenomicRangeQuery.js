function solution (S, P, Q) {
  const dnaImpactDictionary = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  }

  const dnaLettersSorted = []

  Object.entries(dnaImpactDictionary).forEach(([letter, impact]) => {
    dnaLettersSorted[impact] = letter
  })

  dnaLettersSorted.sort()

  return P.map((start, index) => {
    let end = Q[index]
    let sequence = S.slice(start, end + 1)

    let letterIndex = 0

    while (sequence.indexOf(dnaLettersSorted[letterIndex]) === -1) {
      letterIndex++
    }

    return dnaImpactDictionary[dnaLettersSorted[letterIndex]]
  })
}
