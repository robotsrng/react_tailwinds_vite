import DialogBase from '@atoms/DialogBase/DialogBase';
import { DialogProps } from './types';
import DialogPanel from '@atoms/DialogPanel/DialogPanel';
import DialogTitle from '@atoms/DialogTitle/DialogTitle';
import DialogDescription from '@atoms/DialogDescription/DialogDescription';
import DialogHeader from '@atoms/DialogHeader/DialogHeader';
import { IconButton } from '..';
import classNames from 'classnames';
import Overlay from '@atoms/Overlay/Overlay';
import ClickAwayWrapper from 'src/utilityComponents/ClickAwayWrapper/ClickAwayWrapper';

const Dialog: React.FC<DialogProps> = ({
  title,
  description,
  content,
  isOpen = false,
  handleClose,
  children,
  className,
  ...rest
}) => {
  const classes = classNames({ hidden: !isOpen }, className);
  if (!isOpen) return null;
  return (
    <>
      <Overlay show={isOpen} />
      <ClickAwayWrapper onClickAway={handleClose}>
        <DialogBase className={classes} isOpen={isOpen} handleClose={handleClose} {...rest}>
          <DialogPanel>
            <DialogHeader>
              {title && <DialogTitle>{title}</DialogTitle>}
              <IconButton variant={'text'} name='CloseX' onClick={handleClose} className='cursor-pointer' />
            </DialogHeader>
            {description && <DialogDescription>{description}</DialogDescription>}
            {children}
          </DialogPanel>
        </DialogBase>
      </ClickAwayWrapper>
    </>
  );
};

export default Dialog;
