import React from 'react';
import UserTable from '../components/UserTable';
import DataTestTable from '../components/DataTestTable';
import './css/CoinsPage.css';

const CoinsPage = () => {
  return (
    <div className="coins-page">
      <h1 className='pageHeading'>Coins Page</h1>
      <DataTestTable />
    </div>
  );
};

export default CoinsPage;
