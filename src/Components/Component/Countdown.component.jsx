import React, {useState, Fragment} from 'react';
import Countdown from 'react-countdown';

/*
* Countdown component
* 1) Apply Styles to mock up from Figma
*
* Styles:
*   Font: Rozha One
*
* */

const CountdownComponent = () => {

  // const [hello, setHello] = useState('Hello World!');

  const renderer = ({days,hours, minutes, seconds, completed}) => {
    if (completed) {
      // Render a completed state
      return <BuyNow/>;
    } else {
      // Render a countdown
      return (

        // <span className={'clock'}>
        // <h1>{hours}</h1> : <h2>{minutes}</h2>: <h3>{seconds}</h3>
        // </span>

        // <div className="clock-input">
        //   <input type="date" name="time-to" className="time-to" id="time-to" value="" onChange="calcTime(this.value)">
        // </div>
      <div className="container clock-container">
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
          <p className="clock-label">Minutes</p>
        </div>

        <div className="clock-column">
          <p className="clock-seconds clock-timer">{seconds}</p>
          <p className="clock-label">Seconds</p>
        </div>
      </div>

    );
    }
    }

    const BuyNow = () =>
      {
        return <span>Hello</span>
      }
    ;

    return (
      <Fragment>
        <Countdown
          date={Date.now() + 400000000}
          renderer={renderer}
        >
        </Countdown>
      </Fragment>
    );
    };

    export default CountdownComponent;
