import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainInfo from './MainInfo';
import FoodItems from './FoodItems';

type TParams = {
  id: string;
};

function Details({ match }: RouteComponentProps<TParams>) {
  console.log(parseInt(match.params.id, 10));
  return (
    <div>
      <MainInfo />
      <FoodItems />
    </div>
  );
}

export default Details;
