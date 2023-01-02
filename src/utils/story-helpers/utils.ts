import { TOptions, TStoryParametersControlType } from './types'

export const getStoryParameters = (
  options?: TOptions,
  hasActions = false,
  argTypesRegex = '^on.*',
  type: TStoryParametersControlType = 'include'
) => ({
  ...(hasActions && {
    actions: { argTypesRegex },
  }),
  ...(options && {
    controls: { [type]: options },
  }),
})
