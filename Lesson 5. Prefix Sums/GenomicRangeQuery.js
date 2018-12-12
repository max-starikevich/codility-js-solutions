function solution (S, P, Q) {
  let impacts = []

  const dnaImpactDictionary = {
    A: 1,
    C: 2,
    G: 3,
    T: 4
  }

  const dnaLetters = Object.keys(dnaImpactDictionary)

  for (let i = 0; i < P.length; i++) {
    let sequence = S.slice(P[i], Q[i] + 1)
    let letterIndex = 0

    while (sequence.indexOf(dnaLetters[letterIndex]) === -1) {
      letterIndex++
    }

    impacts.push(dnaImpactDictionary[dnaLetters[letterIndex]])
  }

  return impacts
}
