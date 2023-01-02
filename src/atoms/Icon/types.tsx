import { FC, SVGAttributes } from 'react';

export interface IconList {
  [key: string]: FC<SVGAttributes<SVGElement>> | undefined;
}

export interface IconProps {
  name?: string;
  className?: string;
  iconClassName?: string;
}
