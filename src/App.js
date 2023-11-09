import { React, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import MessageList from './components/MessageList';
import { useDispatch } from 'react-redux';
import { getMessage } from './redux/messages/messageSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log('fetching')
    // console.log(message)
    dispatch(getMessage());
  },[]);
  return (
    <>
    <Routes>
      <Route path="/" element={<MessageList />} />
    </Routes>
  </>
  );
}

export default App;

