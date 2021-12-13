import React, {Fragment} from 'react';
import Countdown from 'react-countdown';
import pad from "../Utils/arrayPad";

const CountdownComponent = () => {

  const BuyNow = () => {
    return <span className='title'>Now Available!</span>
  };

  const timerContent = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      return <BuyNow/>;
    } else {

      let splitDays = [...pad(days, 2) + ''];
      let splitHours = [...pad(hours, 2) + ''];
      let splitMins = [...pad(minutes, 2) + ''];
      let splitSecs = [...pad(seconds, 2) + ''];

      return (
        <div className="container clock-container">
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
  };

  return (
    <Fragment>
      <Countdown
        date={Date.now() + 1152725000}
        renderer={timerContent}/>
    </Fragment>
  );
};

export default CountdownComponent;
