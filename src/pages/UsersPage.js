import React, { useEffect } from 'react';
import './css/UsersPage.css';
import CoinTable from '../components/CoinTable';

const UsersPage = () => {
  return (
    <div className="users-page">
      <h1 className='pageHeading'>Users Page</h1>
      <CoinTable/>
      <CoinTable />
      <CoinTable />
      <CoinTable />
    </div>
  );
};

export default UsersPage;
