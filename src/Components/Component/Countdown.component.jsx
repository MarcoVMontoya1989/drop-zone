import React, {useState, Fragment} from 'react';
import Countdown from 'react-countdown';

/*
* Countdown component
* 1) Apply Styles to mock up from Figma
*
* Styles:
*   Font: Rozha One
*
* Doubts:
*
* What happens if days are over 99?
* Makes no sense to separate in two containers
* So I will assume that the design/mockup will
* only handle from 0 days to 99 days and not above
* of limit. (until we can talk with UX/UI team)
* */

const CountdownComponent = () => {

  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      // An empty one because there's no mock
      return <BuyNow/>;
    } else {

      let splitDays = [...days + ''];
      let splitHours = [...hours + ''];
      let splitMins = [...minutes + ''];
      let splitSecs = [...seconds + ''];

      // console.log(splitDays.length >= 0);

      return (
        <div className="container clock-container">

          {/*TODO Separate the amount in two boxes*/}

          <div className="clock-column">
            <div className="clock-count">
              <p className="clock-day clock-timer">{splitDays[0]}</p>
              <p className="clock-day clock-timer">{splitDays[1]}</p>
            </div>
            <p className="clock-label">Days</p>
          </div>

          <div className="clock-column">
            <div className="clock-count">
              <p className="clock-hours clock-timer">{splitHours[0]}</p>
              <p className="clock-hours clock-timer">{splitHours[1]}</p>
            </div>
            <p className="clock-label">Hours</p>
          </div>

          <div className="clock-column">
            <div className="clock-count">
              <p className="clock-minutes clock-timer">{splitMins[0]}</p>
              <p className="clock-minutes clock-timer">{splitMins[1]}</p>
            </div>
            <p className="clock-label">Mins</p>
          </div>

          <div className="clock-column">
            <div className="clock-count">
              <p className="clock-seconds clock-timer">{splitSecs[0]}</p>
              <p className="clock-seconds clock-timer">{splitSecs[1]}</p>
            </div>
            <p className="clock-label">Secs</p>
          </div>
        </div>

      );
    }
  }

  const BuyNow = () => {
      return <span>Now Available!</span>
    }
  ;

  return (
    <Fragment>
      <Countdown
        date={Date.now() + 4000000}
        renderer={renderer}/>
    </Fragment>
  );
};

export default CountdownComponent;
