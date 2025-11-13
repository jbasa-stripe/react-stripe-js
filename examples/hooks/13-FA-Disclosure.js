import React from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {FinancialAccountDisclosure} from '../../src/components/FinancialAccountDisclosure';

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
      <FinancialAccountDisclosure
        stripe={stripe}
        onLoad={onLoad}
        onError={onError}
        options={{
          businessName: 'Your Business Name',
          learnMoreLink: 'https://docs.stripe.com/financial-accounts/connect',
        }}
      />
    </>
  );
};

export default App;
