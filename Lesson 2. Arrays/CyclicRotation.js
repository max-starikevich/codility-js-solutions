function solution (A, K) {
  try {
    if (!Array.isArray(A) || isNaN(K)) {
      throw Error('bad arguments')
    }

    if (K === 0 || A.length === K || A.length === 0) {
      throw Error('no need to rotate')
    }

    for (let i = 0; i < K; i++) {
      A.unshift(A.pop())
    }

    return A
  }
  catch (e) {
    return A
  }
}
