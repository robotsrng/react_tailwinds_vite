import * as Icons from '../../atoms/Icon/iconsList';

import type {
  TControlType,
  TOptions,
  IArgsTypesControlModel,
  TControl,
  TArgsTypesControlModelProps,
  TProp,
} from './types';

const colorVariants = [
  'primary',
  'primaryLight',
  'secondary',
  'secondaryLight',
  'error',
  'errorLight',
  'warning',
  'warningLight',
  'info',
  'infoLight',
  'success',
  'successLight',
];

const wizardColors = ['primary', 'secondary', 'success', 'error', 'info', 'warning'];
const wizardSizes = ['small', 'medium', 'large'];

const orientation = ['horizontal', 'vertical'];

export const placementVariants = [
  'auto',
  'auto-start',
  'auto-end',
  'top',
  'bottom',
  'right',
  'left',
  'auto',
  'top-start',
  'top-end',
  'bottom-start',
  'bottom-end',
  'right-start',
  'right-end',
  'left-start',
  'left-end',
];

const icons = ['No icon', ...Object.keys(Icons)];

class ArgsTypesControlModel {
  private control: TControl;

  constructor(props: IArgsTypesControlModel) {
    const { type, params, ...rest } = props;
    this.control = type ? { type, ...params } : false;
    this.setProps(rest);
  }

  setProps = (props: TArgsTypesControlModelProps) => {
    Object.entries(props).forEach(([key, value]: TProp<TArgsTypesControlModelProps>) => {
      // TODO Fix types
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this[key] = value;
    });
  };
}

export const storybookControlTypes = {
  color: new ArgsTypesControlModel({ type: 'select', options: colorVariants }),
  wizardColor: new ArgsTypesControlModel({ type: 'select', options: wizardColors }),
  wizardSize: new ArgsTypesControlModel({ type: 'select', options: wizardSizes }),
  iconName: new ArgsTypesControlModel({ type: 'select', options: icons }),
  boolean: new ArgsTypesControlModel({ type: 'boolean' }),
  text: new ArgsTypesControlModel({ type: 'text' }),
  number: new ArgsTypesControlModel({ type: 'number' }),
  func: (action: string) => new ArgsTypesControlModel({ type: false, action }),
  date: new ArgsTypesControlModel({ type: 'date' }),
  noControl: new ArgsTypesControlModel({ type: false }),
  select: (options: TOptions,  type?: TControlType) =>
    new ArgsTypesControlModel({
      options,
      type: type || 'select',
    }),
  range: (min: number, max: number) => new ArgsTypesControlModel({ type: 'range', params: { min, max } }),
  orientation: new ArgsTypesControlModel({ type: 'radio', options: orientation })
};
