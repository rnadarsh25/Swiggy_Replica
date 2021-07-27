import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../api/getData';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Avatar,
  Icon,
  Tabs,
  Tab,
  TextField,
} from '@material-ui/core';
import CartDetails from './CartDetails';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#e9ecee',
    padding: '1em',
  },
  stepsGrid: {
    background: '#e9ecee',
    paddingTop: '.6em',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  loginCheckGrid: {
    background: '#fff',
    padding: '1em',
    boxShadow: '2px 2px 2px 0px rgba(0,0,0,.12)',
  },
  timeBtn: {
    margin: '0em 0em 1em 2em',
    '&:hover': {
      background: 'transparent',
    },
  },
  delBtn: {
    margin: '0em 0em 0em 2.3em',
    background: 'green',
    color: '#fff',
    width: '40%',
    '&:hover': {
      background: 'green',
    },
  },
  addressBtn: {
    margin: '0em 0em 0em 2.3em',
    border: '1px solid green',
    background: 'transparent',
    color: 'green',
    width: '40%',
    '&:hover': {
      background: 'transparent',
    },
  },
  emptyDiv: {
    padding: '1.7em',
  },
  linkBtn: {
    padding: '0px',
    margin: '0px',
    background: 'transparent',
    color: 'orange',
    fontSize: '14px',
    fontWeight: 600,
    '&:hover': {
      background: 'transparent',
    },
  },
  payCard: {
    padding: '1em',
    marginBottom: '1em',
  },
}));

const CheckLogin: React.FC<any> = (props) => {
  const { user, active, setActive, checkUser } = props;

  const [mobile, setMobile] = useState('');
  const [openLogin, setOpenLogin] = useState(false);
  const [msg, setMsg] = React.useState('');
  const [newUser, setnewUser] = useState(false);
  const [loggedUser, setLoggedUser] = useState();

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setMobile(value);
  };

  const handleLogin = () => {
    if (mobile == '' || mobile.length < 0 || mobile.length > 10) {
      setMsg('Invalid Phone Number! Try Again');
    } else {
      setMsg('');
      // alert('Logged in successfully');
      const nowUser = getUser(mobile);
      nowUser
        .then((res) => {
          if (res) {
            setLoggedUser(res);
            checkUser(res);
            setOpenLogin(!openLogin);
            setActive(active + 1);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(user);
  const classes = useStyles();
  if (user.name) {
    setActive(1);
  } else {
    setActive(0);
  }
  return (
    <Grid container className={classes.loginCheckGrid} spacing={2}>
      <Grid item xs={8} container>
        <Grid item xs={12}>
          <Typography variant="h4" component="h4">
            {' '}
            Account
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            To place your order now, log in to your existing account or sign up.
          </Typography>
        </Grid>
        <Grid item xs={12} container spacing={1}>
          {user.name ? (
            <Typography variant="h6" component="h6">
              {user.name} | {user.mobile}
            </Typography>
          ) : (
            <>
              {openLogin === false ? (
                <>
                  <Grid item xs={6}>
                    <Button
                      onClick={() => setOpenLogin(!openLogin)}
                      fullWidth
                      variant="contained"
                      color="primary"
                    >
                      Log in
                    </Button>
                  </Grid>
                  <Grid item xs={6}>
                    <Button fullWidth variant="contained" color="secondary">
                      sign up
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={12} container spacing={1}>
                    <Grid item xs={12}>
                      <Typography variant="h6" component="h6">
                        Login here
                      </Typography>
                    </Grid>
                    <Grid item xs={6} container>
                      <Grid item xs={12}>
                        <TextField
                          value={mobile}
                          onChange={handleInputChange}
                          fullWidth
                          margin="normal"
                          type="text"
                          placeholder="Enter Mobile"
                          required
                        />
                        <Button
                          onClick={handleLogin}
                          variant="contained"
                          color="secondary"
                        >
                          Login
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                </>
              )}
            </>
          )}
        </Grid>
      </Grid>
      <Grid item xs={4} container justifyContent="flex-end">
        <img
          src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
          width="150"
          height="150"
        />
      </Grid>
    </Grid>
  );
};

const CheckDelivery: React.FC<any> = (props) => {
  const { active, setActive } = props;
  const classes = useStyles();
  return (
    <Grid container className={classes.loginCheckGrid} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          {' '}
          Select delivery address
        </Typography>
        <Typography variant="body2" component="p" color="textSecondary">
          You have a saved address in this location.
        </Typography>
      </Grid>
      {active === 1 ? (
        <Grid item xs={12} container spacing={2}>
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardHeader
                avatar={
                  <Icon>
                    <HomeIcon />
                  </Icon>
                }
                title={
                  <Typography variant="h6" component="h4">
                    Home
                  </Typography>
                }
                subheader="Parshuram Nagar, Rewa, MP."
              />

              <CardContent>
                <Button
                  className={classes.timeBtn}
                  disableRipple
                  disableElevation
                >
                  37 mins
                </Button>
                <div>
                  <Button
                    onClick={() => setActive(active + 1)}
                    className={classes.delBtn}
                    variant="contained"
                    color="secondary"
                  >
                    Delivery
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card variant="outlined">
              <CardHeader
                avatar={
                  <Icon>
                    <LocationOnIcon />
                  </Icon>
                }
                title={
                  <Typography variant="h6" component="h4">
                    Add new address
                  </Typography>
                }
                subheader="Rewa, MP, India"
              />

              <CardContent>
                <div className={classes.emptyDiv}></div>
                <div>
                  <Button
                    className={classes.addressBtn}
                    variant="outlined"
                    color="secondary"
                  >
                    Add new
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

const TabPanel = (props: any) => {
  const { children, value, index } = props;
  return <div>{value === index ? children : null}</div>;
};

const CheckPayment: React.FC<any> = (props) => {
  const { setActive, active } = props;
  const [value, setValue] = useState(0);
  const handleValueChange = (e: any, newValue: number) => {
    setValue(newValue);
  };

  const wallet = [
    {
      logo: 'phonepay.png',
      name: 'PhonePe (Wallet/UPI/Card)',
    },
    {
      logo: 'paytm.png',
      name: 'Paytm',
    },
    {
      logo: 'mobiquik.png',
      name: 'MobiKwik',
    },
  ];

  const classes = useStyles();
  return (
    <Grid container className={classes.loginCheckGrid} spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          {' '}
          Choose Payment Method
        </Typography>
      </Grid>
      {active === 2 ? (
        <Grid item xs={12} container>
          <Grid item xs={3}>
            <Tabs
              value={value}
              orientation="vertical"
              onChange={handleValueChange}
            >
              <Tab label="Wallet" />
              <Tab label="Debit Card" />
            </Tabs>
          </Grid>
          <Grid item xs={9}>
            <TabPanel value={value} index={0}>
              {wallet.map((pay, index) => (
                <Card
                  onClick={() => setActive(0)}
                  variant="outlined"
                  className={classes.payCard}
                  key={index}
                >
                  <CardContent>
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <img src={pay.logo} width="100" height="30" />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography variant="h6" component="h6">
                          {pay.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={12}>
                        <Button className={classes.linkBtn}>
                          Link Account
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </TabPanel>
          </Grid>
        </Grid>
      ) : null}
    </Grid>
  );
};

const Checkout: React.FC<any> = (props) => {
  const { user, checkUser } = props;
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    <CheckLogin
      user={user}
      checkUser={checkUser}
      active={activeStep}
      setActive={setActiveStep}
    />,
    <CheckDelivery active={activeStep} setActive={setActiveStep} />,
    <CheckPayment active={activeStep} setActive={setActiveStep} />,
  ];

  return (
    <Grid container className={classes.root}>
      <Grid item xs={9}>
        <Stepper
          className={classes.stepsGrid}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((label, index) => {
            return (
              <Step key={index}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Grid>
      <Grid item xs={3}>
        <CartDetails />
      </Grid>
    </Grid>
  );
};
const mapStateToProps = (state: any) => ({
  user: state.data.user,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkUser: (loggedUser: any) =>
      dispatch({ type: 'CHECK_USER', user: loggedUser }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
