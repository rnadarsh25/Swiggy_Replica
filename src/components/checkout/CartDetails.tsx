import React from 'react';
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

function CartDetails() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12} container className={classes.root}>
        <Grid item xs={12}>
          <CardHeader
            avatar={
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/nszdiddxplz2awump76c"
                width="50"
                height="50"
              />
            }
            title="Rajhans Restaurant"
            subheader="Rewa Local"
          />
        </Grid>
        <Grid item xs={12} container>
          <Grid
            item
            xs={4}
            container
            alignItems="center"
            className={classes.itemTypo}
          >
            <Typography variant="body2" component="p" color="textPrimary">
              Chana Masala
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
              <Button>1</Button>
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
              Rs.500
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <List>
            <ListItem dense>
              <ListItemText
                primary={
                  <Typography variant="body2" component="p" color="textPrimary">
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
                <Typography variant="body2" component="p" color="textSecondary">
                  Rs. 500
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
                <Typography variant="body2" component="p" color="textSecondary">
                  Rs. 51
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
                <Typography variant="body2" component="p" color="textSecondary">
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
                  Rs. 551
                </Typography>
              </ListItemSecondaryAction>
            </ListItem>
          </List>
        </Grid>
      </Grid>
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
}

export default CartDetails;
