import React from 'react';
import CountdownComponent from "../Component/Countdown.component";

const HomePageComponent = () => {
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
