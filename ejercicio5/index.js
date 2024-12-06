function organizeShoes(shoes) {
  const result = []
  const checked = []

  const sel = { I: 0, R: 1 }
  const inv = { I: 1, R: 0 }

  for (const { type, size } of shoes) {
    if (checked[size * 2 + inv[type]]) {
      checked[size * 2 + inv[type]]--
      result.push(size)
    } else {
      checked[size * 2 + sel[type]] ??= 0
      checked[size * 2 + sel[type]] += 1
    }
  }

  return result
}
