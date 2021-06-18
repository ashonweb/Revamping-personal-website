import React from 'react';
import { useHistory } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AboutMeComponentStyle from '../Styles/AboutMeComponentStyle';
import { Typography ,Button} from '@material-ui/core';
import dp from '../Assests/dp.jpg';
import dots from '../Assests/dots.png';
import SliderComponent from './SliderComponent'

const AboutMeComponent = (props) => {
  const { classes } = props;
  let history = useHistory();
  const contactme = ()=>{
    history.push('/#ContactMe')
  }
  return (
    <>
      <div className={classes.container}>

        <img src={dots} alt={'profic  not available'} className={classes.dotimage} />
        <img src={dp} alt={'profic  not available'} className={classes.image} />
        <div className={classes.mybio}>
        <h2 className={classes.heading}>My Bio</h2>
            <Typography variant='subtitle1' className={classes.aboutme}>
              Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.

              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </Typography>
            <Typography variant='subtitle1' className={classes.aboutme}>
              A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </Typography>
            <SliderComponent/>
            <Button onClick={contactme}className={classes.hireme}>HIRE ME</Button>

        </div>
      </div>
      

    </>
  )

}
AboutMeComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(AboutMeComponentStyle)(AboutMeComponent)

