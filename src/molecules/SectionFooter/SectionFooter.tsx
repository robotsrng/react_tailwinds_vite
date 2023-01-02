import Button from '@molecules/Button/Button';
import { SectionFooterProps } from './types';

const SectionFooter: React.FC<SectionFooterProps> = ({ children, actions, ...rest }) => {
  return (
    <div className='flex justify-end ml-auto space-x-2' {...rest}>
      {actions.map((action) => (
        <Button {...action} />
      ))}
    </div>
  );
};

export default SectionFooter;
