function solution (A, K) {
  if (
    !Array.isArray(A) ||
    isNaN(K) ||
    K === 0 ||
    A.length === K ||
    A.length === 0
  ) {
    return A
  }

  for (let i = 0; i < K; i++) {
    A.unshift(A.pop())
  }

  return A
}
