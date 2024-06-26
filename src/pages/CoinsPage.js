import React from 'react';
import UserTable from '../components/UserTable';
import './css/CoinsPage.css';

const CoinsPage = () => {
  return (
    <div className="coins-page">
      <h1 className='pageHeading'>Coins Page</h1>
      <UserTable />
      <UserTable />
      <UserTable />
    </div>
  );
};

export default CoinsPage;
