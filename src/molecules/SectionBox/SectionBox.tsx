import { SectionBoxProps } from './types';
import SectionHeader from '@atoms/SectionHeader/SectionHeader';
import SectionBase from '@atoms/SectionBase/SectionBase';
import SectionTitle from '@atoms/SectionTitle/SectionTitle';
import SectionActions from '@molecules/SectionActions/SectionActions';
import SectionContent from '@atoms/SectionContent/SectionContent';
import SectionFooter from '@molecules/SectionFooter/SectionFooter';

const SectionBox: React.FC<SectionBoxProps> = ({ children, title, actions, footerActions, className, ...rest }) => {
  return (
    <SectionBase className={className} {...rest}>
      <SectionHeader>
        <SectionTitle>{title}</SectionTitle>
        {actions && <SectionActions actions={actions} />}
      </SectionHeader>
      <SectionContent>{children}</SectionContent>
      {footerActions && <SectionFooter actions={footerActions} />}
    </SectionBase>
  );
};

export default SectionBox;
