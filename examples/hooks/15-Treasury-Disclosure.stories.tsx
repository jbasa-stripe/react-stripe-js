import type {StripeError} from '@stripe/stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import type {Meta, StoryObj} from '@storybook/react';

import {defaultParameter} from '../../.storybook/constants';
import {TreasuryDisclosure} from '../../src/components/TreasuryDisclosure';

import '../styles/common.css';

const stripePromise = loadStripe('pk_live_xxx');

const onLoad = () => {
  console.log('Disclosure has loaded');
};

const onError = (error: StripeError) => {
  console.log('Disclosure error:', error);
};

const TreasuryDisclosureExample = () => (
  <TreasuryDisclosure
    stripe={stripePromise}
    onLoad={onLoad}
    onError={onError}
    options={{
      businessName: 'Your Business Name',
      learnMoreLink: 'https://docs.stripe.com/financial-accounts/connect',
    }}
  />
);

const meta: Meta<typeof TreasuryDisclosureExample> = {
  title: 'react-stripe-js/Hooks/Treasury Disclosure',
  component: TreasuryDisclosureExample,
  parameters: defaultParameter,
};

export default meta;

type Story = StoryObj<typeof TreasuryDisclosureExample>;

export const Default: Story = {};
