import React from 'react';
import { useParams } from 'react-router-dom';
import PlaceOrder from '../PlaceOrder';

const PlaceOrderWrapper = () => {
  const { id } = useParams();
  return <PlaceOrder id={id} />;
};

export default PlaceOrderWrapper;
