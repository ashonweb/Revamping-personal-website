import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HomeComponentStyle from '../Styles/HomeComponentStyle';
import { Typography } from '@material-ui/core';

const HomeComponent = (props) => {

  const { classes } = props;

  return (
    <div>
      <div className={classes.container}>
      </div>
      <div className={classes.maincontentstartshere}>

      </div>

      <div className={classes.authorname}>
        <Typography variant='h1' className={classes.name}>I'am Bhagyashree Meghpal</Typography>
        <Typography variant='h4' className={classes.role}>A Front-end Developer</Typography>
      </div>


    </div>
  )


}
HomeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(HomeComponentStyle)(HomeComponent)


