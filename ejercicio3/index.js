function organizeInventory(inventory) {
  const organized = {}

  for (const { name, category, quantity } of inventory) {
    if (!organized[category]) organized[category] = {}

    if (!organized[category][name]) organized[category][name] = 0

    organized[category][name] += quantity
  }

  return organized
}
