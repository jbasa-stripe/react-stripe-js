import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {IssuingDisclosure} from '../../src/components/IssuingDisclosure';

import '../styles/common.css';

const onLoad = () => {
  console.log('Disclosure has loaded');
};

const onError = (error) => {
  console.log('Disclosure error:', error);
};

const App = () => {
  const stripe = loadStripe('pk_test_xxx');
  
  return (
    <>
      <IssuingDisclosure
        stripe={stripe}
        onLoad={onLoad}
        onError={onError}
        options={{
          publicCardProgramName: 'The Greatest Card Program',
          learnMoreLink: 'https://docs.stripe.com/issuing',
        }}
      />
    </>
  );
};

export default App;
