import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import MainInfo from './MainInfo';
import FoodItems from './FoodItems';
import { connect } from 'react-redux';

// type TParams = {
//   id: string;
// };

// {{ match }: RouteComponentProps<TParams>}

const Details: React.FC<any> = (props) => {
  const { getRestaurantWithId, getMenus, menus, restaurant, orderDetails } =
    props;
  const addr = window.location.pathname.split('/');

  const id = parseInt(addr[2], 10);

  useEffect(() => {
    getRestaurantWithId(id);
    getMenus(id);
  }, []);

  return (
    <div>
      <MainInfo theRestaurant={restaurant} />
      <FoodItems menuDetails={menus} orderDetails={orderDetails} />
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  menus: state.data.menus,
  restaurant: state.data.theRestaurant,
  orderDetails: state.data.order,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getRestaurantWithId: (id: number) =>
      dispatch({ type: 'GET_RESTAURANT', theID: id }),
    getMenus: (id: number) => dispatch({ type: 'GET_MENUS', theID: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);
