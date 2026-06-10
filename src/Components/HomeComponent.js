import React from 'react';
import { makeStyles } from 'tss-react/mui';
import HomeComponentStyle from '../Styles/HomeComponentStyle';
import { Typography } from '@mui/material';

const useStyles = makeStyles()(HomeComponentStyle);

const HomeComponent = () => {
  const { classes } = useStyles();

  return (
    <div>
      <div className={classes.container}>
      </div>
      <div className={classes.maincontentstartshere}>

      </div>

      <div className={classes.authorname}>
        <Typography variant='h1' className={classes.name}>I'am Bhagyashree Meghpal</Typography>
        <Typography variant='h4' className={classes.role}>Front-end Developer</Typography>
      </div>


    </div>
  )


}
export default HomeComponent
