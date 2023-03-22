export function SearchByName(name?: string) {
  let formatString = name?.replaceAll(" ", "_")

  return formatString
}