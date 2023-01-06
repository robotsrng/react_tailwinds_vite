import { BaseButtonProps } from '../../atoms/BaseButton/types';
import { ColorVariants } from '../../utils/types/ui.types';

export interface ButtonProps extends BaseButtonProps {
  label?: string;
  variant?: ColorVariants;
  startIcon?: string;
  endIcon?: string;
  loading?: boolean;
  success?: boolean;
}
