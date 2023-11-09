import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMessage } from '../redux/messages/messageSlice';

function MessageList() {
  const [messages, setMessages] = useState('10:00');
  const { isLoading } = useSelector((store) => store.message);
  const { message } = useSelector((store) => store.message);




  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }
  // function messageDispatcher() {
  //   const reservation = {
  //     location,
  //     time,
  //     date,
  //     docId,
  //   };
  //   setPending('...Reserving');
  //   setTimeout(() => {
  //     dispatch(postData(reservation));
  //     setPending('Add Book');
  //   }, 1000);
  // }

  // useEffect(() => {
  //   fetch('/messages')
  //     .then(response => response.json())
  //     .then(data => setMessages(data));
  // }, []);
if(!isLoading){
  return (
    <div>
    <h1>{message.content}</h1>
  </div>
    // <div>
    //   <h1>Messages</h1>
    //   <ul>
    //     {messages.map(message => (
    //       <li key={message.id}>{message.text}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

}

export default MessageList;

