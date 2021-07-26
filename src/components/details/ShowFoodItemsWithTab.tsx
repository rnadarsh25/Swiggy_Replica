import React, { useState, useContext } from 'react';
import { FoodContext } from '../details/FoodItems';
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
import { useEffect } from 'react';

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

// const TabPanel = (props: any) => {
//   const { children, value, index } = props;
//   return <div>{value === index ? children : null}</div>;
// };

const ShowFoodItemsWithTab: React.FC<any> = (props) => {
  const { menuDetails } = props;

  const { totalOrder, setTotalOrder } = useContext<any>(FoodContext);

  let setcategories = new Set();
  menuDetails.forEach((menu: any) => setcategories.add(menu.category));

  console.log(setcategories);
  const categories: string[] = [];

  setcategories.forEach((cat: any) => categories.push(cat));

  const [value, setValue] = useState(0);
  const [menu, setMenu] = useState(categories[0]);

  const handleValueChange = (e: any, newValue: number) => {
    setValue(newValue);
    setMenu(categories[newValue]);
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
          {menuDetails.map((item: any, index: number) => (
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
  );
};

export default ShowFoodItemsWithTab;
