var n = x[1] - x[0]
for (var i = 2; i < x.length; i++) {
  if (x[i - 1] + n !== x[i]) return false
}

return true