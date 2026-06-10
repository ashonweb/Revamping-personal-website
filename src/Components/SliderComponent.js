import React from 'react';
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PropTypes from 'prop-types';

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

const PrettoSlider = styled(Slider)({
  color: '#96bb7c',
});

export default function SliderComponent() {
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
