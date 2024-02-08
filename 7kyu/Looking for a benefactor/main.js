function newAvg(arr, newavg) {
    if (arr.length == 0) { return newavg}
    const error = "Expected New Average is too low"
    const sum = arr.reduce((a,b) => a + b)
    const average = sum / arr.length
    const desiredSum = (arr.length + 1) * newavg
    if (average < newavg) {
        return Math.ceil(desiredSum - sum)
    } else {
        throw new Error(error)
    }
}