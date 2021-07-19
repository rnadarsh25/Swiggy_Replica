import React, { useState } from 'react';
import {
  Grid,
  Paper,
  makeStyles,
  Tabs,
  Typography,
  Button,
  Tab,
} from '@material-ui/core';
import ShowItems from './ShowItems';
import ItemCard from '../useComponents/ItemCard';

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

function ShowFoodItemsWithTab() {
  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState('Recommended');
  const allMenus: string[] = [
    'Recommended',
    'Swiggy Special Combos',
    'Rice & Birayani',
    'Desserts',
    'Juice',
  ];
  const handleValueChange = (e: any, newValue: number) => {
    setValue(newValue);
    setMenu(allMenus[newValue]);
  };
  const classes = useStyles();
  return (
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
          <Tab label="Recommended"></Tab>
          <Tab label="Swiggy Special Combos"></Tab>
          <Tab label="Rice & Birayani"></Tab>
          <Tab label="Desserts"></Tab>
          <Tab label="juice"></Tab>
        </Tabs>
      </Grid>
      <ShowItems menu={menu} />
    </Grid>
  );
}

export default ShowFoodItemsWithTab;
