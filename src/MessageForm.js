import React, { useState } from 'react';

function MessageForm() {
  const [text, setText] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    fetch('/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text })
    })
      .then(response => response.json())
      .then(data => console.log(data));

    setText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={event => setText(event.target.value)} />
      <button type="submit">Send</button>
    </form>
  );
}

export default MessageForm;
