import React, { useState } from 'react'
import './App.css';
import { useNavigate } from 'react-router';
function Home() {
    const [roomID,setRoomID]=useState();
    const navigate=useNavigate();
    const handleJoin=  ()=>{
        navigate(`/room/${roomID}`)
    }
  return (
    <div className='App'>
        <input
        type='text'
        placeholder='Enter Room ID'
    	value={roomID}
        onChange={(e)=>{
            setRoomID(e.target.value)
        }}
        />
        <button onClick={handleJoin}>Join Meetimg</button>
    </div>
  )
}

export default Home