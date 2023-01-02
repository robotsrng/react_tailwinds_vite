import Button from '@molecules/Button/Button';
import { SectionActionsProps } from './types';

const SectionActions: React.FC<SectionActionsProps> = ({ children, actions, ...rest }) => {
  return (
    <div className='flex justify-end ml-auto space-x-2' {...rest}>
      {actions.map((action) => {
        return <Button variant={'text'} key={action.label} {...action} />;
      })}
    </div>
  );
};

export default SectionActions;
