import classNames from 'classnames';
import BaseButton from '../../atoms/BaseButton/BaseButton';
import { ButtonProps } from './types';
import { getType } from './helpers';
import { Icon } from '@atoms';
import { useState } from 'react';
import { useEffect } from 'react';
import { Transition } from '@headlessui/react';

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  startIcon,
  endIcon,
  label,
  onClick,
  loading = false,
  success = false,
  className,
  ...rest
}) => {
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (success !== showSuccess) {
      setShowSuccess(success);
      if (success)
        setTimeout(() => {
          setShowSuccess(false);
        }, 2500);
    }
  }, [success]);

  const classes = classNames('relative', getType(variant), className);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  // TODO proper transition component and think of something to do with the start / end icons
  //  Allow custom props? Figure out how to reflect the buttons text color?
  return (
    <BaseButton className={classes} onClick={handleClick} {...rest}>
      <Transition
        show={showSuccess}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Icon
          name='Check'
          className='mr-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          iconClassName='text-current'
          data-testid='button-success-icon'
        />
      </Transition>
      <Transition
        show={!showSuccess && loading}
        enter='transition-opacity duration-75'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='transition-opacity duration-150'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
      >
        <Icon
          name='Spinner'
          className='mr-2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
          iconClassName='animate-spin text-current'
          data-testid='button-loading-icon'
        />
      </Transition>
      <span className={`flex items-center ${showSuccess || loading ? 'invisible opacity-0' : 'opacity-100'} easing  `}>
        {startIcon && (
          <Icon name={startIcon} className='mr-2' iconClassName=' text-current ' data-testid='button-start-icon' />
        )}
        {label}
        {endIcon && <Icon name={endIcon} className='ml-2' iconClassName='text-current' data-testid='button-end-icon' />}
      </span>
      {children}
    </BaseButton>
  );
};

export default Button;
