import { mergeCrew } from '@/lib/crew'

describe('mergeCrew function', () => {
  it('should filter crew members based on age between 30 and 40', () => {
    const result = mergeCrew()
    expect(result.every((member) => member.age >= 30 && member.age <= 40)).toBe(
      true
    )
  })

  it('should handle crew members with missing or invalid fields', () => {
    const result = mergeCrew()
    const hasInvalidFields = result.some((crewMember) => {
      return (
        !crewMember.fullName ||
        !crewMember.nationality ||
        !crewMember.age ||
        !crewMember.profession
      )
    })
    expect(hasInvalidFields).toBe(false)
  })

  it('should sort crew members by full name in ascending order', () => {
    const result = mergeCrew()
    const sortedNames = result.map((crewMember) => crewMember.fullName)
    const isSorted = sortedNames.every((name, index) => {
      if (index === 0) {
        return true
      }
      return name.localeCompare(sortedNames[index - 1]) >= 0
    })
    expect(isSorted).toBe(true)
  })
})
