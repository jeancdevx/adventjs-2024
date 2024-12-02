function createFrame(names) {
  const maxLength = Math.max(...names.map(({ length }) => length))
  const frameWidth = maxLength + 4
  const frame = []

  frame.push('*'.repeat(frameWidth))

  names.forEach((name) => {
    const spaces = ' '.repeat(maxLength - name.length)

    frame.push(`* ${name}${spaces} *`)
  })

  frame.push('*'.repeat(frameWidth))

  return frame.join('\n')
}
