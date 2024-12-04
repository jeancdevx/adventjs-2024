function createXmasTree(height, ornament) {
  let tree = ''

  for (let i = 1; i <= height; i++) {
    tree +=
      '_'.repeat(height - i) +
      ornament.repeat(2 * i - 1) +
      '_'.repeat(height - i) +
      '\n'
  }

  tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1) + '\n'
  tree += '_'.repeat(height - 1) + '#' + '_'.repeat(height - 1)

  return tree
}
