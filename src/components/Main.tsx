import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Switch, Route, Redirect } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';
import Home from './home';
import Details from './details';
import Checkout from './checkout';
import Search from './Search';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    background: 'transparent',
    width: '70%',
    position: 'absolute',
    left: '17em',
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.root}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/restaurants/:id" component={Details} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/search" component={Search} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default Main;
