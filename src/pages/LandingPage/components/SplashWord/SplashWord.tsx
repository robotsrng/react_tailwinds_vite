import { SplashWordProps } from './types';

const SplashWord: React.FC<SplashWordProps> = ({ text, ...rest }) => {
  return (
    <h2
      className='text-6xl md:text-8xl font-bold '
      {...rest}
    >
      {text}
    </h2>
  );
};

export default SplashWord;
