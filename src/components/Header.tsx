import React from 'react';
import { Grid, Paper, makeStyles, Typography, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
}));

interface Menu {
  name: string;
  icon: any;
}

const allmenu: Menu[] = [
  {
    name: 'search',
    icon: <SearchIcon />,
  },
  {
    name: 'help',
    icon: <HelpOutlineIcon />,
  },
  {
    name: 'sign in',
    icon: <PersonOutlineIcon />,
  },
  {
    name: 'cart',
    icon: <AddShoppingCartIcon />,
  },
];

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.mainPaper}>
      <Grid container>
        <Grid item xs={1}>
          <img src="./logo.png" width="40px" height="50px" />
        </Grid>
        <Grid item xs={4}>
          <Button className={classes.menuButton} endIcon={<ExpandMoreIcon />}>
            Rewa Madhya Pradesh, India
          </Button>
        </Grid>
        <Grid item xs={7} container justifyContent="flex-end">
          {allmenu.map((menu, index) => (
            <Grid item xs={2} key={index}>
              <Button startIcon={menu.icon} className={classes.menuButton}>
                {menu.name}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Header;
