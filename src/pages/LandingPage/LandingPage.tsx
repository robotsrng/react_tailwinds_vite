import Box from '../../atoms/Box/Box';
import Container from '../../atoms/Container/Container';
import SplashWord from './components/SplashWord/SplashWord';
import { LandingPageProps } from './types';

const LandingPage: React.FC<LandingPageProps> = ({ ...rest }) => {
  return (
    <>
      <Box className='flex-none min-h-screen justify-between items-center relative pt-40'>
        <Container>
          <Box className='flex-col md:flex-row'>
            <Box className='m-8 flex-col'>
              <div className='m-16 ml-20'>
                <h1 className='text-base'>Shane Glass</h1>
              </div>
              <div className='ml-auto mr-20'>
                <p className='line-through text-sm'>Canada</p>
                <p className='text-sm mb-2'>Australia</p>
                <p className='text-sm mb-2'>Web Developer</p>
                <p className='text-sm mb-2'>shane@shattered.dev</p>
                <p className='text-sm mb-2'>LinkedIn</p>
              </div>
            </Box>
            <Box className='m-8 p-8'>
              {['Plan', 'Code', 'Test', 'Refactor'].map((word) => (
                <SplashWord key={word} text={word} />
              ))}
            </Box>
          </Box>
        </Container>

        <div className='w-screen h-20 relative'>
          <div className='w-screen h-10 bg-black absolute bottom-0 left-0 '></div>
        </div>
      </Box>
      <Box className='flex-none  items-center relative pt-40'>
        <Container>
          <Box>
            <p className='text-sm'>
              A web developer based in the far north of Queensland, Australia. I've been working in the industry for 5 years, and have
              worked on a variety of projects, from small websites to large enterprise applications. I'm currently working at{' '}
              <a href='https://www.woolworths.com.au/'>Woolworths</a> as a Senior Frontend Developer.
            </p>
          </Box>
        </Container>
      </Box>
      <Box className='w-full m-20'>
        <Container className='w-full'>
          <Box className='display: inline-flex h-52 min-h-full w-auto bg-black'></Box>
        </Container>
      </Box>
    </>
  );
};

export default LandingPage;
