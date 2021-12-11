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
    <div className='container has-text-centered'>
      <div className="columns is-vcentered">
        <div className="column is-5" />
        <div className="column is-6 is-offset-1">
          <h1 id='title-roboto' className="title is-2">
            LEEZY BOOST 103
          </h1>
          <CountdownComponent />
          <p id='bottom-title-roboto'>UNTIL DROP</p>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
