import React from 'react';
import './css/UserTable.css';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

const userData = [
  { email: "xyz1@gmail.com", location: "India", loggedIn: true, lastLoginAt: "2023-06-18 14:23:45", totalBot: 5, runningBot: 3, pushedBot: 2 },
  { email: "xyz2@gmail.com", location: "USA", loggedIn: false, lastLoginAt: "2023-06-17 10:15:30", totalBot: 8, runningBot: 6, pushedBot: 4 },
  { email: "xyz3@gmail.com", location: "UK", loggedIn: true, lastLoginAt: "2023-06-19 09:12:12", totalBot: 3, runningBot: 1, pushedBot: 1 },
  { email: "xyz4@gmail.com", location: "Canada", loggedIn: false, lastLoginAt: "2023-06-16 20:45:10", totalBot: 10, runningBot: 8, pushedBot: 5 },
  { email: "xyz5@gmail.com", location: "Australia", loggedIn: true, lastLoginAt: "2023-06-15 18:22:01", totalBot: 7, runningBot: 5, pushedBot: 3 },
  { email: "xyz6@gmail.com", location: "India", loggedIn: true, lastLoginAt: "2023-06-18 14:23:45", totalBot: 5, runningBot: 3, pushedBot: 2 },
  { email: "xyz7@gmail.com", location: "USA", loggedIn: false, lastLoginAt: "2023-06-17 10:15:30", totalBot: 8, runningBot: 6, pushedBot: 4 },
  { email: "xyz8@gmail.com", location: "UK", loggedIn: true, lastLoginAt: "2023-06-19 09:12:12", totalBot: 3, runningBot: 1, pushedBot: 1 },
  { email: "xyz9@gmail.com", location: "Canada", loggedIn: false, lastLoginAt: "2023-06-16 20:45:10", totalBot: 10, runningBot: 8, pushedBot: 5 },
  { email: "xyz10@gmail.com", location: "Australia", loggedIn: true, lastLoginAt: "2023-06-15 18:22:01", totalBot: 7, runningBot: 5, pushedBot: 3 },
];

function UserTable() {
  return (
    <div className="table-container">
      <h2 className="table-title">Coin1</h2>
      <div className="user-table">
        <table>
          <thead>
            <tr>
              <th>Email</th>
              <th>Location</th>
              <th>Logged In</th>
              <th>Last Login At</th>
              <th>Total Bot</th>
              <th>Running Bot</th>
              <th>Pushed Bot</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user, index) => (
              <tr key={index}>
                <td>{user.email}</td>
                <td>{user.location}</td>
                <td>
                  <span className={`status ${user.loggedIn ? 'yes' : 'no'}`}>
                    {user.loggedIn ? 'Yes' : 'No'}
                  </span>
                </td>
                <td>{user.lastLoginAt}</td>
                <td>{user.totalBot}</td>
                <td>{user.runningBot}</td>
                <td>{user.pushedBot}</td>
                <td>
                  <Tooltip title="Kite Login">
                    <LoginIcon className="action-icon" style={{ color: 'green' }} />
                  </Tooltip>
                  <Tooltip title="Bots">
                    <SmartToyIcon className="action-icon" style={{ color: 'grey' }} />
                  </Tooltip>
                  <Tooltip title="Logs">
                    <TextSnippetIcon className="action-icon" style={{ color: 'skyblue' }} />
                  </Tooltip>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserTable;
