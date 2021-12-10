import React from 'react';
import CountdownComponent from "../Component/Countdown.component";

const HomePageComponent = () => {

  /*

  Principal Page

  1) Add Loading/Spinner to load the page to avoid FOUC
  2) Add Styles
  3) Components:
    a) Countdown Component
    b1) Top Left title
    b2) Middle Title
    b3) Bottom Title
  4) LocalStorage or UseEffect for fetching?
  */

  return (
    <div>
      <CountdownComponent />
    </div>
  );
};

export default HomePageComponent;