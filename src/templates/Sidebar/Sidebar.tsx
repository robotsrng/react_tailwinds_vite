import React, { useEffect, useState } from 'react';
import { SidebarProps } from './types';
import { AUTH_CONFIG, SIDEBAR_CONFIG } from './sidebarConfig';
import SidebarList from '../../molecules/SidebarList/SidebarList';
import SidebarToggleButton from '../../molecules/SidebarToggleButton/SidebarToggleButton';
import useAuth from '@hooks/useAuth';

const Sidebar: React.FC<SidebarProps> = ({ children, ...rest }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, logout } = useAuth();
  const sidebarClasses = `
  ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} 
  h-screen w-64 z-40 absolute bg-gray-100 shadow md:h-screen flex-col justify-between sm: transition duration-150 ease-in-out`;

  function sidebarHandler() {
    setSidebarOpen((prev) => !prev);
  }
  // TODO CLEAN UP THE DUPLICATE CODE, ICK
  const authSection = AUTH_CONFIG(!!user, logout);
  return (
    <>
      <div className={sidebarClasses} id='mobile-nav' {...rest}>
        {/* CLOSE BUTTON */}
        <SidebarToggleButton
          aria-label='toggle sidebar'
          id={sidebarOpen ? 'closeSideBar' : 'openSideBar'}
          open={sidebarOpen}
          onClick={sidebarHandler}
        />

        <div className='px-8'>
          <div className='h-16 w-full flex items-center'>
            <h1 className=''>Stuff</h1>
          </div>
          <SidebarList config={SIDEBAR_CONFIG} />
        </div>
        {children}

        {/* FOOTER */}
        <div className='px-8 border-t border-gray-700'>
          <SidebarList config={authSection} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
