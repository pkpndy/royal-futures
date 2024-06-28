import React, { useEffect } from "react";
import "./css/UsersPage.css";
import CoinTable from "../components/CoinTable";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersWithCoins } from "../redux/slices/userCoins";

const UsersPage = () => {
  const usersList = useSelector((state) => state.userswithcoins.data);
  const loading = useSelector((state) => state.coinlist.isLoading);
  const error = useSelector((state) => state.coinlist.Error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsersWithCoins());
  }, [dispatch]);

  useEffect(() => {
    console.log("UsersWithCoins: ", usersList);
  }, [usersList]);

  return (
    <div className="users-page">
      <h1 className="pageHeading">Users Page</h1>
      {loading ? (
        <p>Loading...</p>
      ) : error != null ? (
        <p>Error: {error}</p>
      ) : usersList ? (
        usersList.allUsersWithCoinDetails.map((user) => (
          <CoinTable key={user._id} userdata={user} />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
};

export default UsersPage;
