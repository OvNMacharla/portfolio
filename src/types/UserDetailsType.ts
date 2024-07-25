export interface Detail {
  id: string
  value: string
  emoji: string
  source: string
}

export interface UserDetailsType {
  email: Detail
  phone: Detail
  birthday: Detail
  location: Detail
}

export interface WorkDetail {
  id: string
  title: string
  description: string
  emoji: string
}

export interface EducationDetail {
  id: string
  institution: string
  degree: string
  year: string
}

export interface ExperienceDetail {
  id: string
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}

export interface SkillsDetail {
  id: string
  skill: string
  percentage: string
}
