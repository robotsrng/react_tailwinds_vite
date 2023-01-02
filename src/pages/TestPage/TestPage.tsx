import { Box } from '@atoms';
import { useQuery } from '@tanstack/react-query';
import { TestPageProps } from './types';
import SectionBox from '@molecules/SectionBox/SectionBox';

const TestPage: React.FC<TestPageProps> = ({ children, ...rest }) => {

  return (
    <Box className='px-4 md:px-0 pt-40 flex-none min-h-screen w-full justify-between items-center relative'>
    <SectionBox title="Test Page" >test</SectionBox>
      </Box>
  );
};

export default TestPage;
