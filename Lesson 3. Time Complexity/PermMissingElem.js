function solution (A) {
  let store = new Set()

  A.forEach((element) => {
    if (element > 0) {
      store.add(element)
    }
  })

  let index = 0

  while (store.has(index + 1)) {
    index++
  }

  return index + 1
}
