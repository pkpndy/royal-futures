import React, { useEffect } from 'react';
import './css/BotsPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement } from '../redux/slices/counter/index';
import {fetchTodos} from '../redux/slices/fetchTodos/index';
import { fetchCoinList } from '../redux/slices/coinList';


const BotsPage = () => {
  const userCounter = useSelector((state) => state.counter.count);
  const todos = useSelector((state) => state.todo)
  const coinList = useSelector((state) => state.coinlist)
  const dispatch = useDispatch();

  // console.log("coinList")
  // console.log(coinList)

  useEffect(() => {
    console.log("coin state: ", coinList);
    console.log("todos: ", todos)
  },[coinList, todos]);

  return (
    <div className="bots-page">
      Bots Page
      <div>Counter: {userCounter}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <hr />
      <button onClick={(e) => dispatch(fetchTodos())}>FetchTodos</button>
      <hr />
      <button onClick={(e) => dispatch(fetchCoinList())}>fetchCoinList</button>
      <hr />
      


    </div>
  );
};

export default BotsPage;
