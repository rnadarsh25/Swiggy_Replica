import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainInfo from './MainInfo';
import FoodItems from './FoodItems';

type TParams = {
  id: string;
};

function Details({ match }: RouteComponentProps<TParams>) {
  const id = parseInt(match.params.id, 10);
  return (
    <div>
      <MainInfo id={id} />
      <FoodItems id={id} />
    </div>
  );
}

export default Details;
