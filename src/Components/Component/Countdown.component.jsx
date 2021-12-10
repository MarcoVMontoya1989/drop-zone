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

  const BuyNow = () => {
    return <span>Hello</span>
  };

  return (
    <Fragment>
      <Countdown date={Date.now() + 4000}>
        <BuyNow />
      </Countdown>
    </Fragment>
  );
};

export default CountdownComponent;