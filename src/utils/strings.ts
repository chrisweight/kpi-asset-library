
export function concatClassnames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}