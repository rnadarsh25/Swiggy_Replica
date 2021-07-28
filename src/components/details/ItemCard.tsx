import React, { useState, useEffect, useContext } from 'react';
import { connect } from 'react-redux';

import {
  Grid,
  Paper,
  makeStyles,
  Tabs,
  Typography,
  Button,
  Tab,
  ButtonGroup,
} from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import { FoodContext } from './FoodItems';

const useStyles = makeStyles(() => ({
  tabSection: {
    // float: 'right',
  },
  cardRoot: {
    borderBottom: '1px solid rgba(0,0,0,.12)',
    marginTop: '1em',
    padding: '7px',
  },
  infoGrid: {
    height: 'min-content',
  },
  itemBtn: {
    padding: '5px',
    fontSize: '20px',
    textTransform: 'capitalize',
    background: 'transparent',
    '&:hover': {
      background: 'transparent',
    },
  },
  addBtnGrid: {
    position: 'relative',
    top: '-1.5em',
  },
  addBtn: {
    background: '',
  },
  rateBtn: {
    background: 'transparent',
    color: 'orange',
    fontWeight: 400,
    fontsize: '10px !important',
    textDecoration: 'capitalize',
    '&:hover': {
      background: 'transparent',
    },
  },
}));

const ItemCard: React.FC<any> = (props) => {
  const {
    item,
    totalOrder,
    setTotalOrder,
    addOrder,
    myCheck,
    setMyCheck,
    cartIdArr,
  } = props;
  const { id, restaurantId, category, foodname, price, img } = item;
  const classes = useStyles();
  const [orderCount, setOrderCount] = useState(0);

  useEffect(() => {
    setOrderCount(cartIdArr[id] ? cartIdArr[id] : 0);
  }, [item]);

  const handleAddBtn = () => {
    setOrderCount(orderCount + 1);
  };

  const handleSubBtn = () => {
    setOrderCount(orderCount - 1);
  };

  useEffect(() => {
    if (orderCount !== 0) {
      let getOrder: any[] = totalOrder;

      let foodArr = {
        id: id,
        name: foodname,
        price: price,
        count: orderCount,
      };

      getOrder[id] = foodArr;
      setTotalOrder(getOrder);
      addOrder(totalOrder);

      setMyCheck(myCheck + 1);
    }
  }, [orderCount]);

  return (
    <Grid container className={classes.cardRoot}>
      <Grid item xs={9} container className={classes.infoGrid}>
        <Grid item xs={12}>
          <Button
            disableRipple
            size="small"
            startIcon={<StarRateIcon />}
            className={classes.rateBtn}
          >
            Must try
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button disableRipple size="large" className={classes.itemBtn}>
            {foodname}
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button disableRipple size="small">
            Rs. {price}
          </Button>
        </Grid>
      </Grid>
      <Grid item xs={3} container>
        <Grid item xs={12}>
          <img src={img} width="100%" height="120" />
        </Grid>
        <Grid
          item
          xs={12}
          container
          justifyContent="center"
          className={classes.addBtnGrid}
        >
          {orderCount === 0 ? (
            <Button
              onClick={handleAddBtn}
              variant="contained"
              color="secondary"
            >
              Add
            </Button>
          ) : (
            <ButtonGroup variant="contained" size="small" color="secondary">
              <Button onClick={handleSubBtn}>-</Button>
              <Button>{orderCount}</Button>
              <Button onClick={handleAddBtn}>+</Button>
            </ButtonGroup>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ItemCard;
