import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import '../components/css/dataTestTable.css';
import './css/UserTable.css';
import { fetchCoinList } from '../redux/slices/coinList';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LoginIcon from '@mui/icons-material/Login';
import Tooltip from '@mui/material/Tooltip';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';

function DataTestTable() {
    const coinList = useSelector((state) => state.coinlist.data);
    const loading = useSelector((state) => state.coinlist.isLoading);
    const error = useSelector((state) => state.coinlist.isError);   
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCoinList());
        console.log("coin state in dataTestTable: ", coinList);
      },[]);

    return (
        <div className="table-container">
            <h2 className="table-title">Coins</h2>
            <div className="user-table">
                {loading && <p>Loading...</p>}
                {error && <p>Error: {error}</p>}
                {coinList && (
                    <table>
                    <thead>
                        <tr>
                        <th>Name</th>
                        <th>Code</th>
                        <th>Status</th>
                        <th>Instrument Token</th>
                        <th>Date</th>
                        <th>Category</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {coinList.map((coin, index) => (
                        <tr key={index}>
                            <td>{coin.name}</td>
                            <td>{coin.code}</td>
                            <td>
                            <span className={`status ${coin.isActive ? 'yes' : 'no'}`}>
                                {coin.isActive ? 'Yes' : 'No'}
                            </span>
                            </td>
                            <td>{coin.instrument_token}</td>
                            <td>{coin.updatedAt}</td>
                            <td>{coin.categoryDetails[0].name}</td>
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
                )}
            </div>
        </div>
    );
}

export default DataTestTable;
