import * as Icons from './iconsList' ;
import { IconList, IconProps } from './types';
import { kebabToPascalCase } from '../../utils/string-utils';

export const Icon = ({ name, iconClassName, ...rest }: IconProps) => {
  const componentName = kebabToPascalCase(name);
  const iconsList: IconList = Icons;
  const Component = iconsList[componentName];
  if (!Component) return null;

  return (
    <div {...rest}>
      <Component className={iconClassName} />
    </div>
  );
};

export default Icon;
