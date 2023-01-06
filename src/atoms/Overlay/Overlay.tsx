import classNames from 'classnames';
import { OverlayProps } from './types';

const Overlay: React.FC<OverlayProps> = ({ className, show = false, ...rest }) => {

  const classes = classNames({ hidden: !show }, className);
  
  return (
    <div
      className={`fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-screen w-screen ${classes}`}
      {...rest}
    ></div>
  );
};

export default Overlay;
