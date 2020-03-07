export const hasKey = <O>(obj: O, key: keyof any): key is keyof O => {
  return key in obj
}

export const toUpperCaseFirstLetter = (str: string): string => `${str[0].toUpperCase()}${str.slice(1)}`
