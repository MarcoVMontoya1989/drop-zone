import React, {Fragment} from 'react';
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

  const pad = (n, width, z) => {
    z = z || '0';
    n = n + '';

    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  };

  const BuyNow = () => {
    return <span>Now Available!</span>
  };

  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // An empty one because there's no mock
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
        renderer={renderer}/>
    </Fragment>
  );
};

export default CountdownComponent;
