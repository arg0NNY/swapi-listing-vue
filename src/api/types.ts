
export interface SwapiPaginate<T> {
  count: number,
  next: string | null,
  previous: string | null,
  results: T[]
}

export interface SwapiPeople {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  url: string
}
