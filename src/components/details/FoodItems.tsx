import React, { useEffect, Fragment, createContext, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Grid,
  makeStyles,
  Typography,
  CardHeader,
  ButtonGroup,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Tabs,
  Tab,
} from '@material-ui/core';
import ShowFoodItemsWithTab from './ShowFoodItemsWithTab';
import ItemCard from './ItemCard';
import StarRateIcon from '@material-ui/icons/StarRate';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '3em',
  },
  root2: {
    background: '',
    padding: '.5em',
    marginBottom: '1em',
  },
  cartGrid: {
    height: 'min-content',
    paddingLeft: '1em',

    // border: '1px solid rgba(0,0,0,.12)',
  },
  cartTextBtn: {
    textTransform: 'capitalize',
    marginRight: '1em',
    paddingLeft: '0px',
    '&:hover': {
      background: 'transparent',
    },
  },

  cartBtn: {
    textTransform: 'capitalize',
    marginRight: '1em',
  },
  checkoutBtn: {
    marginTop: '1em',
    width: '100%',
    background: 'green',
  },

  itemTypo: {
    paddingLeft: '1em',
  },
  btnGrp: {
    margin: '0px',
    marginRight: '0px',
    height: '30px',
    padding: '0px',
  },
  payTypo: {
    fontsize: '16px',
    fontWeight: 600,
  },
  link: {
    textDecoration: 'none',
  },
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

export const FoodContext = React.createContext({});

const FoodItems: React.FC<any> = (props) => {
  const {
    menuDetails,
    orderDetails,
    orderCart,
    addOrder,
    updateOrder,
    totalCart,
  } = props;

  const classes = useStyles();
  const [totalOrder, setTotalOrder] = useState<any>([]);

  let setcategories = new Set();
  menuDetails.forEach((menu: any) => setcategories.add(menu.category));

  const categories: string[] = [];

  setcategories.forEach((cat: any) => categories.push(cat));

  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState(categories[0]);
  const [myCheck, setMyCheck] = useState<number>(0);

  let totalItems: number = 0;
  let totalCost: number = 0;
  let cartIdArr: number[] = [];
  if (orderCart.length !== 0) {
    orderCart.forEach((cart: any) => {
      cartIdArr[cart.id] = cart.count;
      totalItems = totalItems + cart.count;
      totalCost = totalCost + cart.count * cart.price;
    });
  }

  useEffect(() => {
    console.log('Updated', myCheck);
    if (myCheck !== 0) {
      updateOrder(totalItems);
    }
  }, [myCheck]);

  const handleValueChange = (e: any, newValue: number) => {
    setValue(newValue);
    setMenu(categories[newValue]);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={9} container>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <Tabs
              selectionFollowsFocus
              className={classes.tabSection}
              orientation="vertical"
              variant="standard"
              value={value}
              onChange={handleValueChange}
              scrollButtons="auto"
            >
              {categories.map((category: any, index: number) => (
                <Tab key={index} label={category} />
              ))}
            </Tabs>
          </Grid>
          <Grid item xs={8} container>
            <Grid item xs={12}>
              <Typography variant="h4" component="h4">
                {menu}
              </Typography>
              <Typography variant="body2" component="p" color="textSecondary">
                {menuDetails.length} items
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {menuDetails.map((item: any, index: number) => (
                <ItemCard
                  key={index}
                  item={item}
                  totalOrder={totalOrder}
                  setTotalOrder={setTotalOrder}
                  addOrder={addOrder}
                  myCheck={myCheck}
                  setMyCheck={setMyCheck}
                  cartIdArr={cartIdArr}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {orderCart.length > 0 && orderCart !== undefined ? (
        <Grid item xs={3} container className={classes.cartGrid}>
          <Grid item xs={12}>
            <CardHeader
              title={
                <Typography variant="h5" component="h5">
                  Cart
                </Typography>
              }
              subheader={`${totalCart} Items`}
            />
          </Grid>
          <Grid item xs={12} container>
            {orderCart.map((order: any, index: number) => (
              <Fragment key={index}>
                <Grid
                  item
                  xs={4}
                  container
                  alignItems="center"
                  className={classes.itemTypo}
                >
                  <Typography variant="body2" component="p" color="textPrimary">
                    {order.name}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  container
                  justifyContent="center"
                  alignItems="center"
                >
                  <ButtonGroup
                    className={classes.btnGrp}
                    size="small"
                    variant="outlined"
                  >
                    <Button>-</Button>
                    <Button>{order.count}</Button>
                    <Button>+</Button>
                  </ButtonGroup>
                </Grid>
                <Grid
                  item
                  xs={2}
                  container
                  justifyContent="flex-end"
                  alignItems="center"
                >
                  <Typography variant="body2" component="p" color="textPrimary">
                    Rs.{order.price * order.count}
                  </Typography>
                </Grid>
              </Fragment>
            ))}
          </Grid>
          <Grid item xs={12}>
            <List>
              <ListItem dense>
                <ListItemText
                  primary={
                    <Typography variant="body1" component="h6">
                      Subtotal
                    </Typography>
                  }
                  secondary={
                    <Typography
                      variant="body1"
                      component="p"
                      color="textSecondary"
                    >
                      Extra charges may apply
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <Typography variant="body2" component="p" color="textPrimary">
                    Rs.{totalCost}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12}>
            <Link to="/checkout" className={classes.link}>
              <Button fullWidth variant="contained" color="secondary">
                Checkout
              </Button>
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={3} className={classes.root2}>
          <Typography variant="h6" component="h6" color="textSecondary">
            Cart
          </Typography>
          <img
            src={
              'https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2'
            }
            width="200"
            height="200"
          />
          <Typography variant="body2" component="p" color="textSecondary">
            Good food is always cooking! Go ahead, order some yummy items from
            the menu.
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  orderCart: state.data.order,
  totalCart: state.data.totalCart,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    addOrder: (orderArr: any) =>
      dispatch({ type: 'ADD_ORDER', order: orderArr }),
    updateOrder: (totalOrder: number) =>
      dispatch({ type: 'UPDATE_ORDER', cart: totalOrder }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);
