import React from 'react'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router';

function Room() {
    const {roomID} =useParams();
    let myMeeting = async(element)=>{
      const appID = 304821082; 
      const serverSecret = "45055a0b33f299008d8fad939a58c34e";

      const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"Sabin");
      const zp=ZegoUIKitPrebuilt.create(kitToken);
      zp.joinRoom({
        container:element,
        sharedLinks:[
            {
                name:'Copy Link',
                url:`http://localhost3000/room/${roomID}`
                
            },
        ],
        scenario:{
            mode:ZegoUIKitPrebuilt.OneONoneCall,
        },
        showRoomTimer:true
      })

    }
  return (
    <div ref={myMeeting}></div>
  )
}

export default Room