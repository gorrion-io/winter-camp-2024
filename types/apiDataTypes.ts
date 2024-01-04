export type CrewMember = {
  fullName: string
  nationality: string
  age: number
  profession: string
}

export type JsonYamlArray = {
  firstName: string
  lastName: string
  nationality: string
  age: number
  profession: string
  name: string
  years_old: number
  occupation: string
}

export type ApiResponse = {
  pagedCrewMembers: CrewMember[]
  totalPages: number
}

export type ErrorResponse = {
  error: string
}
