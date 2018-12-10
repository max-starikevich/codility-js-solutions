function solution (X, A) {
  let earliestSecondToJump = -1
  let positionSet = new Set()

  for (let position = 1; position <= X; position++) {
    positionSet.add(position)
  }

  for (let second = 0; second <= A.length; second++) {
    let position = A[second]

    positionSet.delete(position)

    if (positionSet.size === 0) {
      earliestSecondToJump = second
      break
    }
  }

  return earliestSecondToJump
}
