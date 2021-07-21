import React, { useState } from 'react';
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

function CheckLogin() {
  const classes = useStyles();
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
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="primary">
              Log in
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button fullWidth variant="contained" color="secondary">
              sign up
            </Button>
          </Grid>
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
}

function CheckDelivery() {
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
    </Grid>
  );
}

const TabPanel = (props: any) => {
  const { children, value, index } = props;
  return <div>{value === index ? children : null}</div>;
};

function CheckPayment() {
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
              <Card variant="outlined" className={classes.payCard} key={index}>
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
                      <Button className={classes.linkBtn}>Link Account</Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ))}
          </TabPanel>
        </Grid>
      </Grid>
    </Grid>
  );
}

function getSteps() {
  return [<CheckLogin />, <CheckDelivery />, <CheckPayment />];
}

function getStepContent(step: number) {
  switch (step) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

function Checkout() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Grid container className={classes.root}>
      <Grid item xs={9}>
        <Stepper
          className={classes.stepsGrid}
          activeStep={activeStep}
          orientation="vertical"
        >
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={index} {...stepProps}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Reset
              </Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.button}
                >
                  Back
                </Button>
                {isStepOptional(activeStep) && (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSkip}
                    className={classes.button}
                  >
                    Skip
                  </Button>
                )}

                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Grid>
      <Grid item xs={3}>
        <CartDetails />
      </Grid>
    </Grid>
  );
}

export default Checkout;
