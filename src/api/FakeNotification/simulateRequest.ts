const simulateRequest = (
  ms = 1000
) =>
  new Promise(
    (resolve) => {
      setTimeout(resolve, ms)
    }
  )

export default simulateRequest