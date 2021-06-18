import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';


function ValueLabelComponent(props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  open: PropTypes.bool.isRequired,
  value: PropTypes.number.isRequired,
};

function valueLabelFormat(value) {
  
  return `${value}%`;
}



const PrettoSlider = withStyles({
  root: {
    color: '#96bb7c',
    // height: 8,
  },
  
})(Slider);



export default function SliderComponent() {
  // const classes = useStyles();

  return (
   <>
      <Typography gutterBottom style={{color:'#000000'}}>HTML 5</Typography>
      <PrettoSlider valueLabelDisplay="on" valueLabelFormat={valueLabelFormat} aria-label="pretto slider" defaultValue={20}  value={82}/>
      <Typography gutterBottom style={{color:'#000000'}}>CSS</Typography>
      <PrettoSlider valueLabelDisplay="on" valueLabelFormat={valueLabelFormat} aria-label="pretto slider" defaultValue={20}  value={75}/> 
      <Typography gutterBottom style={{color:'#000000'}}>Javascript</Typography>
      <PrettoSlider valueLabelDisplay="on"  valueLabelFormat={valueLabelFormat}aria-label="pretto slider" defaultValue={20}  value={70}/> 
      <Typography gutterBottom style={{color:'#000000'}}>React</Typography>
      <PrettoSlider valueLabelDisplay="on"  valueLabelFormat={valueLabelFormat}aria-label="pretto slider" defaultValue={20}  value={75}/> 
      <Typography gutterBottom style={{color:'#000000'}}>Node,Express</Typography>
      <PrettoSlider valueLabelDisplay="on"  valueLabelFormat={valueLabelFormat}aria-label="pretto slider" defaultValue={20}  value={45}/>
      <Typography gutterBottom style={{color:'#000000'}}>MongoDB</Typography>
      <PrettoSlider valueLabelDisplay="on"  valueLabelFormat={valueLabelFormat}aria-label="pretto slider" defaultValue={20}  value={45}/>
      <Typography gutterBottom style={{color:'#000000'}}>Design</Typography>
      <PrettoSlider valueLabelDisplay="on"  valueLabelFormat={valueLabelFormat}aria-label="pretto slider" defaultValue={20}  value={35}/>
      
      
      </>
  );
}