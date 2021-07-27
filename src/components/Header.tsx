import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser, newRegistration } from '../api/getData';
import firebase from '../firebase';
import {
  Grid,
  Paper,
  makeStyles,
  Typography,
  Button,
  Drawer,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  TextField,
  Popper,
  Fade,
  List,
  ListItem,
  ListItemAvatar,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import PersonIcon from '@material-ui/icons/Person';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const useStyles = makeStyles(() => ({
  mainPaper: {
    padding: '.5em 0em .5em 1em',
  },
  menuButton: {
    marginTop: '.7em',
    '&:hover': {
      background: 'transparent',
      color: 'orange',
      fontWeight: 600,
    },
  },
  locTypo: {
    fontsize: '18px',
  },
  link: {
    textDecoration: 'none',
  },
  drawer: {
    width: '200px',
  },
  cardRoot: {
    maxWidth: '345',
  },
  loginBtn: {
    background: 'orange',
    color: 'white',
    fontSize: '14px',
    fontWeight: 600,
    '&:hover': {
      background: 'orange',
    },
  },
}));

interface Menu {
  name: string;
  icon: any;
  route: string;
}

const allmenu: Menu[] = [
  {
    name: 'search',
    icon: <SearchIcon />,
    route: '/search',
  },
  {
    name: 'help',
    icon: <HelpOutlineIcon />,
    route: '/help',
  },
  {
    name: 'sign in',
    icon: <PersonOutlineIcon />,
    route: '',
  },
  {
    name: 'cart',
    icon: <AddShoppingCartIcon />,
    route: '/checkout',
  },
];

const Header: React.FC<any> = (props) => {
  const { user, checkUser, userDetails, addNewUser, logout } = props;
  const classes = useStyles();
  const [state, setState] = React.useState(false);
  const [userPhone, setUserPhone] = React.useState('');
  const [msg, setMsg] = React.useState('');
  const [newUser, setnewUser] = useState(false);
  const [loggedUser, setLoggedUser] = useState(userDetails);
  const [showLogOptions, setShowLogOptions] = useState(false);

  useEffect(() => {
    if (userDetails.name) {
      setLoggedUser(userDetails);
      setShowLogOptions(true);
    } else {
      setLoggedUser(userDetails);
      setShowLogOptions(false);
    }
  }, [userDetails]);

  const [newRegister, setNewRegister] = useState({
    registerName: '',
    registerEmail: '',
    registerMobile: '',
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setNewRegister({
      ...newRegister,
      [name]: value,
    });
  };

  const handlePhoneChange = (e: any) => {
    setUserPhone(e.target.value);
  };

  const handleLogin = () => {
    if (userPhone == '' || userPhone.length < 0 || userPhone.length > 10) {
      setMsg('Invalid Phone Number! Try Again');
    } else {
      setMsg('');
      // alert('Logged in successfully');
      const nowUser = getUser(userPhone);
      nowUser
        .then((res) => {
          if (res) {
            setLoggedUser(res);
            checkUser(res);
            setState(false);
            setShowLogOptions(!showLogOptions);
          } else {
            setnewUser(true);
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const toggleDrawer = () => {
    setState(!state);
    setnewUser(false);
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    const newUserData = {
      name: newRegister.registerName,
      email: newRegister.registerEmail,
      mobile: newRegister.registerMobile,
      id: uuidv4(),
    };

    addNewUser(newUserData);
    setNewRegister({
      registerEmail: '',
      registerMobile: '',
      registerName: '',
    });
    setState(!state);
    setnewUser(false);
  };

  const handleLogOut = () => {
    logout();
    setShowLogOptions(!showLogOptions);
    setLoggedUser({});
    setState(!state);
  };

  return (
    <div className={classes.mainPaper}>
      <Grid container>
        <Grid item xs={1}>
          <Link to="/">
            <img src="./logo.png" width="40px" height="50px" />
          </Link>
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.menuButton} endIcon={<ExpandMoreIcon />}>
            Rewa Madhya Pradesh, India
          </Button>
        </Grid>
        <Grid item xs={7} container justifyContent="flex-end">
          {allmenu.map((menu, index) => (
            <Grid item xs={2} key={index}>
              {menu.name !== 'sign in' ? (
                <Link to={menu.route} className={classes.link}>
                  <Button startIcon={menu.icon} className={classes.menuButton}>
                    {menu.name}
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={toggleDrawer}
                  startIcon={menu.icon}
                  className={classes.menuButton}
                >
                  {loggedUser.name ? loggedUser.name : menu.name}
                </Button>
              )}
            </Grid>
          ))}
        </Grid>
      </Grid>

      <Drawer
        anchor="right"
        open={state}
        onClose={toggleDrawer}
        className={classes.drawer}
      >
        {newUser === false ? (
          showLogOptions === true ? (
            <div>
              <List>
                <ListItem dense button>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={loggedUser.name}
                    secondary={loggedUser.mobile}
                  />
                </ListItem>
                <ListItem dense button onClick={handleLogOut}>
                  <ListItemIcon>
                    <ExitToAppIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </div>
          ) : (
            <div>
              <Card variant="outlined" className={classes.cardRoot}>
                <CardHeader
                  avatar={
                    <IconButton onClick={toggleDrawer}>
                      <CloseIcon />
                    </IconButton>
                  }
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <Typography variant="h4" component="h4">
                        Login
                      </Typography>
                      <Typography variant="body2" component="p">
                        or Create an account
                      </Typography>
                    </Grid>
                    <Grid item xs={3} container>
                      <img
                        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                        width="100"
                        height="100"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        required
                        label="Phone"
                        value={userPhone}
                        onChange={handlePhoneChange}
                        fullWidth
                        variant="outlined"
                        helperText={msg}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button
                        onClick={handleLogin}
                        size="large"
                        fullWidth
                        className={classes.loginBtn}
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </div>
          )
        ) : (
          <div>
            <Card variant="outlined" className={classes.cardRoot}>
              <CardHeader
                avatar={
                  <IconButton onClick={toggleDrawer}>
                    <CloseIcon />
                  </IconButton>
                }
              />
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={9}>
                    <Typography variant="h4" component="h4">
                      Register Now
                    </Typography>
                    <Typography variant="body2" component="p">
                      or Already have Account? Login
                    </Typography>
                  </Grid>
                  <Grid item xs={3} container>
                    <img
                      src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_147,h_140/Image-login_btpq7r"
                      width="100"
                      height="100"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="name"
                      name="registerName"
                      value={newRegister.registerName}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      helperText={msg}
                      placeholder="Enter Name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="email"
                      name="registerEmail"
                      value={newRegister.registerEmail}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      helperText={msg}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      label="Phone"
                      name="registerMobile"
                      value={newRegister.registerMobile}
                      onChange={handleInputChange}
                      fullWidth
                      variant="outlined"
                      helperText={msg}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      onClick={handleRegister}
                      size="large"
                      fullWidth
                      className={classes.loginBtn}
                    >
                      Register
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </div>
        )}
      </Drawer>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  user: state.data.checkUser,
  userDetails: state.data.user,
  newUser: state.data.newUser,
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkUser: (loggedUser: any) =>
      dispatch({ type: 'CHECK_USER', user: loggedUser }),
    addNewUser: (newUserData: any) =>
      dispatch({ type: 'ADD_NEW_USER', newUser: newUserData }),
    logout: () => dispatch({ type: 'LOGOUT' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
