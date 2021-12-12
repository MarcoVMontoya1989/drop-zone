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

  // const [hello, setHello] = useState('Hello World!');

  const renderer = ({days, hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return <BuyNow/>;
    } else {
      // Render a countdown
      // console.log(typeof days); //TODO Styles to separate in two boxes

      return (
        <div className="container clock-container">

          {/*TODO Separate the amount in two boxes*/}

          <div className="clock-column">
            <p className="clock-day clock-timer">{days}</p>
            <p className="clock-label">Days</p>
          </div>

          <div className="clock-column">
            <p className="clock-hours clock-timer">{hours}</p>
            <p className="clock-label">Hours</p>
          </div>

          <div className="clock-column">
            <p className="clock-minutes clock-timer">{minutes}</p>
            <p className="clock-label">Mins</p>
          </div>

          <div className="clock-column">
            <p className="clock-seconds clock-timer">{seconds}</p>
            <p className="clock-label">Secs</p>
          </div>
        </div>

      );
    }
  }

  const BuyNow = () => {
      return <span>Hello</span>
    }
  ;

  return (
    <Fragment>
      <Countdown
        date={Date.now() + 4000000000}
        renderer={renderer}
      >
      </Countdown>
    </Fragment>
  );
};

export default CountdownComponent;
