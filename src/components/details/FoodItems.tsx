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
import ItemCard from '../useComponents/ItemCard';

const useStyles = makeStyles(() => ({
  root: {
    marginTop: '3em',
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
  const { id, menuDetails, getMenus, orderDetails } = props;

  const [totalOrder, setTotalOrder] = useState([]);
  const [menuItems, setMenuItems] = useState([]);
  useEffect(() => {
    getMenus(id);
    setMenuItems(menuDetails);
  }, []);

  const {
    id: menuId,
    restaurantId,
    category,
    foodname,
    price,
    img,
  } = menuDetails;

  useEffect(() => {
    console.log('Inside order');
  }, []);
  const classes = useStyles();

  // const { totalOrder, setTotalOrder } = useContext<any>(FoodContext);

  let setcategories = new Set();
  menuItems.forEach((menu: any) => setcategories.add(menu.category));

  const categories: string[] = [];

  setcategories.forEach((cat: any) => categories.push(cat));

  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState(categories[0]);

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
                17 items
              </Typography>
            </Grid>
            <Grid item xs={12}>
              {menuItems.map((item: any, index: number) => (
                <ItemCard
                  key={index}
                  item={item}
                  totalOrder={totalOrder}
                  setTotalOrder={setTotalOrder}
                />
              ))}
            </Grid>
          </Grid>
        </Grid>
        {/*<ShowFoodItemsWithTab menuDetails={menuItems} />*/}
      </Grid>
      {orderDetails.length > 0 ? (
        <Grid item xs={3} container className={classes.cartGrid}>
          <Grid item xs={12}>
            <CardHeader
              title={
                <Typography variant="h5" component="h5">
                  Cart
                </Typography>
              }
              subheader={`${orderDetails.length} Item`}
            />
          </Grid>
          <Grid item xs={12} container>
            {orderDetails.map((order: any, index: number) => (
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
                    Rs.1500
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
      ) : null}
    </Grid>
  );
};

const mapStateToProps = (state: any) => ({
  menuDetails: state.data.menus,
  orderDetails: state.data.order,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    getMenus: (id: number) => dispatch({ type: 'GET_MENUS', theID: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FoodItems);
