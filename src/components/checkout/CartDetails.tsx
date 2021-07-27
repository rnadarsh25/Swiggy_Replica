import React from 'react';
import { connect } from 'react-redux';
import {
  Grid,
  makeStyles,
  Paper,
  Card,
  CardContent,
  CardHeader,
  List,
  ListItem,
  Typography,
  ButtonGroup,
  Button,
  ListItemText,
  ListItemSecondaryAction,
  Divider,
  CardActions,
} from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: 'white',
    padding: '.5em',
    boxShadow: '2px 2px 5px 0px rgba(0,0,0,.12)',
    marginBottom: '1em',
  },
  root2: {
    background: '',
    padding: '.5em',
    marginBottom: '1em',
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
  policyBtn: {
    background: 'transparent',
    fontsize: '14px',
    color: 'orange',
    fontWeight: 600,
    textTransform: 'capitalize',
    textDecoration: 'dashed',
    '&:hover': {
      background: 'transparent',
    },
  },
  policyGrid: {
    padding: '1em',
  },
  note: {
    color: 'red',
    fontWeight: 600,
  },
}));

const CartDetails: React.FC<any> = (props) => {
  const { theRestaurant, orderCart } = props;

  let totalCost: number = 0;
  let deliveryCharge: number = 51;

  orderCart.forEach((cart: any) => {
    totalCost = totalCost + cart.count * cart.price;
  });

  const { id, name, variety, image, ratings, timeReach } = theRestaurant;
  const classes = useStyles();
  return (
    <Grid container>
      {orderCart.length > 0 ? (
        <Grid item xs={12} container className={classes.root}>
          <Grid item xs={12}>
            <CardHeader
              avatar={<img src={image} width="50" height="50" />}
              title={name}
              subheader="Rewa Local"
            />
          </Grid>
          <Grid item xs={12} container>
            {orderCart.map((cartItem: any, index: number) => (
              <React.Fragment key={index}>
                <Grid
                  item
                  xs={4}
                  container
                  alignItems="center"
                  className={classes.itemTypo}
                >
                  <Typography variant="body2" component="p" color="textPrimary">
                    {cartItem.name}
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
                    <Button>{cartItem.count}</Button>
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
                    Rs.{cartItem.count * cartItem.price}
                  </Typography>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <Grid item xs={12}>
            <List>
              <ListItem dense>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      component="p"
                      color="textPrimary"
                    >
                      Bill Details
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem dense>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      Item Total
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    Rs. {totalCost}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <ListItem dense>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      Delivery partner fee
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    Rs. {deliveryCharge}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider />
              <ListItem dense>
                <ListItemText
                  primary={
                    <Typography
                      variant="body2"
                      component="p"
                      color="textSecondary"
                    >
                      Taxes and Charges
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                  >
                    Rs. 0
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider light />
              <ListItem dense>
                <ListItemText
                  primary={
                    <Typography className={classes.payTypo} color="textPrimary">
                      To Pay
                    </Typography>
                  }
                />
                <ListItemSecondaryAction>
                  <Typography className={classes.payTypo} color="textPrimary">
                    Rs. {totalCost + deliveryCharge}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
            </List>
          </Grid>
        </Grid>
      ) : (
        <Grid item xs={12} className={classes.root2}>
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
      <Grid item xs={12} container className={classes.root}>
        <Card variant="outlined">
          <CardHeader
            title={
              <Typography className={classes.payTypo} color="textPrimary">
                Review your order and address details to avoid cancellations
              </Typography>
            }
          />
          <CardContent>
            <Typography variant="body2" component="p" color="textPrimary">
              <span className={classes.note}>Note:</span> If you choose to
              cancel, you can do it within 60 seconds after placing order. Post
              which you will be charged 100% cancellation fee.
            </Typography>
          </CardContent>

          <CardActions>
            <Button className={classes.policyBtn}>overview</Button>
            <Button className={classes.policyBtn}>read policy</Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

const mapStatetoProps = (state: any) => ({
  theRestaurant: state.data.theRestaurant,
  orderCart: state.data.order,
});

export default connect(mapStatetoProps, null)(CartDetails);
