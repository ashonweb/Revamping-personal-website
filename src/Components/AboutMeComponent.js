import React from 'react';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AboutMeComponentStyle from '../Styles/AboutMeComponentStyle';
import { Typography } from '@material-ui/core';
import dp from '../Assests/dp.jpg';
import dots from '../Assests/dots.png';
import SliderComponent from './SliderComponent'
import { NavHashLink } from 'react-router-hash-link';

const AboutMeComponent = (props) => {
  const { classes } = props;
  
  return (
    <>
      <div className={classes.container}>

        <img src={dots} alt={'profic  not available'} className={classes.dotimage} />
        <img src={dp} alt={'profic  not available'} className={classes.image} />
        <div className={classes.mybio}>
        <h2 className={classes.heading}>My Bio</h2>
      
            <Typography variant='subtitle1' className={classes.aboutme}>
            I'm Bhagyashree Meghpal, Front end developer. Currently working at Dell Technologies (Bangalore).
            I am passionate about web development and eager to work on new things with creative ideas.
            </Typography>
            <Typography variant='subtitle1' className={classes.aboutme}>
            When I'm not coding or pushing pixels ,you'll find me watching good movies, TV shows & listening to music.  </Typography>
            <SliderComponent/>
            {/* <Button onClick={contactme}className={classes.hireme}>HIRE ME</Button> */}
            <NavHashLink to='#ContactMe'className={classes.hireme} >Hire Me</NavHashLink>


        </div>
      </div>
      

    </>
  )

}
AboutMeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(AboutMeComponentStyle)(AboutMeComponent)

