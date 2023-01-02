import { IconProps } from '@atoms/Icon/types';
import { ButtonProps } from '@molecules/Button/types';

export interface IconButtonProps extends Partial<ButtonProps> {
  name: string;
  className?: string;
  iconProps?: IconProps;
}
