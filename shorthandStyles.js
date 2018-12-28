const shorthandStyles = (margin, padding) => Object.assign(
  getSpacing('margin', margin),
  getSpacing('padding', padding)
)

const parseSpacing(spacing) {
  if (typeof spacing === "string") {
    let spacingArray = String.split(spacing, ' ')
    spacingArray.map(s => Number.parseInt(s))
    return spacingArray
  }
  return spacing

function getSpacing(type, _spacing) {
  const s = {}
  const spacing = parseSpacing(_spacing)
  if (typeof spacing === "number") { s[type] = spacing }
  else if (Array.isArray(spacing)){
      switch (spacing.length) {
          case 1:
              s[`${type}Vertical`] = spacing[0]
              break
          case 2:
              s[`${type}Vertical`] = spacing[0]
              s[`${type}Horizontal`] = spacing[1]
              break
          case 3:
              s[`${type}Top`] = spacing[0]
              s[`${type}Horizontal`] = spacing[1]
              s[`${type}Bottom`] = spacing[2]
              break
          case 4:
              s[`${type}Top`] = spacing[0]
              s[`${type}Right`] = spacing[1]
              s[`${type}Bottom`] = spacing[2]
              s[`${type}Left`] = spacing[3]
              break
          default:
            break
      }
  }

  return s
}

export default shorthandStyles
