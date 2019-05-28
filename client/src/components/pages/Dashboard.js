import React from 'react';
//import ReactPlayer from 'react-player';
import bentoverrow from '../../videos/bentoverRow.mp4';
const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to users dashboard</h1>
      <video src={bentoverrow}
      autoPlay
      loop
      muted
      ></video>
    </div>
  );
};

export default Dashboard;
