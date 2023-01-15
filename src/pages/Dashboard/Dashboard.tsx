import { Outlet } from 'react-router-dom';

import PageLayout from '../../templates/PageLayout/PageLayout';
import Sidebar from '../../templates/Sidebar/Sidebar';

function Dashboard() {
  return (
    <div className='h-screen overflow-x-hidden flex items-center justify-center'>
      <div className='w-full h-full'>
        <PageLayout>
          <Sidebar />
            <Outlet />
        </PageLayout>
      </div>
    </div>
  );
}

export default Dashboard;
