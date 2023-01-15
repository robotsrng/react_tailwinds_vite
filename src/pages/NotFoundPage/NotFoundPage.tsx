import { NotFoundPageProps } from './types';
import SectionBox from '@molecules/SectionBox/SectionBox';
import { PageContent } from '@templates/index';

const NotFoundPage: React.FC<NotFoundPageProps> = ({ children }) => {
  return (
    <PageContent>
      <SectionBox title={'Oops!'}>
        <h2>This page doesn't exist!</h2>
        <br></br>
        <a href='/'>Go back to the homepage</a>
        <br></br>
        <a href='/projects'>Go back to the Projects Page</a>
      </SectionBox>
    </PageContent>
  );
};

export default NotFoundPage;
