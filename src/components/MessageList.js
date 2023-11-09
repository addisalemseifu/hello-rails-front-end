import { React } from 'react';
import { useSelector } from 'react-redux';

function MessageList() {
  const { isLoading } = useSelector((store) => store.message);
  const { message } = useSelector((store) => store.message);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (!isLoading) {
    return (
      <div>
        <h1>{message.content}</h1>
      </div>
    );
  }
}

export default MessageList;
