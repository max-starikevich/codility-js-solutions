function solution(A) {
  let candidates = new Set()

  A.forEach(element => {
    if(!candidates.has(element)) {
      candidates.add(element)
    } else {
      candidates.delete(element)
    }
  })

  return candidates.values().next().value
}
