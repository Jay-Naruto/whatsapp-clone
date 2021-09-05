
import { useEffect, useState } from 'react';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import Pusher from 'pusher-js'
import axios from './axios';
import Login from './Login';
import { useSelector } from 'react-redux';
import { selectlogin } from './redux/loginSlice';
function App() {
  const login=useSelector(selectlogin)
  const [messages,setMessages]=useState([])
  // const [user,setUser]=useState(false)
useEffect(()=>{
axios.get('/messages/sync')
.then((response)=>{
console.log(response.data)
setMessages(response.data)
})
},[])
  useEffect(()=>{
    const  pusher = new Pusher('00014c8ee6d5161aa015', {
      cluster: 'eu'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newdata) {
      // alert(JSON.stringify(newdata));
      setMessages([...messages,newdata])
    });
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
   
  },[messages])

  return (
    <div className="app">
      {
        login.logged ?
        (
          <div className="app__body">
          <Sidebar/>
          <Chat messages={messages}/>
          </div>
         
        ):
        (
          <Login/>
        )
      }
  

    </div>
  );
}

export default App;
