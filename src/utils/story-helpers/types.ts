import { ReactElement } from 'react'

export type TStoryControls<T> = Partial<keyof T>[]

export type TControlType =
  | 'select'
  | 'boolean'
  | 'text'
  | 'number'
  | 'date'
  | 'inline-check'
  | 'inline-radio'
  | 'radio'
  | 'range'
  | false
  
export type TControl = { type: TControlType } | false
export type TOptions = (string | number)[]
export interface IArgsTypesControlModel {
  type: TControlType
  options?: TOptions
  action?: string
  params?: { [key: string]: unknown }
}
export type TArgsTypesControlModelProps = Omit<IArgsTypesControlModel, 'type'>
export type TProp<T> = [key: string, value: T[keyof T]]
export type TColorComponent = { [key: string]: ReactElement }
export type TStoryParametersControlType = 'include' | 'exclude'
