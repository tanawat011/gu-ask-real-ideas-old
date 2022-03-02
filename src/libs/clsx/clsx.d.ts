/* eslint-disable @typescript-eslint/no-explicit-any */
export type ClassValue =
  | ClassArray
  | ClassDictionary
  | string
  | number
  | null
  | boolean
  | undefined

export interface ClassDictionary {
  [id: string]: any
}

export type ClassArray = Array<ClassValue>

declare const clsx: (...classes: ClassValue[]) => string

export default clsx
