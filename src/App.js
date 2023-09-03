import React, { useEffect } from 'react';
import { useState } from 'react';
// import { getDatabase, push, ref, set, onChildAdded } from "firebase/database";

import './App.css';

function App() {
  
    const [name, setName] = useState('');
    const [chats, setChats] = useState([]);
    const [msg,setMsg] = useState('');

    // const db = getDatabase();
    // const chatListRef = ref(db, 'posts');
    // useEffect(()=>{
    //   onChildAdded(chatListRef, (data) => {
    //     console.log(data.val());
    //   });
      
    // },[])

    const sendChat = ()=>{

      // const chatListRef = ref(db, 'posts');
      // const chatRef = push(chatListRef);
      // set(chatRef, {
      //   name, message:msg
      // });
      const c = [...chats];
      c.push({name, message:msg})
      setChats(c);
      setMsg('')

    }
    return (
      <div>
        {name? null:<div>
          <input type="text" placeholder="Enter name"
          onBlur={e=>setName(e.target.value)}></input>
        </div>}
        { name? <div>
        <h1>User: {name}</h1>
        <div className="chat-container">
        {chats.map(c=><div className={`container ${c.name===name ? 'me' : ''}`}>
        <p className="chatbox">
          <strong>{c.name}:</strong>
          <span>{c.message}</span>
        </p>
        </div>)}
        </div>
        <div className="btm"> 
          <input type="text" onInput={e=>setMsg(e.target.value)} 
          placeholder="enter your message" value={msg}></input>
          <button onClick={e=>sendChat()}>Send</button>
        </div>
        </div> : null}
        

      </div>
      
    );
  
}

export default App;
